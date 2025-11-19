// 🔗 StitchingSystem - Frankenstein Module Fusion
// Dynamically combine AI traits, personality modules, and behaviors

class StitchingSystem {
    constructor() {
        // 🧠 Available body parts (code modules)
        this.bodyParts = {
            memory: [],
            personality: [],
            nervous: [],
            reflex: []
        };
        
        // 🧟 Stitched creatures
        this.creatures = new Map();
        
        // 🔧 Safety guards
        this.maxModulesPerCreature = 10;
        this.compatibilityMatrix = new Map();
    }

    // 🧠 Register a memory organ module
    registerMemoryOrgan(module) {
        this.bodyParts.memory.push({
            id: this.generateId(),
            module,
            type: 'memory',
            compatibility: module.compatibility || []
        });
        console.log(`🧠 Memory organ registered: ${module.name}`);
    }

    // 🎭 Register a personality organ module
    registerPersonalityOrgan(module) {
        this.bodyParts.personality.push({
            id: this.generateId(),
            module,
            type: 'personality',
            compatibility: module.compatibility || []
        });
        console.log(`🎭 Personality organ registered: ${module.name}`);
    }

    // ⚡ Register a nervous system module
    registerNervousSystem(module) {
        this.bodyParts.nervous.push({
            id: this.generateId(),
            module,
            type: 'nervous',
            compatibility: module.compatibility || []
        });
        console.log(`⚡ Nervous system registered: ${module.name}`);
    }

    // 🎯 Register a reflex engine module
    registerReflexEngine(module) {
        this.bodyParts.reflex.push({
            id: this.generateId(),
            module,
            type: 'reflex',
            compatibility: module.compatibility || []
        });
        console.log(`🎯 Reflex engine registered: ${module.name}`);
    }

    // 🧟 Stitch together a new creature
    stitchCreature(name, parts) {
        console.log(`⚡ Stitching creature: ${name}`);
        
        // 🔒 Safety check: max modules
        if (parts.length > this.maxModulesPerCreature) {
            throw new Error(`🚫 Too many parts! Max ${this.maxModulesPerCreature} allowed.`);
        }
        
        // 🔍 Validate compatibility
        if (!this.checkCompatibility(parts)) {
            throw new Error('🚫 Incompatible modules! They will reject each other.');
        }
        
        // 🧬 Create creature
        const creature = {
            name,
            id: this.generateId(),
            parts: parts.map(partId => this.findPart(partId)),
            state: 'dormant',
            createdAt: Date.now()
        };
        
        // 💉 Inject connections between parts
        this.injectConnections(creature);
        
        // 💾 Store creature
        this.creatures.set(creature.id, creature);
        
        console.log(`✅ Creature "${name}" stitched successfully!`);
        return creature;
    }

    // 🔍 Find body part by ID
    findPart(partId) {
        for (const type in this.bodyParts) {
            const part = this.bodyParts[type].find(p => p.id === partId);
            if (part) return part;
        }
        return null;
    }

    // 🔗 Check if modules are compatible
    checkCompatibility(partIds) {
        // 🧬 Check each pair of modules
        for (let i = 0; i < partIds.length; i++) {
            for (let j = i + 1; j < partIds.length; j++) {
                const partA = this.findPart(partIds[i]);
                const partB = this.findPart(partIds[j]);
                
                if (!partA || !partB) continue;
                
                // 🔍 Check compatibility list
                if (partA.compatibility.length > 0) {
                    if (!partA.compatibility.includes(partB.type)) {
                        console.warn(`⚠️ ${partA.module.name} may not work with ${partB.module.name}`);
                        return false;
                    }
                }
            }
        }
        
        return true;
    }

