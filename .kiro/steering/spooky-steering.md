# 👻 Spooky Theme Steering Rules

> Kiro must apply these guidelines to all generated modules for the Haunted Developer project

---

## 🎃 Core Theming Principles

### 1. Always Apply Eerie Comments to Code Stubs

**Rule**: Every function, class, and module must have spooky-themed comments.

**Examples**:
```javascript
// ✅ Good
// 👻 Summon the ghost's response from the void
function generateResponse() {
    // 💀 Channel the spirits...
}

// ❌ Bad
// Generate a response
function generateResponse() {
    // Process the input
}
```

**Comment Style Guide**:
- Use ghost/zombie/Halloween emojis: 👻 🎃 💀 🧟 🕯️ 🦇 🕸️ 🩸 ⚰️
- Use supernatural vocabulary: summon, manifest, haunt, resurrect, banish
- Make TODO comments spooky: "TODO: Awaken the sleeping code"
- Add personality: "The spirits are restless tonight..."

---

### 2. Prefer Ghostly Naming Patterns

**Rule**: Use supernatural terminology in variable and function names where appropriate.

**Naming Conventions**:

| Generic | Spooky Alternative |
|---------|-------------------|
| `delete` | `banish`, `exorcise`, `destroy` |
| `create` | `summon`, `manifest`, `resurrect` |
| `update` | `haunt`, `possess`, `animate` |
| `remove` | `vanish`, `dispel`, `fade` |
| `list` | `horde`, `swarm`, `coven` |
| `error` | `curse`, `hex`, `haunting` |
| `warning` | `omen`, `premonition` |
| `success` | `blessing`, `enchantment` |

**Examples**:
```javascript
// ✅ Good
function summonGhost() { }
function banishSpirit() { }
const zombieHorde = [];
const hauntedMemory = new Map();

// ⚠️ Acceptable (when clarity is important)
function createEntity() { }  // OK if "summon" is confusing
function deleteUser() { }     // OK for standard operations
```

**Balance**: Prioritize clarity over theme when necessary, but add spooky comments to compensate.

---

### 3. Ensure UI Hints Are "Haunted" or "Spectral"

**Rule**: All UI-related strings, placeholders, and messages must have supernatural theming.

**UI Text Examples**:

```javascript
// ✅ Good
placeholder: "Type your message to the spirits..."
button: "Summon Response 🕯️"
loading: "Manifesting from the void..."
error: "The spirits are confused... 👻"
success: "Message delivered to the other side! 💀"

// ❌ Bad
placeholder: "Type your message..."
button: "Send"
loading: "Loading..."
error: "Error occurred"
success: "Success"
```

**UI State Messages**:
- Loading: "Summoning...", "Manifesting...", "Channeling spirits..."
- Empty state: "No spirits here yet...", "The void is empty..."
- Error: "Cursed!", "Haunted by bugs!", "The spirits are angry..."
- Success: "Blessed!", "Enchanted!", "The ritual is complete!"

---

### 4. Preserve Dark, Neon, Supernatural Theming

**Rule**: All visual design must maintain the spooky aesthetic.

**Color Palette**:

```css
/* Ghost Chat Theme */
--ghost-primary: #1a0033;      /* Deep purple/black */
--ghost-accent: #9d4edd;       /* Ghostly purple */
--ghost-text: #e0e0e0;         /* Light gray */
--ghost-glow: #bb86fc;         /* Neon glow */
--ghost-warning: #ff6b6b;      /* Blood red */

/* Zombie Engine Theme */
--zombie-primary: #0d1b0d;     /* Dark green/black */
--zombie-accent: #39ff14;      /* Toxic green */
--zombie-text: #c0c0c0;        /* Gray */
--zombie-blood: #8b0000;       /* Dark red */
--zombie-decay: #4a5f4a;       /* Decay green */
```

**Visual Effects**:
- Glowing text shadows
- Pulsing animations
- Fade in/out transitions
- Floating/hovering effects
- Particle effects (optional)

**Typography**:
- Headers: Creepy but readable fonts
- Body: Clean sans-serif for readability
- Code: Monospace with neon colors

---

### 5. Sound Effects or Animation Hooks Recommended

**Rule**: Suggest audio and animation integration points in code.

**Animation Hooks**:

```javascript
// ✅ Add animation hints in comments
function displayMessage(message) {
    // 🎃 Animation hook: Fade in with ghostly effect
    // TODO: Add CSS class 'ghost-fade-in'
    
    // 🦇 Sound hook: Play ethereal whoosh sound
    // TODO: playSound('ghost-whoosh.mp3')
}
```

**Recommended Sound Effects**:
- Message sent: Ethereal whoosh
- Message received: Ghostly whisper
- Error: Ominous chord
- Success: Magical chime
- Button click: Subtle echo
- Typing: Faint scratching

