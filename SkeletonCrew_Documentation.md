# 💀 Skeleton Crew Documentation

> **Kiroween Challenge Milestone**: Building the bones before the flesh

## 🎃 Overview

The Skeleton Crew milestone establishes the foundational architecture for two spooky projects:

1. **Ghost Chat** - A haunted chatbot application
2. **Zombie Engine** - A 2D game engine for undead experiences

Both projects follow a "skeleton-first" approach: creating minimal, well-structured boilerplate code with clear interfaces, responsibilities, and extension points before implementing any business logic.

---

## 👻 What is a Skeleton Template?

A skeleton template is a minimal code structure that includes:

- **Empty classes and modules** with clear naming
- **Placeholder methods** with descriptive comments
- **Function signatures** without implementation
- **Interface definitions** showing expected inputs/outputs
- **Architectural decisions** baked into the structure
- **Extension points** marked for future development

### Why Skeleton-First?

- **Clear architecture** before getting lost in implementation details
- **Easy collaboration** - team members understand the structure immediately
- **Flexible development** - implement features in any order
- **AI-friendly** - Kiro can expand modules systematically using specs
- **Prevents scope creep** - forces you to think about design first

---

## 🦴 Project Structures

### Ghost Chat Structure

```
ghost-chat/
├── src/
│   ├── index.js              # Entry point - initializes the app
│   ├── ChatBotModule.js      # Ghost's brain - response generation
│   ├── UIController.js       # Interface control - DOM manipulation
│   └── MessageParser.js      # Message analysis - intent extraction
├── public/
│   ├── index.html            # Haunted UI structure
│   └── styles.css            # Spooky styling
└── README.md                 # Project documentation
```

### Zombie Engine Structure

```
zombie-engine/
├── engine/
│   ├── GameEngineCore.js     # Main loop and system coordination
│   ├── SpriteManager.js      # Visual entity management
│   ├── Physics.js            # Movement and collision simulation
│   └── InputHandler.js       # Keyboard and mouse capture
├── public/
│   ├── game.html             # Canvas and game UI
│   └── styles.css            # Apocalyptic styling
└── README.md                 # Engine documentation
```

---

## 🧩 Modular Design Principles

### Separation of Concerns

Each module has a single, well-defined responsibility:

**Ghost Chat:**
- `ChatBotModule` - Knows how to respond, doesn't know about UI
- `UIController` - Knows how to display, doesn't know about logic
- `MessageParser` - Knows how to analyze, doesn't generate responses

**Zombie Engine:**
- `GameEngineCore` - Orchestrates, doesn't implement systems
- `Physics` - Simulates physics, doesn't render
- `SpriteManager` - Renders sprites, doesn't handle physics
- `InputHandler` - Captures input, doesn't interpret game actions

### Clear Interfaces

Every module exports a class with well-defined methods:

```javascript
// Example: Clear interface contract
class ChatBotModule {
    processMessage(message)      // Input: string, Output: Promise<string>
    generateResponse(parsed)     // Input: object, Output: string
    canRespond(message)          // Input: string, Output: boolean
}
```

### Loose Coupling

Modules communicate through defined interfaces, not internal implementation:

```javascript
// Good: Loose coupling
const response = await chatBot.processMessage(userInput);
uiController.displayMessage(response, 'ghost');

// Bad: Tight coupling
const parsed = chatBot.parser.parse(userInput);  // Accessing internals
```

---

## 🔧 How Developers Can Reuse Templates

### 1. Clone and Customize

Start with the skeleton and adapt it to your needs:

```bash
# Copy the ghost-chat structure for a different chatbot
cp -r ghost-chat/ customer-support-bot/

# Modify the modules for your domain
# ChatBotModule -> SupportBotModule
# Keep the same architecture, change the logic
```

### 2. Extract Reusable Patterns

The skeletons demonstrate patterns you can apply elsewhere:

**Pattern: Message Processing Pipeline**
```
Input → Parser → Processor → Generator → Output
```

Use this for: Email handlers, API request processors, data transformers

**Pattern: Game Loop Architecture**
```
Init → Loop(Update → Render) → Cleanup
```

Use this for: Simulations, animations, real-time dashboards

### 3. Mix and Match Modules

Modules are designed to be composable:

```javascript
// Use MessageParser in a different context
import MessageParser from './ghost-chat/src/MessageParser.js';

class EmailClassifier {
    constructor() {
        this.parser = new MessageParser();
    }
    
    classifyEmail(email) {
        const parsed = this.parser.parse(email.body);
        // Use parsed intent for classification
    }
}
```

---

## 🤖 How Kiro Can Extend Modules

### Using the Spec Files

The `.kiro/` directory contains detailed specifications that guide Kiro's implementation:

**ghost-chat-spec.json** defines:
- Module responsibilities
- Function signatures with parameters and return types
- Expected behavior for each method
- Extension points for future features
- Implementation notes and best practices