    // 💉 Inject connections between modules
    injectConnections(creature) {
        // 🔗 Connect memory to personality
        const memory = creature.parts.find(p => p.type === 'memory');
        const personality = creature.parts.find(p => p.type === 'personality');
        
        if (memory && personality) {
            personality.module.setMemory = (data) => memory.module.store(data);
            personality.module.getMemory = () => memory.module.retrieve();
            console.log('🔗 Connected memory to personality');
        }
        
        // 🔗 Connect nervous system to reflex
        const nervous = creature.parts.find(p => p.type === 'nervous');
        const reflex = creature.parts.find(p => p.type === 'reflex');
        
        if (nervous && reflex) {
            nervous.module.triggerReflex = (stimulus) => reflex.module.react(stimulus);
            console.log('🔗 Connected nervous system to reflex');
        }
        
        // 🔗 Connect all parts to nervous system (central hub)
        if (nervous) {
            creature.parts.forEach(part => {
                if (part.type !== 'nervous') {
                    part.module.sendSignal = (signal) => nervous.module.process(signal);
                }
            });
            console.log('🔗 Connected all parts to nervous system');
        }
    }

    // ⚡ Awaken a creature (activate all modules)
    awakenCreature(creatureId) {
        const creature = this.creatures.get(creatureId);
        if (!creature) {
            throw new Error('🚫 Creature not found!');
        }
        
        console.log(`⚡ Awakening creature: ${creature.name}`);
        
        // 💓 Initialize all modules
        creature.parts.forEach(part => {
            if (part.module.init) {
                part.module.init();
            }
        });
        
        creature.state = 'alive';
        console.log(`✅ ${creature.name} is ALIVE!`);
        
        return creature;
    }

    // 💀 Destroy a creature
    destroyCreature(creatureId) {
        const creature = this.creatures.get(creatureId);
        if (!creature) return;
        
        console.log(`💀 Destroying creature: ${creature.name}`);
        
        // 🧹 Cleanup all modules
        creature.parts.forEach(part => {
            if (part.module.destroy) {
                part.module.destroy();
            }
        });
        
        creature.state = 'dead';
        this.creatures.delete(creatureId);
        
        console.log(`💀 ${creature.name} has been destroyed.`);
    }

    // 🔄 Replace a body part (module hot-swap)
    replacePart(creatureId, oldPartId, newPartId) {
        const creature = this.creatures.get(creatureId);
        if (!creature) {
            throw new Error('🚫 Creature not found!');
        }
        
        const oldPart = this.findPart(oldPartId);
        const newPart = this.findPart(newPartId);
        
        if (!oldPart || !newPart) {
            throw new Error('🚫 Part not found!');
        }
        
        console.log(`🔄 Replacing ${oldPart.module.name} with ${newPart.module.name}`);
        
        // 🔧 Remove old part
        const index = creature.parts.findIndex(p => p.id === oldPartId);
        if (index !== -1) {
            creature.parts[index] = newPart;
            
            // 💉 Re-inject connections
            this.injectConnections(creature);
            
            console.log('✅ Part replaced successfully!');
        }
    }

    // 📊 Get creature status
    getCreatureStatus(creatureId) {
        const creature = this.creatures.get(creatureId);
        if (!creature) return null;
        
        return {
            name: creature.name,
            id: creature.id,
            state: creature.state,
            partCount: creature.parts.length,
            parts: creature.parts.map(p => ({
                type: p.type,
                name: p.module.name
            })),
            age: Date.now() - creature.createdAt
        };
    }

    // 📋 List all available body parts
    listAvailableParts() {
        const parts = {};
        
        for (const type in this.bodyParts) {
            parts[type] = this.bodyParts[type].map(p => ({
                id: p.id,
                name: p.module.name,
                type: p.type
            }));
        }
        
        return parts;
    }

    // 🆔 Generate unique ID
    generateId() {
        return `part_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // 🧪 Test module compatibility
    testCompatibility(partIdA, partIdB) {
        const partA = this.findPart(partIdA);
        const partB = this.findPart(partIdB);
        
        if (!partA || !partB) return false;
        
        // 🔍 Check compatibility
        if (partA.compatibility.length === 0) return true; // No restrictions
        
        return partA.compatibility.includes(partB.type);
    }
}

export default StitchingSystem;
