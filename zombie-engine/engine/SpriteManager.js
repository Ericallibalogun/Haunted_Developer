// 🧟 SpriteManager - Controls the Undead Horde
// Manages all sprites, animations, and visual entities

class SpriteManager {
    constructor() {
        // 🦴 Store all sprites in the graveyard
        this.sprites = [];
    }

    // 💀 Add a new sprite to the horde
    addSprite(sprite) {
        // TODO: Register a new undead entity
    }

    // 🪦 Remove a sprite (final death)
    removeSprite(spriteId) {
        // TODO: Permanently destroy the sprite
    }

    // 🔄 Update all sprites
    update(deltaTime) {
        // TODO: Update positions, animations, states
    }

    // 🎨 Render all sprites
    render(context) {
        // TODO: Draw all sprites to the canvas
    }

    // 🧟‍♀️ Get sprite by ID
    getSprite(spriteId) {
        // TODO: Find and return a specific sprite
    }

    // 💥 Check for sprite collisions
    checkCollisions() {
        // TODO: Detect when sprites collide
    }

    // 🧹 Clear all sprites (mass extinction)
    clearAll() {
        // TODO: Remove all sprites from existence
    }
}

export default SpriteManager;
