# 🎮 Flash Game Resurrection Module

> Bringing Flash games back from the digital graveyard using HTML5 Canvas

**Status**: 💀 Resurrected Skeleton (Awaiting Full Implementation)

---

## 🎃 Purpose

This module resurrects the spirit of Adobe Flash games by recreating Flash's game engine architecture using modern HTML5 Canvas and JavaScript. It provides:

- Flash-style game loop and timeline system
- Movie clip and sprite management (Flash terminology)
- ActionScript-to-JavaScript event bridging
- Flash sprite format conversion to modern JSON
- Compatibility layer for legacy Flash game logic

**Why Resurrect Flash?**

Flash powered millions of web games from 1996-2020. When Adobe ended support in 2020, countless games became unplayable. This module preserves Flash's spirit by:
- Recreating Flash's API in modern JavaScript
- Converting Flash assets to HTML5-compatible formats
- Maintaining the "feel" of Flash game development
- Enabling Flash game preservation and modernization

---

## 🧟 How the Flash Engine Was Resurrected

### Original Flash Architecture

Flash games were built on:
1. **Timeline-based animation**: Frame-by-frame playback at 30 FPS
2. **Movie clips**: Nested, reusable animated objects
3. **ActionScript**: Event-driven programming language
4. **Stage metaphor**: Theater-style coordinate system
5. **Vector graphics**: Scalable, resolution-independent art

### Modern HTML5 Resurrection

We've recreated Flash's core concepts using:

| Flash Concept | Modern Equivalent | Implementation |
|---------------|-------------------|----------------|
| **Stage** | Canvas element | `FlashGameCore.stage` |
| **Movie Clip** | Sprite with timeline | `FlashGameCore.movieClips` |
| **Timeline** | Frame-based animation | `FlashGameCore.timeline` |
| **ActionScript Events** | JavaScript events | `FlashToHTML5Bridge` |
| **Flash Sprites** | Canvas sprites | `FlashSpriteAdapter` |
| **30 FPS Loop** | setInterval/RAF | `FlashGameCore.update()` |

### Resurrection Process

```
┌─────────────┐
│ Flash Game  │ (Dead - .swf file)
└──────┬──────┘
       │
       ↓ Extract metadata
┌─────────────────┐
│ Flash Metadata  │ (Sprite definitions, timeline)
└──────┬──────────┘
       │
       ↓ FlashSpriteAdapter
┌─────────────────┐
│ Modern JSON     │ (HTML5-compatible format)
└──────┬──────────┘
       │
       ↓ FlashGameCore
┌─────────────────┐
│ Living HTML5    │ (Resurrected game)
└─────────────────┘
```

---

## 🔗 Integration with Zombie Engine

The resurrected Flash engine integrates seamlessly with the Zombie Engine:

### Architecture Integration

```javascript
// Zombie Engine uses Flash resurrection layer
import GameEngineCore from '../../zombie-engine/engine/GameEngineCore.js';
import FlashGameCore from './FlashGameCore.js';
import FlashToHTML5Bridge from './FlashToHTML5Bridge.js';

// Create hybrid engine
const engine = new GameEngineCore();
const flashLayer = new FlashGameCore();
const bridge = new FlashToHTML5Bridge(flashLayer);

// Flash games run inside Zombie Engine
engine.addSystem('flashLayer', flashLayer);
```

### Integration Points

1. **Game Loop Compatibility**
   - Flash's 30 FPS → Zombie Engine's 60 FPS
   - Frame interpolation for smooth playback

2. **Sprite System Bridge**
   - Flash movie clips → Zombie Engine sprites
   - Shared sprite manager

3. **Event System**
   - Flash events → Modern input handler
   - Unified event dispatching

4. **Asset Loading**
   - Flash sprite sheets → Modern texture atlas
   - Automatic format conversion

### Usage Example

```javascript
// Load a resurrected Flash game
const flashGame = new FlashGameCore();
flashGame.init('gameCanvas');

// Convert Flash sprites
const adapter = new FlashSpriteAdapter();
const modernSprites = adapter.convertProject(flashMetadata);

// Add to Zombie Engine
for (const sprite of modernSprites) {
    zombieEngine.spriteManager.addSprite(sprite);
}

// Bridge events
const bridge = new FlashToHTML5Bridge(flashGame);
bridge.init(canvas);

// Play the resurrected game!
flashGame.play();
```

---

## 🎨 Flash-Style API

### Timeline Control (Classic Flash)

```javascript
// Flash-style timeline methods
flashGame.play();                    // Start animation
flashGame.stop();                    // Pause animation
flashGame.gotoAndPlay(10);          // Jump to frame 10 and play
flashGame.gotoAndStop(5);           // Jump to frame 5 and stop
```

### Movie Clips (Flash Terminology)

```javascript
// Create a movie clip (Flash's reusable animated object)
const zombie = {
    x: 100,
    y: 100,
    frames: [/* animation frames */],
    onEnterFrame: function() {
        // Called every frame (Flash pattern)
        this.x += 1;
    }
};

flashGame.addMovieClip('zombie1', zombie);
```

### Event Handling (ActionScript Style)

```javascript
// Flash-style event listeners
bridge.addEventListener(zombie, 'mouseDown', function(event) {
    console.log('Clicked at:', event.stageX, event.stageY);
});

bridge.addEventListener(zombie, 'enterFrame', function(event) {
    // Update logic (called every frame)
});
```

---

## 🛠️ Developer Guide

### Converting Flash Assets

