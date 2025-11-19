// 🔗 SystemIntegrator - Connects All Modules into Unified Experience
// Ghost Chat ↔ Zombie Engine ↔ Frankenstein ↔ Resurrection Core

class SystemIntegrator {
    constructor(resurrectionEngine) {
        // 💀 Core engine reference
        this.engine = resurrectionEngine;
        
        // 🔗 Module references
        this.ghostChat = null;
        this.zombieEngine = null;
        this.costumeEngine = null;
        
        // 🎭 Cross-system state
        this.crossSystemState = {
            ghostInfluencesZombie: true,
            zombieInfluencesGhost: true,
            frankensteinInfluencesBoth: true
        };
        
        // 📊 Integration metrics
        this.metrics = {
            crossSystemEvents: 0,
            emotionalTriggers: 0,
            behaviorChanges: 0
        };
    }

    // 🔗 Connect Ghost Chat module
    connectGhostChat(ghostChatModule) {
        this.ghostChat = ghostChatModule;
        console.log('👻 Ghost Chat connected to integrator');
        this.setupGhostListeners();
    }

    // 🔗 Connect Zombie Engine module
    connectZombieEngine(zombieEngineModule) {
        this.zombieEngine = zombieEngineModule;
        console.log('🧟 Zombie Engine connected to integrator');
        this.setupZombieListeners();
    }

    // 🔗 Connect Costume Engine
    connectCostumeEngine(costumeEngineModule) {
        this.costumeEngine = costumeEngineModule;
        console.log('🎭 Costume Engine connected to integrator');
        this.setupCostumeListeners();
    }

    // 👻 Setup ghost event listeners
    setupGhostListeners() {
        // 😠 Ghost gets angry → Zombies become aggressive
        this.engine.on('emotionChanged', (data) => {
            if (data.emotion === 'rage' && data.intensity > 0.7) {
                this.triggerZombieAggression();
                this.metrics.emotionalTriggers++;
            }
            
            // 😱 Ghost gets scared → Zombies detect fear
            if (data.emotion === 'fear' && data.intensity > 0.6) {
                this.triggerZombieDetection();
                this.metrics.emotionalTriggers++;
            }
            
            // 😈 Ghost gets mischievous → Zombies wander more
            if (data.emotion === 'mischief' && data.intensity > 0.7) {
                this.triggerZombieWander();
                this.metrics.emotionalTriggers++;
            }
        });

        // 🌙 Night mode → Boost both systems
        this.engine.on('pulse', (data) => {
            if (data.environment.timeOfDay === 'witching') {
                this.applyWitchingHourBoost();
            }
        });
    }

    // 🧟 Setup zombie event listeners
    setupZombieListeners() {
        // 🔊 Zombie makes noise → Ghost hears it
        if (this.engine.zombieAI) {
            const originalBehaviorAttack = this.engine.zombieAI.behaviorAttack;
            this.engine.zombieAI.behaviorAttack = () => {
                originalBehaviorAttack.call(this.engine.zombieAI);
                this.triggerGhostReaction('zombie_attack');
                this.metrics.crossSystemEvents++;
            };
        }
    }

    // 🎭 Setup costume event listeners
    setupCostumeListeners() {
        this.engine.on('costumeApplied', (data) => {
            console.log(`🎭 Costume applied: ${data.costume} to ${data.type}`);
            this.handleCostumeChange(data);
            this.metrics.behaviorChanges++;
        });
    }

    // 😠 Trigger zombie aggression
    triggerZombieAggression() {
        if (!this.crossSystemState.ghostInfluencesZombie) return;
        
        const zombie = this.engine.zombieAI;
        if (!zombie) return;

        console.log('😠 Ghost rage triggers zombie aggression!');
        
        // 💪 Boost zombie aggression
        zombie.aggressionLevel = Math.min(1, zombie.aggressionLevel * 1.5);
        zombie.chaseSpeed *= 1.3;
        
        // 🎯 Force into chasing state if idle
        if (zombie.state === 'idle' || zombie.state === 'wandering') {
            zombie.state = 'detecting';
        }
    }

    // 👁️ Trigger zombie detection
    triggerZombieDetection() {
        if (!this.crossSystemState.ghostInfluencesZombie) return;
        
        const zombie = this.engine.zombieAI;
        if (!zombie) return;

        console.log('😱 Ghost fear triggers zombie detection!');
        
        // 👂 Boost zombie senses
        zombie.visionRadius *= 1.2;
        zombie.hearingRadius *= 1.3;
        
        // 🎯 Enter detecting state
        if (zombie.state === 'idle') {
            zombie.state = 'detecting';
        }
    }

    // 🚶 Trigger zombie wander
    triggerZombieWander() {
        if (!this.crossSystemState.ghostInfluencesZombie) return;
        
        const zombie = this.engine.zombieAI;
        if (!zombie) return;

        console.log('😈 Ghost mischief triggers zombie wandering!');
        
        // 🦴 Make zombie wander
        if (zombie.state === 'idle') {
            zombie.state = 'wandering';
        }
    }

