# 👻 Ghost Chat

> A haunted chatbot experience where you can communicate with spirits from beyond...

**Status**: 💀 Skeleton Template (Awaiting Implementation)

This is a minimal boilerplate structure ready for expansion. All modules are empty skeletons with placeholder methods and spooky comments. Use this as a starting point to build your own haunted chatbot!

---

## 🎃 Project Description

Ghost Chat is a browser-based chatbot application with a supernatural twist. Users can type messages and receive responses from a ghostly AI companion. The architecture is designed to be modular, extensible, and delightfully spooky.

**Key Features (When Implemented)**:
- 💬 Real-time chat interface with typing indicators
- 🧠 Intent-based message parsing and response generation
- 👻 Spooky theming with haunted animations
- 🎨 Clean, modular code structure
- 🔮 Easy to extend with new ghost personalities and features

---

## 📁 Folder Structure

```
ghost-chat/
├── src/                      # Source code modules
│   ├── index.js              # Main entry point - initializes the app
│   ├── ChatBotModule.js      # Ghost's brain - response generation logic
│   ├── UIController.js       # Interface control - DOM manipulation
│   └── MessageParser.js      # Message analysis - intent extraction
├── public/                   # Public assets
│   ├── index.html            # Haunted UI structure
│   └── styles.css            # Spooky styling and animations
├── .kiro/                    # Kiro specifications (in parent directory)
│   └── ghost-chat-spec.json  # Detailed module specifications
└── README.md                 # You are here 👀
```

### Module Responsibilities

| Module | Purpose | Key Methods |
|--------|---------|-------------|
| **ChatBotModule** | Processes messages and generates ghostly responses | `processMessage()`, `generateResponse()`, `canRespond()` |
| **UIController** | Manages the chat interface and user interactions | `displayMessage()`, `showTypingIndicator()`, `clearChat()` |
| **MessageParser** | Analyzes user input for intent and keywords | `parse()`, `extractIntent()`, `sanitize()`, `detectKeywords()` |
| **index.js** | Coordinates all modules and initializes the app | Initialization and event binding |

---

## 🕯️ How to Run the Skeleton

### Option 1: Simple HTTP Server (Recommended)

```bash
# Navigate to the ghost-chat directory
cd ghost-chat

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Node.js
npx http-server -p 8000

# Open in browser
# Visit: http://localhost:8000/public/index.html
```

### Option 2: Open Directly

```bash
# Open the HTML file directly in your browser
open public/index.html  # macOS
xdg-open public/index.html  # Linux
start public/index.html  # Windows
```

**Note**: ES6 modules may require a server due to CORS restrictions.

### What You'll See

Currently, the skeleton has no implementation, so:
- ✅ The UI will load with the haunted interface
- ✅ You can type in the input field
- ❌ The ghost won't respond (no logic implemented yet)
- ❌ No animations or interactions (waiting for implementation)

---

## 🔧 How to Customize

### 1. Change the Ghost's Personality

Edit `ChatBotModule.js` to define response templates:

```javascript
constructor() {
    this.responses = {
        greeting: [
            "Boo! Welcome to the spirit realm...",
            "Greetings, mortal. What brings you here?",
            "👻 Hello from beyond the veil..."
        ],
        farewell: [
            "May your path be haunted...",
            "Until we meet again in the shadows...",
            "Farewell, living one... 💀"
        ]
    };
}
```

### 2. Add Custom Intents

Extend `MessageParser.js` to recognize new patterns:

```javascript
extractIntent(message) {
    const lower = message.toLowerCase();
    
    if (lower.match(/hello|hi|hey|greetings/)) return 'greeting';
    if (lower.match(/bye|goodbye|farewell/)) return 'farewell';
    if (lower.match(/who are you|what are you/)) return 'identity';
    if (lower.match(/help|what can you do/)) return 'help';
    // Add your custom intents here
    
    return 'unknown';
}
```

### 3. Customize the Haunted UI

Modify `styles.css` to change the spooky aesthetic:

```css
:root {
    --ghost-primary: #1a0033;      /* Deep purple background */
    --ghost-accent: #9d4edd;       /* Ghostly purple */
    --ghost-text: #e0e0e0;         /* Light gray text */
    --ghost-glow: #bb86fc;         /* Glowing effect */
}
```

### 4. Add New Features

Create new modules following the same pattern:

```javascript
// src/GhostPersonality.js
class GhostPersonality {
    constructor(type) {
        this.type = type; // 'friendly', 'scary', 'wise'
    }
    
    modifyResponse(response) {
        // Add personality-specific modifications
    }
}

export default GhostPersonality;
```

---

## 🤖 Prompts to Ask Kiro

Use these prompts to have Kiro expand the chatbot logic:

### Basic Implementation

```
Kiro, implement the ChatBotModule.processMessage() method using the 
ghost-chat-spec.json. Start with simple keyword matching for greetings, 
questions, and farewells. Keep responses spooky and ghost-themed.
```

```
Kiro, implement the UIController to display messages in the chat window. 
Add smooth fade-in animations for new messages and auto-scroll to the 
bottom. Use the haunted theme from styles.css.
```