**zombie-engine-spec.json** defines:
- System architecture and data flow
- Integration order and dependencies
- Performance targets
- UI consistency guidelines

### Kiro's Expansion Process

1. **Read the spec** for the module to implement
2. **Understand the interface** - what inputs/outputs are expected
3. **Implement the logic** following the spec's guidance
4. **Maintain the skeleton structure** - don't break existing interfaces
5. **Add tests** if requested
6. **Update documentation** to reflect new functionality

### Example: Asking Kiro to Implement

```
"Kiro, implement the ChatBotModule.processMessage() method 
using the ghost-chat-spec.json as a guide. Start with simple 
keyword matching for greetings, questions, and farewells."
```

Kiro will:
- Read the spec to understand requirements
- Implement the method with proper error handling
- Use the MessageParser as specified
- Return responses in the expected format
- Keep the spooky theme consistent

---

## 🎃 Kiroween "Skeleton Crew" Rules Compliance

This milestone satisfies the Skeleton Crew challenge requirements:

### ✅ Minimal Boilerplate Code
- All files contain only structure, no business logic
- Methods are empty placeholders with TODO comments
- Classes are initialized but don't perform operations

### ✅ Clear Module Boundaries
- Each file has a single, well-defined purpose
- Modules communicate through explicit interfaces
- No circular dependencies or tight coupling

### ✅ Spooky Theming
- Ghost Chat: 👻 Haunted comments, spirit-themed naming
- Zombie Engine: 🧟 Apocalyptic comments, undead terminology
- Consistent theme throughout all files

### ✅ Extensibility Points
- Specs document future features for each module
- Comments mark where logic should be added
- Architecture supports adding features without refactoring

### ✅ Documentation
- README files for both projects
- Inline comments explaining intended behavior
- This comprehensive documentation file
- Detailed JSON specs for Kiro

### ✅ Reusability
- Modular design allows mixing and matching
- Patterns can be extracted and applied elsewhere
- Templates serve as starting points for similar projects

---

## 💡 Example Extension Ideas

### Ghost Chat Extensions

#### 1. Haunted Shop System
```javascript
// Add to ChatBotModule
class HauntedShop {
    constructor() {
        this.inventory = [
            { item: 'Ectoplasm', price: 50, emoji: '💧' },
            { item: 'Spirit Crystal', price: 100, emoji: '💎' },
            { item: 'Cursed Amulet', price: 200, emoji: '📿' }
        ];
    }
    
    processShopCommand(intent, keywords) {
        // Handle: "buy ectoplasm", "show shop", "my inventory"
    }
}
```

**Integration Point**: Add to `ChatBotModule.generateResponse()`
**Spec Addition**: Define shop commands in intent extraction

#### 2. Ghost Personality System
```javascript
// Extend ChatBotModule
class GhostPersonality {
    constructor(type) {
        this.personalities = {
            friendly: { tone: 'warm', emoji: '😊👻' },
            scary: { tone: 'ominous', emoji: '😱👻' },
            wise: { tone: 'philosophical', emoji: '🧙👻' }
        };
        this.current = this.personalities[type];
    }
    
    applyPersonality(response) {
        // Modify response based on personality
    }
}
```

**Integration Point**: Wrap responses in `generateResponse()`
**UI Addition**: Add personality selector in HTML

#### 3. Conversation Memory
```javascript
// Add to ChatBotModule
class ConversationMemory {
    constructor() {
        this.history = [];
        this.context = {};
    }
    
    remember(message, response) {
        this.history.push({ message, response, timestamp: Date.now() });
        this.updateContext(message);
    }
    
    recall(topic) {
        // Find previous mentions of topic
    }
    
    updateContext(message) {
        // Extract entities (names, places) for context
    }
}
```

**Integration Point**: Call after each message exchange
**Feature**: "Do you remember when I asked about...?"

#### 4. Multi-Language Support
```javascript
// Extend MessageParser
class LanguageDetector {
    detect(message) {
        // Detect language from message
    }
    
    translate(message, targetLang) {
        // Translate using API or dictionary
    }
}
```

**Integration Point**: Add to `MessageParser.parse()`
**Spec Addition**: Language detection in parsing phase

### Zombie Engine Extensions

#### 1. Zombie AI Pathfinding
```javascript
// New module: engine/PathfindingAI.js
class PathfindingAI {
    constructor(gridWidth, gridHeight) {
        this.grid = this.createGrid(gridWidth, gridHeight);
    }
    
    findPath(start, goal, obstacles) {
        // A* pathfinding algorithm
        // Returns array of waypoints
    }
    
    shambleTowards(zombie, target) {
        // Make zombie move towards target with shambling behavior
        // Add randomness for realistic undead movement
    }
}
```

**Integration Point**: Call in `GameEngineCore.update()`
**Physics Integration**: Use `Physics.applyForce()` for movement

