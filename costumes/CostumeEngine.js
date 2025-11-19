// 🎭 CostumeEngine - Transform Monsters with Costumes
// Dynamically modifies AI stats, personality, and visual elements

class CostumeEngine {
    constructor(resurrectionEngine) {
        // 💀 Reference to resurrection engine
        this.engine = resurrectionEngine;
        
        // 🎃 Available costumes
        this.costumes = new Map();
        
        // 👻 Currently applied costumes
        this.activeCostumes = {
            ghost: null,
            zombie: null,
            frankenstein: null
        };
        
        // 🎨 Visual transformations
        this.visualEffects = new Map();
        
        // 🔊 Audio transformations
        this.audioEffects = new Map();
    }

    // 🎭 Register a costume preset
    registerCostume(costume) {
        this.costumes.set(costume.id, costume);
        console.log(`🎭 Costume registered: ${costume.name}`);
    }

    // 👻 Apply costume to ghost
    applyGhostCostume(costumeId) {
        const costume = this.costumes.get(costumeId);
        if (!costume || costume.type !== 'ghost') {
            throw new Error('🚫 Invalid ghost costume!');
        }

        const ghost = this.engine.ghostPersonality;
        if (!ghost) {
            throw new Error('🚫 Ghost not connected!');
        }

        console.log(`🎭 Applying ${costume.name} to ghost...`);

        // 🎨 Apply personality modifications
        if (costume.personality) {
            Object.assign(ghost.traits, costume.personality);
        }

        // 🎭 Apply state modifications
        if (costume.defaultState) {
            ghost.setState(costume.defaultState);
        }

        // 🔊 Apply audio effects
        if (costume.audio) {
            this.audioEffects.set('ghost', costume.audio);
        }

        // 🎨 Apply visual effects
        if (costume.visual) {
            this.visualEffects.set('ghost', costume.visual);
        }

        // 💬 Apply speech modifications
        if (costume.speech) {
            ghost.toneModifiers = costume.speech;
        }

        // 💪 Apply power modifications
        if (costume.powers) {
            this.applyGhostPowers(ghost, costume.powers);
        }

        this.activeCostumes.ghost = costumeId;
        this.engine.emit('costumeApplied', { type: 'ghost', costume: costume.name });
        
        console.log(`✅ ${costume.name} applied to ghost!`);
        return costume;
    }

    // 🧟 Apply costume to zombie
    applyZombieCostume(costumeId) {
        const costume = this.costumes.get(costumeId);
        if (!costume || costume.type !== 'zombie') {
            throw new Error('🚫 Invalid zombie costume!');
        }

        const zombie = this.engine.zombieAI;
        if (!zombie) {
            throw new Error('🚫 Zombie not connected!');
        }

        console.log(`🎭 Applying ${costume.name} to zombie...`);

        // 📊 Apply stat modifications
        if (costume.stats) {
            if (costume.stats.speed) {
                zombie.wanderSpeed *= costume.stats.speed;
                zombie.chaseSpeed *= costume.stats.speed;
            }
            if (costume.stats.health) {
                zombie.health = costume.stats.health;
            }
            if (costume.stats.aggression) {
                zombie.aggressionLevel = costume.stats.aggression;
            }
            if (costume.stats.decayRate) {
                zombie.decayRate = costume.stats.decayRate;
            }
        }

        // 👁️ Apply sense modifications
        if (costume.senses) {
            Object.assign(zombie, costume.senses);
        }

        // 🎨 Apply visual effects
        if (costume.visual) {
            this.visualEffects.set('zombie', costume.visual);
        }

        // 🔊 Apply audio effects
        if (costume.audio) {
            this.audioEffects.set('zombie', costume.audio);
        }

        // 💪 Apply special powers
        if (costume.powers) {
            this.applyZombiePowers(zombie, costume.powers);
        }

        this.activeCostumes.zombie = costumeId;
        this.engine.emit('costumeApplied', { type: 'zombie', costume: costume.name });
        
        console.log(`✅ ${costume.name} applied to zombie!`);
        return costume;
    }

    // 🔗 Apply costume to Frankenstein creature
    applyFrankensteinCostume(costumeId, creatureId) {
        const costume = this.costumes.get(costumeId);
        if (!costume || costume.type !== 'frankenstein') {
            throw new Error('🚫 Invalid Frankenstein costume!');
        }

        const stitching = this.engine.stitchingSystem;
        if (!stitching) {
            throw new Error('🚫 Stitching system not connected!');
        }

        console.log(`🎭 Applying ${costume.name} to Frankenstein creature...`);

        // 🧠 Add new organs
        if (costume.organs) {
            costume.organs.forEach(organ => {
                this.addOrganToCreature(creatureId, organ);
            });
        }

        // 💪 Apply power modifications
        if (costume.powers) {
            this.applyFrankensteinPowers(creatureId, costume.powers);
        }

        // 🎨 Apply visual effects
        if (costume.visual) {
            this.visualEffects.set(`frankenstein_${creatureId}`, costume.visual);
        }

        this.activeCostumes.frankenstein = costumeId;
        this.engine.emit('costumeApplied', { type: 'frankenstein', costume: costume.name });
        
        console.log(`✅ ${costume.name} applied to Frankenstein!`);
        return costume;
    }