1. **Extract Flash Metadata**
   ```javascript
   // If you have Flash source files (.fla)
   // Export sprite sheets and metadata
   // Or use tools like JPEXS Free Flash Decompiler
   ```

2. **Convert Sprites**
   ```javascript
   const adapter = new FlashSpriteAdapter();
   adapter.loadFlashMetadata(flashMetadata);
   const modernSprites = adapter.convertProject(flashMetadata);
   ```

3. **Load into Engine**
   ```javascript
   flashGame.loadSpriteSheet('sprites.png', modernSprites);
   ```

### Creating Flash-Style Games

```javascript
// Initialize engine
const game = new FlashGameCore();
game.init('canvas');

// Set stage properties (Flash terminology)
game.stage.width = 550;
game.stage.height = 400;
game.stage.backgroundColor = '#000000';

// Create movie clip
const player = {
    x: 275,
    y: 200,
    width: 32,
    height: 32,
    currentFrame: 0,
    totalFrames: 10
};

game.addMovieClip('player', player);

// Start the show!
game.play();
```

---

## 🚀 Prompts for Kiro to Expand

### Basic Implementation

```
Kiro, implement FlashGameCore.update() and render() methods using the 
flash-resurrection-spec.json. Create a 30 FPS game loop with timeline 
support. Keep the Flash-style API intact.
```

```
Kiro, implement FlashSpriteAdapter.convertSprite() to transform Flash 
sprite metadata into modern JSON format. Support position, rotation, 
scale, and alpha properties.
```

```
Kiro, implement FlashToHTML5Bridge event handling. Map modern mouse 
and keyboard events to Flash-style events with stageX/stageY coordinates.
```

### Advanced Features

```
Kiro, add Flash-style tweening to FlashGameCore. Support linear, easeIn, 
easeOut, and easeInOut easing functions. Animate position, rotation, 
scale, and alpha.
```

```
Kiro, implement movie clip nesting in FlashGameCore. Support parent-child 
hierarchies with inherited transformations like Flash.
```

```
Kiro, add Flash-style hit testing to FlashToHTML5Bridge. Support both 
hitTestObject (rectangle collision) and hitTestPoint (point-in-bounds).
```

### Integration Features

```
Kiro, create a compatibility layer between FlashGameCore and Zombie Engine's 
GameEngineCore. Synchronize their game loops and share sprite data.
```

```
Kiro, implement a Flash game loader that can import converted Flash projects 
and run them in the Zombie Engine. Support multiple games.
```

---

## 🎃 Flash Resurrection Features

### Implemented (Skeleton)
- ✅ Flash-style game loop structure
- ✅ Movie clip registry
- ✅ Timeline control methods
- ✅ Event bridge architecture
- ✅ Sprite adapter structure

### To Be Implemented
- ⏳ Actual rendering to canvas
- ⏳ Timeline animation playback
- ⏳ Tween animation system
- ⏳ Event dispatching
- ⏳ Sprite format conversion
- ⏳ Hit testing
- ⏳ Sound playback
- ⏳ Coordinate transformations

### Future Enhancements
- 🔮 Full ActionScript 2.0 compatibility layer
- 🔮 Vector graphics rendering (SVG)
- 🔮 Flash filter effects (glow, blur, etc.)
- 🔮 Bitmap caching for performance
- 🔮 Flash video playback
- 🔮 External SWF loading

---

## 📚 Flash Terminology Guide

For developers unfamiliar with Flash:

| Flash Term | Modern Equivalent | Description |
|------------|-------------------|-------------|
| **Stage** | Canvas | The main display area |
| **Movie Clip** | Animated Sprite | Reusable animated object |
| **Timeline** | Animation Sequence | Frame-by-frame animation |
| **Frame** | Animation Frame | Single step in animation |
| **Keyframe** | Key Frame | Important frame in animation |
| **Tween** | Interpolation | Automatic animation between keyframes |
| **ActionScript** | JavaScript | Programming language |
| **_root** | Global Scope | Top-level timeline |
| **gotoAndPlay** | Jump to Frame | Timeline navigation |
| **onEnterFrame** | Update Loop | Called every frame |

---

## 🧟 Resurrection Philosophy

This module doesn't just recreate Flash's functionality - it preserves its **spirit**:

- **Simplicity**: Flash made game development accessible
- **Creativity**: Flash encouraged experimentation
- **Community**: Flash had a vibrant creator community
- **Nostalgia**: Flash games are part of internet history

By resurrecting Flash in HTML5, we honor its legacy while ensuring Flash games can live on in modern browsers.

---

## 🔗 Related Files

- **Specification**: See `../../.kiro/flash-resurrection-spec.json`
- **Zombie Engine**: See `../../zombie-engine/`
- **Documentation**: See `../../Resurrection_Targets.md`

---

## 🎮 Example: Resurrected Flash Game

```javascript
// A simple Flash-style game
const game = new FlashGameCore();
game.init('canvas');

// Create player (Flash movie clip style)
const player = {
    x: 100,
    y: 100,
    speed: 5,
    onEnterFrame: function() {
        // Flash-style frame script
        if (Key.isDown(Key.LEFT)) this.x -= this.speed;
        if (Key.isDown(Key.RIGHT)) this.x += this.speed;
    }
};

game.addMovieClip('player', player);
game.play();

// It's alive! 🧟
```

---

*"Flash is dead. Long live Flash!"* 👻

---

**Status**: 💀 Skeleton Ready for Implementation  
**Integration**: 🔗 Compatible with Zombie Engine  
**Spookiness**: 🎃🎃🎃🎃🎃

*Resurrected with 🎮 for Kiroween Milestone 2*