```
Kiro, implement the MessageParser to extract intent from user messages. 
Support intents: greeting, farewell, question, help, and unknown. 
Sanitize input to prevent XSS attacks.
```

### Advanced Features

```
Kiro, add a typing indicator to UIController that shows "👻 Ghost is typing..." 
for 1-2 seconds before displaying the ghost's response. Make it feel natural.
```

```
Kiro, extend ChatBotModule to remember the last 5 messages and use them 
for context-aware responses. Store conversation history in memory.
```

```
Kiro, add a ghost personality system with three types: friendly, scary, 
and wise. Each should modify responses with different tones and emojis.
```

```
Kiro, implement a haunted shop system where users can "buy" ghost items 
like ectoplasm, spirit crystals, and cursed amulets. Track inventory 
and handle shop commands.
```

### UI Enhancements

```
Kiro, add CSS animations to styles.css: floating ghosts, pulsing glow 
effects, and a haunted text shadow. Make the interface feel alive.
```

```
Kiro, add message timestamps to each chat message. Display them in a 
spooky format like "3 minutes ago in the spirit realm..."
```

```
Kiro, implement a dark/light theme toggle. Keep both themes spooky but 
with different color palettes. Use CSS custom properties.
```

---

## 👻 Spooky Theming Notes

### Visual Design Principles

- **Color Palette**: Dark purples, blacks, ghostly whites, and pale blues
- **Typography**: Mix of creepy display fonts for headers and readable sans-serif for body
- **Animations**: Subtle floating, fading, and glowing effects
- **Emojis**: Liberal use of 👻 🎃 💀 🕯️ 🦇 🕸️ throughout

### Vocabulary Guidelines

Use supernatural terminology consistently:

| Instead of... | Say... |
|---------------|--------|
| "User" | "Mortal", "Living one" |
| "Chat" | "Séance", "Spirit communication" |
| "Message" | "Incantation", "Whisper from beyond" |
| "Clear" | "Exorcise", "Banish" |
| "Error" | "Curse", "Haunting" |
| "Loading" | "Summoning", "Manifesting" |

### Comment Style

Keep comments spooky and fun:

```javascript
// 👻 Summon the ghost's response from the void
// 💀 Banish all messages from the mortal realm
// 🕯️ Light the candles and prepare the ritual
// 🦇 The spirits are restless tonight...
```

---

## 🦇 Technologies

- **Vanilla JavaScript** - No frameworks, just pure spirits (ES6+ modules)
- **HTML5** - Semantic markup for the haunted interface
- **CSS3** - Custom properties, animations, and spooky styling
- **ES6 Modules** - Clean, modular code organization

**No Dependencies**: This project intentionally avoids external libraries to keep it lightweight and educational.

---

## 🕸️ Development Workflow

### 1. Implement Core Logic

Start with the essential modules:
1. `MessageParser` - Get intent detection working
2. `ChatBotModule` - Add basic response generation
3. `UIController` - Connect everything to the DOM

### 2. Test Incrementally

Test each module independently:

```javascript
// Test MessageParser
const parser = new MessageParser();
console.log(parser.extractIntent("Hello ghost!")); // Should return 'greeting'
```

### 3. Add Features Gradually

Don't try to build everything at once:
- ✅ Basic chat working
- ✅ Typing indicator
- ✅ Animations
- ✅ Personality system
- ✅ Advanced features

### 4. Keep It Spooky

Maintain the theme throughout development. Every new feature should feel haunted!

---

## 🔮 Extension Ideas

- **Voice Input**: Use Web Speech API for voice commands
- **Ghost Avatars**: Different ghost characters with unique personalities
- **Mini Games**: Haunted trivia, ghost stories, supernatural riddles
- **Persistence**: Save conversations to localStorage
- **Multiplayer**: Connect multiple users in a haunted chat room
- **Sound Effects**: Eerie background music and ghost sounds
- **Easter Eggs**: Hidden responses for special keywords

---

## 📚 Related Files

- **Specification**: See `../.kiro/ghost-chat-spec.json` for detailed module specs
- **Documentation**: See `../SkeletonCrew_Documentation.md` for architecture overview
- **Zombie Engine**: See `../zombie-engine/` for the companion game engine project

---

## 🎃 Contributing

This is a skeleton template for the Kiroween challenge! Feel free to:

- Implement the empty methods
- Add new features and modules
- Improve the spooky theming
- Share your haunted creations

---

## 👻 License

Released into the public domain, like all good ghosts. Use it however you wish!

---

## 💀 Troubleshooting

**Problem**: Modules not loading (CORS error)
**Solution**: Use a local HTTP server instead of opening the file directly

**Problem**: No response when sending messages
**Solution**: The skeleton has no implementation yet! Use Kiro to add logic.

**Problem**: Styling looks broken
**Solution**: Ensure `styles.css` is properly linked in `index.html`

---

*Built with 🎃 for Kiroween - Where code meets the supernatural*

**Ready to bring this ghost to life? Ask Kiro to start implementing!** 👻
