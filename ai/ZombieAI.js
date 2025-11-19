// 🧟 ZombieAI - Undead Behavior System
// State machine: idle → detect → chase → attack → decay

class ZombieAI {
    constructor(zombie) {
        // 💀 Reference to zombie entity
        this.zombie = zombie;
        
        // 🎭 Current state
        this.state = 'idle'; // idle, wandering, detecting, chasing, attacking, decaying
        
        // 🎯 Target tracking
        this.target = null;
        this.lastKnownTargetPos = null;
        
        // 👁️ Senses
        this.visionRadius = 150;
        this.hearingRadius = 200;
        this.attackRadius = 30;
        
        // 🦴 Movement properties
        this.wanderSpeed = 20;
        this.chaseSpeed = 50;
        this.wanderDirection = { x: 0, y: 0 };
        this.wanderTimer = 0;
        this.wanderInterval = 2000; // Change direction every 2s
        
        // 💪 Health and decay
        this.health = 100;
        this.decayRate = 0.1; // HP per second
        this.lastDecayTime = Date.now();
        
        // 🔊 Sound sensitivity
        this.soundLevel = 0;
        this.soundDecay = 0.95; // Sound fades quickly
        
        // 🧠 AI parameters
        this.aggressionLevel = 0.7;
        this.detectionChance = 0.8;
        this.loseTargetTime = 5000; // Forget target after 5s
        this.lastTargetSeen = 0;
    }

    // 💓 Pulse - called every frame
    pulse(environment) {
        // 💀 Apply decay
        this.applyDecay();
        
        // 🔊 Decay sound level
        this.soundLevel *= this.soundDecay;
        
        // 🎭 Update state machine
        this.updateStateMachine(environment);
        
        // 🦴 Execute current state behavior
        this.executeBehavior();
    }

    // 🎭 State machine logic
    updateStateMachine(environment) {
        switch (this.state) {
            case 'idle':
                // 👁️ Check for targets
                if (this.detectTarget() || this.hearSound()) {
                    this.state = 'detecting';
                } else if (Math.random() < 0.1) {
                    // 🚶 Randomly start wandering
                    this.state = 'wandering';
                }
                break;
                
            case 'wandering':
                // 👁️ Check for targets while wandering
                if (this.detectTarget() || this.hearSound()) {
                    this.state = 'detecting';
                } else if (Math.random() < 0.05) {
                    // 🛑 Randomly stop wandering
                    this.state = 'idle';
                }
                break;
                
            case 'detecting':
                // 🎯 Confirm target detection
                if (this.target) {
                    this.state = 'chasing';
                    this.lastTargetSeen = Date.now();
                } else {
                    this.state = 'idle';
                }
                break;
                
            case 'chasing':
                // 💥 Check if in attack range
                if (this.isInAttackRange()) {
                    this.state = 'attacking';
                } else if (this.hasLostTarget()) {
                    // 😕 Lost target
                    this.state = 'idle';
                    this.target = null;
                } else if (this.target) {
                    this.lastTargetSeen = Date.now();
                }
                break;
                
            case 'attacking':
                // 🎯 Check if target escaped
                if (!this.isInAttackRange()) {
                    this.state = 'chasing';
                }
                break;
                
            case 'decaying':
                // 💀 Zombie is dying
                if (this.health <= 0) {
                    this.state = 'dead';
                }
                break;
        }
        
        // 💀 Check for decay state
        if (this.health < 30 && this.state !== 'dead') {
            this.state = 'decaying';
        }
    }

    // 🎬 Execute behavior for current state
    executeBehavior() {
        switch (this.state) {
            case 'idle':
                this.behaviorIdle();
                break;
            case 'wandering':
                this.behaviorWander();
                break;
            case 'detecting':
                this.behaviorDetect();
                break;
            case 'chasing':
                this.behaviorChase();
                break;
            case 'attacking':
                this.behaviorAttack();
                break;
            case 'decaying':
                this.behaviorDecay();
                break;
        }
    }

    // 🛑 Idle behavior
    behaviorIdle() {
        // 💀 Stand still, occasionally groan
        this.zombie.vx = 0;
        this.zombie.vy = 0;
        
        if (Math.random() < 0.01) {
            console.log('🧟 *groan*');
        }
    }

