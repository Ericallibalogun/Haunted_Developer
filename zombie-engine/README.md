# 🧟 Zombie Engine

> A lightweight 2D game engine for creating undead experiences

**Status**: 💀 Skeleton Template (Awaiting Implementation)

This is a minimal game engine boilerplate with empty systems ready for expansion. All modules are skeleton classes with placeholder methods and apocalyptic comments. Build your zombie survival game, tower defense, or any 2D game on this foundation!

---

## 🎮 Engine Overview

Zombie Engine is a browser-based 2D game engine built with vanilla JavaScript and HTML5 Canvas. It provides core systems for game development: rendering, physics, input handling, and a main game loop. The architecture is modular, performant, and designed for easy extension.

**Core Systems (When Implemented)**:
- 🔄 Game loop with delta time for smooth 60 FPS
- 🎨 Sprite management and canvas rendering
- ⚡ Physics simulation with collision detection
- 🎮 Keyboard and mouse input handling
- 🐛 Debug panel for performance monitoring
- 🧟 Apocalyptic theming throughout

---

## 📁 Folder Structure

```
zombie-engine/
├── engine/                      # Core engine modules
│   ├── GameEngineCore.js        # Main loop and system coordination
│   ├── SpriteManager.js         # Visual entity management
│   ├── Physics.js               # Movement and collision simulation
│   └── InputHandler.js          # Keyboard and mouse capture
├── public/                      # Public assets and HTML
│   ├── game.html                # Canvas and game UI
│   └── styles.css               # Apocalyptic styling
├── .kiro/                       # Kiro specifications (in parent directory)
│   └── zombie-engine-spec.json  # Detailed system specifications
└── README.md                    # You are here 🧟
```

### System Responsibilities

| System | Purpose | Key Methods |
|--------|---------|-------------|
| **GameEngineCore** | Orchestrates all systems and runs the main loop | `init()`, `start()`, `stop()`, `gameLoop()`, `update()`, `render()` |
| **Physics** | Simulates movement, forces, and collisions | `addEntity()`, `update()`, `checkCollision()`, `applyForce()` |
| **SpriteManager** | Manages and renders all visual entities | `addSprite()`, `removeSprite()`, `update()`, `render()` |
| **InputHandler** | Captures and tracks user input | `init()`, `isKeyPressed()`, `getMousePosition()` |

---

## 🧟‍♀️ How to Run

### Option 1: Simple HTTP Server (Recommended)

```bash
# Navigate to the zombie-engine directory
cd zombie-engine

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Node.js
npx http-server -p 8000

# Open in browser
# Visit: http://localhost:8000/public/game.html
```

### Option 2: Open Directly

```bash
# Open the HTML file directly in your browser
open public/game.html  # macOS
xdg-open public/game.html  # Linux
start public/game.html  # Windows
```

**Note**: ES6 modules require a server due to CORS restrictions.

### What You'll See

Currently, the skeleton has no implementation, so:
- ✅ The canvas and UI will load
- ✅ Buttons are visible (Start, Stop, Reset)
- ❌ Nothing happens when you click buttons (no logic yet)
- ❌ Canvas is blank (no rendering implemented)
- ❌ Debug panel shows placeholder text

---

## 🔧 How to Extend with Modules

### 1. Implement the Game Loop

Start with `GameEngineCore.js`:

```javascript
init(canvasId) {
    // Get canvas and context
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    
    // Initialize subsystems
    this.physics = new Physics();
    this.spriteManager = new SpriteManager();
    this.inputHandler = new InputHandler();
    this.inputHandler.init(this.canvas);
}

gameLoop(timestamp) {
    if (!this.isRunning) return;
    
    // Calculate delta time
    const deltaTime = (timestamp - this.lastFrameTime) / 1000;
    this.lastFrameTime = timestamp;
    
    // Update and render
    this.update(deltaTime);
    this.render();
    
    // Continue loop
    requestAnimationFrame((t) => this.gameLoop(t));
}
```