    // 👻 Trigger ghost reaction to zombie
    triggerGhostReaction(event) {
        if (!this.crossSystemState.zombieInfluencesGhost) return;
        
        const ghost = this.engine.ghostPersonality;
        if (!ghost) return;

        console.log(`👻 Ghost reacts to zombie event: ${event}`);
        
        switch (event) {
            case 'zombie_attack':
                // 😱 Ghost becomes fearful
                this.engine.setEmotion('fear', 0.7);
                ghost.setState('fearful');
                break;
                
            case 'zombie_decay':
                // 😔 Ghost becomes curious
                this.engine.setEmotion('curiosity', 0.6);
                ghost.setState('curious');
                break;
                
            case 'zombie_revive':
                // 😈 Ghost becomes mischievous
                this.engine.setEmotion('mischief', 0.8);
                ghost.setState('mischievous');
                break;
        }
    }

    // 🌙 Apply witching hour boost to all systems
    applyWitchingHourBoost() {
        console.log('🌙 Witching hour! Boosting all systems...');
        
        const ghost = this.engine.ghostPersonality;
        const zombie = this.engine.zombieAI;
        
        if (ghost) {
            ghost.nightPowerMultiplier = 2.0;
            ghost.whisperProbability = 0.5;
        }
        
        if (zombie) {
            zombie.visionRadius *= 1.5;
            zombie.chaseSpeed *= 1.2;
        }
    }

    // 🎭 Handle costume changes
    handleCostumeChange(data) {
        const { type, costume } = data;
        
        // 🔗 Costume affects other systems
        if (type === 'ghost' && costume.includes('Vampire')) {
            // 🧛 Vampire ghost makes zombies more aggressive
            this.triggerZombieAggression();
        }
        
        if (type === 'zombie' && costume.includes('Runner')) {
            // 🏃 Fast zombie scares ghost
            this.engine.setEmotion('fear', 0.6);
        }
        
        if (type === 'frankenstein') {
            // 🔗 Frankenstein affects both systems
            if (this.crossSystemState.frankensteinInfluencesBoth) {
                this.applyFrankensteinInfluence(costume);
            }
        }
    }

    // 🔗 Apply Frankenstein influence to other systems
    applyFrankensteinInfluence(costume) {
        console.log(`🔗 Frankenstein costume influences all systems: ${costume}`);
        
        const ghost = this.engine.ghostPersonality;
        const zombie = this.engine.zombieAI;
        
        // 💪 Boost both systems
        if (ghost) {
            ghost.traits.curiosityLevel *= 1.3;
        }
        
        if (zombie) {
            zombie.health = Math.min(200, zombie.health * 1.2);
        }
    }

    // 🎮 Process user command across all systems
    processCommand(command) {
        // 🎭 Check for costume command
        if (this.costumeEngine && command.startsWith('/costume')) {
            const parsed = this.costumeEngine.parseCommand(command);
            if (parsed) {
                return this.applyCostumeCommand(parsed);
            }
        }
        
        // 👻 Check for ghost command
        if (command.startsWith('/ghost')) {
            return this.processGhostCommand(command);
        }
        
        // 🧟 Check for zombie command
        if (command.startsWith('/zombie')) {
            return this.processZombieCommand(command);
        }
        
        return null;
    }

    // 🎭 Apply costume command
    applyCostumeCommand(parsed) {
        const { type, costume } = parsed;
        
        try {
            if (costume === 'random') {
                return this.costumeEngine.applyRandomCostume(type);
            } else {
                switch (type) {
                    case 'ghost':
                        return this.costumeEngine.applyGhostCostume(costume);
                    case 'zombie':
                        return this.costumeEngine.applyZombieCostume(costume);
                    case 'frankenstein':
                        return this.costumeEngine.applyFrankensteinCostume(costume);
                }
            }
        } catch (error) {
            console.error('🚫 Costume command failed:', error.message);
            return { error: error.message };
        }
    }

    // 👻 Process ghost command
    processGhostCommand(command) {
        const ghost = this.engine.ghostPersonality;
        if (!ghost) return { error: 'Ghost not connected' };
        
        // /ghost state curious
        // /ghost whisper
        
        const parts = command.split(' ');
        
        if (parts[1] === 'state' && parts[2]) {
            ghost.setState(parts[2]);
            return { success: `Ghost state set to ${parts[2]}` };
        }
        
        if (parts[1] === 'whisper') {
            return { whisper: ghost.whisper() };
        }
        
        return null;
    }

    // 🧟 Process zombie command
    processZombieCommand(command) {
        const zombie = this.engine.zombieAI;
        if (!zombie) return { error: 'Zombie not connected' };
        
        // /zombie revive
        // /zombie aggro
        
        const parts = command.split(' ');
        
        if (parts[1] === 'revive') {
            zombie.revive(50);
            return { success: 'Zombie revived!' };
        }
        
        if (parts[1] === 'aggro') {
            this.triggerZombieAggression();
            return { success: 'Zombie aggression triggered!' };
        }
        
        return null;
    }

    // 📊 Get integration metrics
    getMetrics() {
        return {
            ...this.metrics,
            ghostConnected: !!this.ghostChat,
            zombieConnected: !!this.zombieEngine,
            costumeConnected: !!this.costumeEngine,
            crossSystemEnabled: this.crossSystemState
        };
    }

    // ⚙️ Toggle cross-system influence
    toggleCrossSystem(system, enabled) {
        this.crossSystemState[system] = enabled;
        console.log(`⚙️ Cross-system ${system}: ${enabled ? 'enabled' : 'disabled'}`);
    }
}

export default SystemIntegrator;