#### 2. Particle System
```javascript
// Extend SpriteManager
class ParticleSystem {
    constructor() {
        this.emitters = [];
    }
    
    createEmitter(x, y, config) {
        // Config: particle count, lifetime, velocity, color
        return new ParticleEmitter(x, y, config);
    }
    
    update(deltaTime) {
        // Update all particles
        // Remove dead particles
    }
    
    render(context) {
        // Draw all active particles
    }
}
```

**Use Cases**: Blood splatter, dust clouds, muzzle flash, explosions
**Integration Point**: Add to `SpriteManager` or separate system

#### 3. Tilemap System
```javascript
// New module: engine/TilemapManager.js
class TilemapManager {
    constructor(tileWidth, tileHeight) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
    }
    
    loadMap(mapData) {
        // Load tilemap from JSON or array
    }
    
    getTileAt(x, y, layer) {
        // Get tile at world coordinates
    }
    
    render(context, camera) {
        // Render visible tiles only (culling)
    }
}
```

**Integration Point**: Render before sprites in `GameEngineCore.render()`
**Physics Integration**: Generate collision boxes from solid tiles

#### 4. Camera System
```javascript
// New module: engine/Camera.js
class Camera {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    follow(entity, smoothing = 0.1) {
        // Smooth camera following
        this.x += (entity.x - this.x) * smoothing;
        this.y += (entity.y - this.y) * smoothing;
    }
    
    worldToScreen(worldX, worldY) {
        // Convert world coordinates to screen coordinates
        return {
            x: worldX - this.x,
            y: worldY - this.y
        };
    }
    
    shake(intensity, duration) {
        // Screen shake effect for impacts
    }
}
```

**Integration Point**: Pass to all render calls
**Transform**: Translate canvas context by camera position

#### 5. Sound System
```javascript
// New module: engine/AudioManager.js
class AudioManager {
    constructor() {
        this.sounds = {};
        this.music = null;
        this.volume = 1.0;
    }
    
    loadSound(name, url) {
        // Load audio file
        this.sounds[name] = new Audio(url);
    }
    
    playSound(name, volume = 1.0) {
        // Play sound effect
    }
    
    playMusic(url, loop = true) {
        // Play background music
    }
    
    stopAll() {
        // Stop all audio
    }
}
```

**Integration Point**: Call from game logic when events occur
**Spooky Sounds**: Zombie groans, gunshots, ambient horror

#### 6. Entity Component System (ECS)
```javascript
// Advanced: Refactor to ECS architecture
class Entity {
    constructor(id) {
        this.id = id;
        this.components = {};
    }
    
    addComponent(name, component) {
        this.components[name] = component;
    }
}

class System {
    update(entities, deltaTime) {
        // Process entities with required components
    }
}

// Example components
class HealthComponent {
    constructor(max) {
        this.current = max;
        this.max = max;
    }
}

class ZombieAIComponent {
    constructor() {
        this.state = 'idle';  // idle, chase, attack
        this.target = null;
    }
}
```

**Benefits**: More flexible than inheritance, better performance
**Refactor**: Gradually migrate from current architecture

---

## 🚀 Getting Started with Extensions

### For Developers

1. **Choose a module** to extend
2. **Read the spec** in `.kiro/` to understand the design
3. **Implement one method** at a time
4. **Test incrementally** - don't build everything at once
5. **Maintain the theme** - keep it spooky!

### For Kiro

1. **Reference the spec** when implementing
2. **Ask clarifying questions** if requirements are unclear
3. **Implement minimally** - add only what's requested
4. **Preserve interfaces** - don't break existing code
5. **Suggest improvements** based on the extensibility points

---

## 📚 Additional Resources

### Design Patterns Used

- **Module Pattern**: Each file is a self-contained module
- **Facade Pattern**: GameEngineCore hides system complexity
- **Observer Pattern**: Event-driven input handling
- **Strategy Pattern**: Different ghost personalities/responses

### Best Practices

- **Single Responsibility**: One module, one job
- **Open/Closed**: Open for extension, closed for modification
- **Dependency Injection**: Pass dependencies to constructors
- **Interface Segregation**: Small, focused interfaces
- **DRY**: Don't Repeat Yourself - reuse modules

### Testing Approach

```javascript
// Example test structure
describe('MessageParser', () => {
    it('should extract greeting intent', () => {
        const parser = new MessageParser();
        const result = parser.extractIntent('Hello ghost!');
        expect(result).toBe('greeting');
    });
});
```

---

## 🎃 Conclusion

The Skeleton Crew milestone provides a solid foundation for building spooky applications. By establishing clear architecture, modular design, and comprehensive specifications, we've created templates that are:

- **Easy to understand** - Clear structure and documentation
- **Easy to extend** - Well-defined extension points
- **Easy to reuse** - Modular components that work independently
- **AI-friendly** - Detailed specs guide Kiro's implementation

Now the bones are in place, ready for Kiro to add the flesh! 💀

---

*Built with 🎃 for Kiroween - Where code meets the supernatural*