### 2. Add Physics Simulation

Implement `Physics.js`:

```javascript
update(deltaTime) {
    for (const entity of this.entities) {
        if (entity.isStatic) continue;
        
        // Apply gravity
        entity.vy += this.gravity * deltaTime;
        
        // Update velocity
        entity.x += entity.vx * deltaTime;
        entity.y += entity.vy * deltaTime;
    }
    
    // Check collisions
    this.checkAllCollisions();
}

checkCollision(entityA, entityB) {
    return entityA.x < entityB.x + entityB.width &&
           entityA.x + entityA.width > entityB.x &&
           entityA.y < entityB.y + entityB.height &&
           entityA.y + entityA.height > entityB.y;
}
```

### 3. Render Sprites

Implement `SpriteManager.js`:

```javascript
render(context) {
    // Sort by zIndex for proper layering
    const sorted = [...this.sprites].sort((a, b) => a.zIndex - b.zIndex);
    
    for (const sprite of sorted) {
        if (sprite.image) {
            context.drawImage(sprite.image, sprite.x, sprite.y, 
                            sprite.width, sprite.height);
        } else {
            // Draw colored rectangle
            context.fillStyle = sprite.color || '#00ff00';
            context.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);
        }
    }
}
```

### 4. Handle Input

Implement `InputHandler.js`:

```javascript
init(canvas) {
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.onKeyUp(e));
    canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
}

isKeyPressed(key) {
    return this.keys[key] === true;
}
```

### 5. Create a Simple Game

Use the engine to build something:

```javascript
// Create engine instance
const engine = new GameEngineCore();
engine.init('gameCanvas');

// Add a player sprite
const playerId = engine.spriteManager.addSprite({
    x: 100,
    y: 100,
    width: 32,
    height: 32,
    color: '#00ff00',
    zIndex: 1
});

// Add physics body for player
engine.physics.addEntity({
    id: playerId,
    x: 100,
    y: 100,
    vx: 0,
    vy: 0,
    width: 32,
    height: 32,
    mass: 1,
    isStatic: false
});

// Game update logic
engine.update = function(deltaTime) {
    // Handle input
    const player = this.physics.entities.find(e => e.id === playerId);
    if (this.inputHandler.isKeyPressed('ArrowLeft')) {
        player.vx = -200;
    } else if (this.inputHandler.isKeyPressed('ArrowRight')) {
        player.vx = 200;
    } else {
        player.vx = 0;
    }
    
    // Update systems
    this.physics.update(deltaTime);
    this.spriteManager.update(deltaTime);
    
    // Sync sprite position with physics
    const sprite = this.spriteManager.getSprite(playerId);
    sprite.x = player.x;
    sprite.y = player.y;
};

// Start the apocalypse!
engine.start();
```

---

## 🤖 Prompts for Kiro

Use these prompts to have Kiro flesh out the engine systems:

### Core Implementation

```
Kiro, implement the GameEngineCore game loop using zombie-engine-spec.json. 
Include delta time calculation, requestAnimationFrame, and coordinate all 
subsystems. Target 60 FPS.
```

```
Kiro, implement the Physics system with basic AABB collision detection. 
Support gravity, velocity, and force application. Make entities move smoothly.
```

```
Kiro, implement the SpriteManager to render colored rectangles to the canvas. 
Support zIndex sorting and basic sprite management (add/remove/update).
```

```
Kiro, implement the InputHandler to track keyboard and mouse input. 
Support arrow keys, WASD, and mouse position/clicks. Prevent default 
browser behavior for game keys.
```

### Advanced Features

```
Kiro, add a debug panel that displays FPS, entity count, and mouse position 
in real-time. Update it every frame and style it with the apocalyptic theme.
```

```
Kiro, implement zombie AI pathfinding. Zombies should shamble towards the 
player using A* pathfinding. Add randomness for realistic undead movement.
```