**Recommended Animations**:
- `ghost-fade-in`: Fade in with slight float
- `zombie-shamble`: Jerky movement
- `pulse-glow`: Pulsing glow effect
- `haunt-float`: Gentle floating motion
- `spirit-manifest`: Materialize from nothing
- `decay-effect`: Gradual deterioration

---

## 🎃 Project-Specific Guidelines

### Ghost Chat

**Personality**: Friendly but spooky ghost
**Tone**: Helpful, enthusiastic, supernatural
**Emojis**: 👻 🎃 💀 🕯️ 🔮

**Example Responses**:
```
"Boo! How can I help you today? 👻"
"Ooooh, that's a spooky question! Let me channel the spirits..."
"The spirits say: [response] 💀"
```

### Zombie Engine

**Personality**: Post-apocalyptic, survival-focused
**Tone**: Gritty, intense, undead
**Emojis**: 🧟 💀 🦴 🩸 ⚰️

**Example Messages**:
```
"Zombie horde approaching! 🧟"
"Survivor count: [number] 💀"
"The undead never rest..."
```

### Resurrection Modules

**Personality**: Nostalgic, reverent, mysterious
**Tone**: Honoring the past, bringing back the dead
**Emojis**: 💀 ⚰️ 🕯️ 👻

**Example Comments**:
```javascript
// 💀 Resurrecting Flash from the digital graveyard
// ⚰️ This API died in 2012, but lives on through us
// 🕯️ In memory of technologies past
```

---

## 🦇 Code Quality with Spooky Flair

### Balance Spookiness with Professionalism

**Do**:
- Use spooky comments liberally
- Add supernatural vocabulary where it fits
- Make UI text themed
- Suggest animations and sounds

**Don't**:
- Sacrifice code clarity for theme
- Use confusing variable names
- Overdo the theme (keep it fun, not annoying)
- Ignore standard conventions entirely

### Example of Good Balance:

```javascript
// 👻 GhostMessageHandler - Processes messages from the living
class GhostMessageHandler {
    constructor() {
        // 💀 Initialize the spirit realm connection
        this.messages = [];  // Clear variable name
        this.isHaunted = false;  // Spooky but clear
    }
    
    // 🎃 Summon a response from the void
    async processMessage(input) {
        // ✅ Standard validation with spooky comment
        if (!input) {
            throw new Error('Cannot summon from emptiness! 👻');
        }
        
        // 🕯️ Channel the spirits...
        const response = await this.generateResponse(input);
        
        // 💀 Manifest the response in the mortal realm
        return response;
    }
}
```

---

## 🕸️ Consistency Checklist

Before completing any module, verify:

- [ ] All functions have spooky emoji comments
- [ ] Variable names use supernatural vocabulary (where appropriate)
- [ ] UI strings are themed
- [ ] Color scheme matches project (dark + neon)
- [ ] Animation/sound hooks are suggested
- [ ] Code is still clear and maintainable
- [ ] Theme enhances, doesn't hinder

---

## 🎃 Kiro-Specific Instructions

When generating code for Haunted Developer:

1. **Start with spooky comment** at top of every file
2. **Use emoji comments** for all major sections
3. **Suggest theming** in TODO comments
4. **Add personality** to error messages
5. **Recommend effects** for user interactions
6. **Maintain consistency** across all modules
7. **Balance theme with clarity** - never sacrifice understanding

---

## 💀 Examples by Module Type

### JavaScript Classes

```javascript
// 👻 ClassName - Brief spooky description
class ClassName {
    constructor() {
        // 💀 Initialize the haunted properties
    }
    
    // 🎃 Method description with supernatural flair
    methodName() {
        // 🕯️ Implementation details
    }
}
```

### HTML

```html
<!-- 👻 Haunted Chat Interface -->
<div class="ghost-container">
    <!-- 💀 Message display area -->
    <div id="messages" class="spirit-realm">
        <!-- Messages manifest here -->
    </div>
    
    <!-- 🎃 Input for mortal communication -->
    <input placeholder="Speak to the spirits..." />
</div>
```

### CSS

```css
/* 👻 Spooky Styling */
.ghost-container {
    /* 💀 Dark, mysterious background */
    background: var(--ghost-primary);
    
    /* 🎃 Ethereal glow effect */
    box-shadow: 0 0 20px var(--ghost-glow);
}

/* 🕯️ Haunted animation */
@keyframes haunt {
    /* TODO: Add floating effect */
}
```

---

## 🔮 Final Notes

This steering document ensures all generated code maintains the Kiroween spirit while remaining professional and maintainable. The goal is to create a delightfully spooky experience that honors dead technologies and celebrates Halloween, all while building functional, well-structured applications.

**Remember**: We're building a haunted developer experience, not a horror show. Keep it fun, keep it themed, keep it clear.

---

*"Code with the spirits, debug with the living."* 👻

---

**Status**: 📋 Active Steering Rules  
**Applies To**: All Haunted Developer modules  
**Enforcement**: Kiro must follow these guidelines

*Created with 🎃 for Kiroween*