    // 🎲 Apply random costume
    applyRandomCostume(type) {
        const availableCostumes = Array.from(this.costumes.values())
            .filter(c => c.type === type);
        
        if (availableCostumes.length === 0) {
            throw new Error(`🚫 No costumes available for ${type}!`);
        }

        const randomCostume = availableCostumes[
            Math.floor(Math.random() * availableCostumes.length)
        ];

        console.log(`🎲 Random costume selected: ${randomCostume.name}`);

        switch (type) {
            case 'ghost':
                return this.applyGhostCostume(randomCostume.id);
            case 'zombie':
                return this.applyZombieCostume(randomCostume.id);
            case 'frankenstein':
                return this.applyFrankensteinCostume(randomCostume.id);
        }
    }

    // 💪 Apply ghost powers
    applyGhostPowers(ghost, powers) {
        if (powers.nightVision) {
            ghost.nightPowerMultiplier *= powers.nightVision;
        }
        if (powers.whisperFrequency) {
            ghost.whisperProbability *= powers.whisperFrequency;
        }
        if (powers.memoryBoost) {
            ghost.maxMemory *= powers.memoryBoost;
        }
    }

    // 💪 Apply zombie powers
    applyZombiePowers(zombie, powers) {
        if (powers.regeneration) {
            zombie.decayRate *= (1 - powers.regeneration);
        }
        if (powers.superHearing) {
            zombie.hearingRadius *= powers.superHearing;
        }
        if (powers.nightVision) {
            zombie.visionRadius *= powers.nightVision;
        }
        if (powers.berserker) {
            zombie.chaseSpeed *= powers.berserker;
            zombie.aggressionLevel = Math.min(1, zombie.aggressionLevel * 1.5);
        }
    }

    // 💪 Apply Frankenstein powers
    applyFrankensteinPowers(creatureId, powers) {
        // TODO: Apply powers to specific creature
        console.log(`💪 Applying powers to creature ${creatureId}:`, powers);
    }

    // 🧠 Add organ to creature
    addOrganToCreature(creatureId, organ) {
        const stitching = this.engine.stitchingSystem;
        // TODO: Dynamically add organ to existing creature
        console.log(`🧠 Adding ${organ.name} to creature ${creatureId}`);
    }

    // 🎨 Get visual effect for entity
    getVisualEffect(type, id = null) {
        const key = id ? `${type}_${id}` : type;
        return this.visualEffects.get(key);
    }

    // 🔊 Get audio effect for entity
    getAudioEffect(type, id = null) {
        const key = id ? `${type}_${id}` : type;
        return this.audioEffects.get(key);
    }

    // 🧹 Remove costume
    removeCostume(type) {
        console.log(`🧹 Removing ${type} costume...`);
        
        this.activeCostumes[type] = null;
        this.visualEffects.delete(type);
        this.audioEffects.delete(type);
        
        // TODO: Reset to default stats
        console.log(`✅ ${type} costume removed`);
    }

    // 📋 List available costumes
    listCostumes(type = null) {
        if (type) {
            return Array.from(this.costumes.values())
                .filter(c => c.type === type);
        }
        return Array.from(this.costumes.values());
    }

    // 📊 Get active costumes
    getActiveCostumes() {
        return {
            ghost: this.activeCostumes.ghost ? 
                this.costumes.get(this.activeCostumes.ghost).name : 'None',
            zombie: this.activeCostumes.zombie ? 
                this.costumes.get(this.activeCostumes.zombie).name : 'None',
            frankenstein: this.activeCostumes.frankenstein ? 
                this.costumes.get(this.activeCostumes.frankenstein).name : 'None'
        };
    }

    // 🎭 Parse costume command
    parseCommand(command) {
        // /costume vampire
        // /costume zombie skeleton
        // /costume surprise
        
        const parts = command.toLowerCase().split(' ');
        
        if (parts[0] !== '/costume') {
            return null;
        }

        if (parts[1] === 'surprise') {
            // Random costume for random type
            const types = ['ghost', 'zombie', 'frankenstein'];
            const randomType = types[Math.floor(Math.random() * types.length)];
            return { type: randomType, costume: 'random' };
        }

        // Find costume by name
        const costumeName = parts.slice(1).join(' ');
        const costume = Array.from(this.costumes.values())
            .find(c => c.name.toLowerCase() === costumeName);

        if (costume) {
            return { type: costume.type, costume: costume.id };
        }

        return null;
    }
}

export default CostumeEngine;