    // 🚶 Wander behavior
    behaviorWander() {
        const now = Date.now();
        
        // 🔄 Change direction periodically
        if (now - this.wanderTimer > this.wanderInterval) {
            this.wanderDirection = {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            };
            this.wanderTimer = now;
        }
        
        // 🦴 Move in wander direction
        this.zombie.vx = this.wanderDirection.x * this.wanderSpeed;
        this.zombie.vy = this.wanderDirection.y * this.wanderSpeed;
    }

    // 👁️ Detect behavior
    behaviorDetect() {
        // 🎯 Look around for target
        console.log('🧟 *detecting*');
    }

    // 🏃 Chase behavior
    behaviorChase() {
        if (!this.target) return;
        
        // 📐 Calculate direction to target
        const dx = this.target.x - this.zombie.x;
        const dy = this.target.y - this.zombie.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
            // 🦴 Move toward target
            this.zombie.vx = (dx / distance) * this.chaseSpeed;
            this.zombie.vy = (dy / distance) * this.chaseSpeed;
            
            // 🧟 Add shambling randomness
            this.zombie.vx += (Math.random() - 0.5) * 10;
            this.zombie.vy += (Math.random() - 0.5) * 10;
        }
    }

    // 💥 Attack behavior
    behaviorAttack() {
        // 🦴 Stop moving
        this.zombie.vx = 0;
        this.zombie.vy = 0;
        
        // 💥 Attack animation/logic
        console.log('🧟 *ATTACK!*');
        
        // 🩸 Deal damage (would be handled by game logic)
        if (Math.random() < 0.1) {
            console.log('🩸 Bite!');
        }
    }

    // 💀 Decay behavior
    behaviorDecay() {
        // 🦴 Slow, weakened movement
        this.zombie.vx *= 0.5;
        this.zombie.vy *= 0.5;
        
        console.log(`💀 Zombie decaying... HP: ${this.health.toFixed(1)}`);
    }

    // 👁️ Detect target (vision-based)
    detectTarget() {
        // TODO: Check for player/entities in vision radius
        // For now, return false (no target detection implemented)
        return false;
    }

    // 🔊 Hear sound
    hearSound() {
        // 👂 Sound-reactive: typing, mic audio, etc.
        return this.soundLevel > 0.5;
    }

    // 🎯 Check if target is in attack range
    isInAttackRange() {
        if (!this.target) return false;
        
        const dx = this.target.x - this.zombie.x;
        const dy = this.target.y - this.zombie.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        return distance <= this.attackRadius;
    }

    // 😕 Check if target was lost
    hasLostTarget() {
        const now = Date.now();
        return (now - this.lastTargetSeen) > this.loseTargetTime;
    }

    // 💀 Apply decay over time
    applyDecay() {
        const now = Date.now();
        const deltaTime = (now - this.lastDecayTime) / 1000; // seconds
        
        this.health -= this.decayRate * deltaTime;
        this.health = Math.max(0, this.health);
        
        this.lastDecayTime = now;
    }

    // 🔊 Register sound event
    onSound(intensity) {
        this.soundLevel = Math.min(1, this.soundLevel + intensity);
        
        // 👂 Sound can trigger detection
        if (this.soundLevel > 0.7 && this.state === 'idle') {
            this.state = 'detecting';
        }
    }

    // 🎯 Set target
    setTarget(target) {
        this.target = target;
        this.lastKnownTargetPos = { x: target.x, y: target.y };
        this.lastTargetSeen = Date.now();
    }

    // 💊 Revive zombie (restore health)
    revive(healthAmount = 50) {
        this.health = Math.min(100, this.health + healthAmount);
        if (this.state === 'dead' || this.state === 'decaying') {
            this.state = 'idle';
        }
        console.log('🧟 Zombie revived!');
    }

    // 📊 Get status
    getStatus() {
        return {
            state: this.state,
            health: this.health,
            target: this.target ? 'detected' : 'none',
            soundLevel: this.soundLevel
        };
    }
}

export default ZombieAI;
