// 🎭 TransformationRules - Validates and applies costume transformations safely
// Ensures costume combinations never break the engine

class TransformationRules {
    constructor() {
        // 🔒 Safety limits
        this.limits = {
            ghost: {
                maxPersonalityChange: 0.5,
                minNightPower: 1.0,
                maxNightPower: 3.0,
                maxWhisperProbability: 0.9
            },
            zombie: {
                maxSpeedMultiplier: 3.0,
                minSpeed: 10,
                minHealth: 50,
                maxHealth: 300,
                maxAggressionChange: 0.3,
                minDecayRate: 0.01,
                maxDecayRate: 0.5
            },
            frankenstein: {
                maxOrgans: 15,
                maxPowerMultiplier: 3.0,
                minCompatibility: 0.5
            }
        };
        
        // ⏱️ Cooldowns (ms)
        this.cooldowns = {
            ghost: 5000,
            zombie: 3000,
            frankenstein: 10000
        };
        
        // 📊 Last transformation times
        this.lastTransform = {
            ghost: 0,
            zombie: 0,
            frankenstein: 0
        };
    }

    // ✅ Validate ghost transformation
    validateGhostTransform(ghost, costume) {
        const errors = [];
        
        // ⏱️ Check cooldown
        if (!this.checkCooldown('ghost')) {
            errors.push('Ghost transformation on cooldown');
        }
        
        // 🎭 Validate personality changes
        if (costume.personality) {
            for (const [trait, value] of Object.entries(costume.personality)) {
                const currentValue = ghost.traits[trait] || 0;
                const change = Math.abs(value - currentValue);
                
                if (change > this.limits.ghost.maxPersonalityChange) {
                    errors.push(`Personality change too large for ${trait}`);
                }
            }
        }
        
        // 💪 Validate powers
        if (costume.powers) {
            if (costume.powers.nightVision) {
                const newPower = ghost.nightPowerMultiplier * costume.powers.nightVision;
                if (newPower > this.limits.ghost.maxNightPower) {
                    errors.push('Night power exceeds maximum');
                }
            }
            
            if (costume.powers.whisperFrequency) {
                const newProb = ghost.whisperProbability * costume.powers.whisperFrequency;
                if (newProb > this.limits.ghost.maxWhisperProbability) {
                    errors.push('Whisper probability too high');
                }
            }
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    }

    // ✅ Validate zombie transformation
    validateZombieTransform(zombie, costume) {
        const errors = [];
        
        // ⏱️ Check cooldown
        if (!this.checkCooldown('zombie')) {
            errors.push('Zombie transformation on cooldown');
        }
        
        // 📊 Validate stats
        if (costume.stats) {
            // 🏃 Speed check
            if (costume.stats.speed) {
                const newSpeed = zombie.chaseSpeed * costume.stats.speed;
                if (newSpeed < this.limits.zombie.minSpeed) {
                    errors.push('Speed too low');
                }
                if (costume.stats.speed > this.limits.zombie.maxSpeedMultiplier) {
                    errors.push('Speed multiplier too high');
                }
            }
            
            // 💚 Health check
            if (costume.stats.health) {
                if (costume.stats.health < this.limits.zombie.minHealth) {
                    errors.push('Health too low');
                }
                if (costume.stats.health > this.limits.zombie.maxHealth) {
                    errors.push('Health too high');
                }
            }
            
            // 😠 Aggression check
            if (costume.stats.aggression !== undefined) {
                const change = Math.abs(costume.stats.aggression - zombie.aggressionLevel);
                if (change > this.limits.zombie.maxAggressionChange) {
                    errors.push('Aggression change too large');
                }
            }
            
            // 💀 Decay rate check
            if (costume.stats.decayRate) {
                if (costume.stats.decayRate < this.limits.zombie.minDecayRate) {
                    errors.push('Decay rate too low');
                }
                if (costume.stats.decayRate > this.limits.zombie.maxDecayRate) {
                    errors.push('Decay rate too high');
                }
            }
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    }

    // ✅ Validate Frankenstein transformation
    validateFrankensteinTransform(creature, costume) {
        const errors = [];
        
        // ⏱️ Check cooldown
        if (!this.checkCooldown('frankenstein')) {
            errors.push('Frankenstein transformation on cooldown');
        }
        
        // 🧠 Validate organ count
        if (costume.organs) {
            const totalOrgans = creature.parts.length + costume.organs.length;
            if (totalOrgans > this.limits.frankenstein.maxOrgans) {
                errors.push(`Too many organs (max ${this.limits.frankenstein.maxOrgans})`);
            }
        }
        
        // 💪 Validate powers
        if (costume.powers) {
            for (const [power, multiplier] of Object.entries(costume.powers)) {
                if (multiplier > this.limits.frankenstein.maxPowerMultiplier) {
                    errors.push(`Power ${power} multiplier too high`);
                }
            }
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    }

    // ⏱️ Check cooldown
    checkCooldown(type) {
        const now = Date.now();
        const lastTime = this.lastTransform[type];
        const cooldown = this.cooldowns[type];
        
        return (now - lastTime) >= cooldown;
    }

    // 📝 Record transformation
    recordTransform(type) {
        this.lastTransform[type] = Date.now();
    }

    // 🔒 Apply safe transformation
    applySafeTransform(type, entity, costume, applyFn) {
        // ✅ Validate first
        let validation;
        switch (type) {
            case 'ghost':
                validation = this.validateGhostTransform(entity, costume);
                break;
            case 'zombie':
                validation = this.validateZombieTransform(entity, costume);
                break;
            case 'frankenstein':
                validation = this.validateFrankensteinTransform(entity, costume);
                break;
        }
        
        if (!validation.valid) {
            throw new Error(`🚫 Transformation failed: ${validation.errors.join(', ')}`);
        }
        
        // 🎭 Apply transformation
        try {
            applyFn();
            this.recordTransform(type);
            console.log(`✅ Safe transformation applied to ${type}`);
        } catch (error) {
            console.error(`🚫 Transformation error:`, error);
            throw error;
        }
    }

    // 📊 Get cooldown status
    getCooldownStatus() {
        const now = Date.now();
        return {
            ghost: {
                ready: this.checkCooldown('ghost'),
                remaining: Math.max(0, this.cooldowns.ghost - (now - this.lastTransform.ghost))
            },
            zombie: {
                ready: this.checkCooldown('zombie'),
                remaining: Math.max(0, this.cooldowns.zombie - (now - this.lastTransform.zombie))
            },
            frankenstein: {
                ready: this.checkCooldown('frankenstein'),
                remaining: Math.max(0, this.cooldowns.frankenstein - (now - this.lastTransform.frankenstein))
            }
        };
    }

    // ⚙️ Update limits (for testing/admin)
    updateLimits(type, newLimits) {
        if (this.limits[type]) {
            Object.assign(this.limits[type], newLimits);
            console.log(`⚙️ Updated limits for ${type}`);
        }
    }

    // ⚙️ Update cooldowns
    updateCooldowns(type, newCooldown) {
        if (this.cooldowns[type] !== undefined) {
            this.cooldowns[type] = newCooldown;
            console.log(`⚙️ Updated cooldown for ${type}: ${newCooldown}ms`);
        }
    }
}

export default TransformationRules;