```
Kiro, add a particle system to SpriteManager for blood splatter effects. 
Particles should have lifetime, velocity, and fade out over time.
```

```
Kiro, implement a camera system that follows the player with smooth 
interpolation. Support camera shake for impacts and explosions.
```

### Game Development

```
Kiro, create a simple zombie survival demo. Player can move with arrow keys, 
zombies spawn and chase the player, collision detection works. Keep it minimal.
```

```
Kiro, add a tilemap system for level design. Load a simple grid-based map 
and render tiles. Support collision with solid tiles.
```

```
Kiro, implement sprite animation with frame-based sprite sheets. Support 
different animations (idle, walk, attack) that can be switched dynamically.
```

---

## 🧟 Zombie Behavior Implementation

### Basic Zombie AI

```javascript
class ZombieAI {
    constructor(zombie, target) {
        this.zombie = zombie;
        this.target = target;
        this.speed = 50; // Slow shambling
    }
    
    update(deltaTime) {
        // Calculate direction to target
        const dx = this.target.x - this.zombie.x;
        const dy = this.target.y - this.zombie.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
            // Normalize and apply speed
            this.zombie.vx = (dx / distance) * this.speed;
            this.zombie.vy = (dy / distance) * this.speed;
        }
        
        // Add shambling randomness
        this.zombie.vx += (Math.random() - 0.5) * 20;
        this.zombie.vy += (Math.random() - 0.5) * 20;
    }
}
```

### Zombie Spawner

```javascript
class ZombieSpawner {
    constructor(engine) {
        this.engine = engine;
        this.zombies = [];
        this.spawnInterval = 2000; // 2 seconds
        this.lastSpawn = 0;
    }
    
    update(timestamp) {
        if (timestamp - this.lastSpawn > this.spawnInterval) {
            this.spawnZombie();
            this.lastSpawn = timestamp;
        }
        
        // Update all zombie AI
        for (const zombie of this.zombies) {
            zombie.ai.update(deltaTime);
        }
    }
    
    spawnZombie() {
        const x = Math.random() * this.engine.canvas.width;
        const y = Math.random() * this.engine.canvas.height;
        
        const spriteId = this.engine.spriteManager.addSprite({
            x, y,
            width: 32,
            height: 32,
            color: '#00ff00',
            zIndex: 1
        });
        
        const zombie = {
            id: spriteId,
            x, y,
            vx: 0, vy: 0,
            width: 32,
            height: 32,
            mass: 1,
            isStatic: false
        };
        
        zombie.ai = new ZombieAI(zombie, this.engine.player);
        this.engine.physics.addEntity(zombie);
        this.zombies.push(zombie);
    }
}
```

---

## 🎨 Apocalyptic Theming

### Visual Design

- **Color Palette**: Dark greens, grays, blood red, rust orange
- **Canvas Style**: Rough borders, decayed appearance
- **UI Elements**: Weathered, post-apocalyptic buttons and panels
- **Animations**: Jerky, shambling movements for zombies

### Code Comments Style

Keep comments apocalyptic and thematic:

```javascript
// 🧟 Summon the undead horde
// 💀 Calculate the path of decay
// 🦴 The bones are moving...
// 🩸 Blood splatter effect
// ⚰️ Entity has been destroyed
```

### Naming Conventions

Use apocalyptic terminology:

| Generic | Apocalyptic |
|---------|-------------|
| "delete" | "destroy", "annihilate" |
| "create" | "spawn", "summon" |
| "update" | "decay", "rot" |
| "list" | "horde", "swarm" |
| "player" | "survivor" |
| "enemy" | "undead", "zombie" |

---

## ⚡ Technologies

- **Vanilla JavaScript** - ES6+ with modules
- **HTML5 Canvas** - 2D rendering context
- **RequestAnimationFrame** - Smooth 60 FPS game loop
- **CSS3** - Apocalyptic styling and layout

**No Dependencies**: Pure JavaScript for maximum performance and learning value.

---

## 🦴 Development Workflow

### Phase 1: Core Systems (Start Here)

1. Implement `GameEngineCore` game loop
2. Add basic rendering in `SpriteManager`
3. Implement input handling in `InputHandler`
4. Test with a simple moving square

### Phase 2: Physics

1. Implement movement in `Physics`
2. Add AABB collision detection
3. Test with multiple entities
4. Add gravity and forces

### Phase 3: Game Logic

1. Create a player entity
2. Add player movement controls
3. Implement zombie spawning
4. Add zombie AI pathfinding

### Phase 4: Polish

1. Add particle effects
2. Implement camera system
3. Add sound effects
4. Create UI for health/score

---

## 💥 Example Game Ideas

### Zombie Survival
- Player moves with arrow keys
- Zombies spawn and chase player
- Shoot zombies to survive
- Track score and high score

### Tower Defense
- Place towers on a grid
- Zombies follow a path
- Towers shoot automatically
- Upgrade towers with points

### Platformer
- Player jumps between platforms
- Avoid zombie enemies
- Collect items
- Reach the exit

### Top-Down Shooter
- WASD movement
- Mouse aim and shoot
- Waves of zombies
- Power-ups and weapons

---

## 🐛 Debug Features

### Performance Monitoring

```javascript
class DebugPanel {
    constructor() {
        this.fps = 0;
        this.frameCount = 0;
        this.lastTime = performance.now();
    }
    
    update() {
        this.frameCount++;
        const now = performance.now();
        
        if (now - this.lastTime >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastTime = now;
        }
    }
    
    render(context, engine) {
        context.fillStyle = 'rgba(0, 0, 0, 0.7)';
        context.fillRect(10, 10, 200, 100);
        
        context.fillStyle = '#00ff00';
        context.font = '14px monospace';
        context.fillText(`FPS: ${this.fps}`, 20, 30);
        context.fillText(`Entities: ${engine.physics.entities.length}`, 20, 50);
        context.fillText(`Sprites: ${engine.spriteManager.sprites.length}`, 20, 70);
        context.fillText(`Mouse: ${engine.inputHandler.mouse.x}, ${engine.inputHandler.mouse.y}`, 20, 90);
    }
}
```

---

## 📚 Related Files

- **Specification**: See `../.kiro/zombie-engine-spec.json` for detailed system specs
- **Documentation**: See `../SkeletonCrew_Documentation.md` for architecture overview
- **Ghost Chat**: See `../ghost-chat/` for the companion chatbot project

---

## 🎃 Extension Ideas

- **Sprite Sheets**: Load and animate sprite sheets
- **Audio System**: Background music and sound effects
- **Particle System**: Explosions, blood, smoke
- **Tilemap Editor**: Visual level design tool
- **Save/Load**: Persist game state to localStorage
- **Networking**: Multiplayer zombie survival
- **Mobile Support**: Touch controls and responsive canvas

---

## 🧟‍♂️ Contributing

This is a skeleton template for the Kiroween challenge! Feel free to:

- Implement the empty systems
- Build games on top of the engine
- Add new features and optimizations
- Share your apocalyptic creations

---

## 🪦 License

Released into the public domain, like all good zombies. Use it however you wish!

---

## 💀 Troubleshooting

**Problem**: Canvas is blank
**Solution**: The skeleton has no rendering yet! Implement `SpriteManager.render()`

**Problem**: Nothing happens when clicking buttons
**Solution**: Wire up button event listeners in `game.html`

**Problem**: Modules not loading (CORS error)
**Solution**: Use a local HTTP server instead of opening the file directly

**Problem**: Poor performance with many entities
**Solution**: Implement spatial partitioning (quadtree) for collision detection

---

*Built with 🧟 for Kiroween - Survive the apocalypse, one frame at a time*

**Ready to start the zombie apocalypse? Ask Kiro to implement the systems!** 💀
