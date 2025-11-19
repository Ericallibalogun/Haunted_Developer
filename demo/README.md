# 🎃 Haunted Developer - Live Demo

> See the Resurrection Engine in action!

## 🚀 How to Run

### Option 1: Python HTTP Server (Recommended)

```bash
# From the project root directory
cd haunted-developer

# Start server
python3 -m http.server 8000

# Open in browser
# Visit: http://localhost:8000/demo/
```

### Option 2: Node.js HTTP Server

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# From the project root
cd haunted-developer

# Start server
http-server -p 8000

# Open in browser
# Visit: http://localhost:8000/demo/
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `demo/index.html`
3. Select "Open with Live Server"

---

## 🎮 What You Can Do

### ⚡ Resurrection Engine
- **Awaken Engine**: Start the heartbeat system
- **Shutdown**: Stop the engine
- **Watch**: See heartbeat count, time of day, and emotions update

### 👻 Ghost Personality
- **Send Message**: Type and send messages to the ghost
- **Make Whisper**: Trigger a random ambient whisper
- **Observe**: Watch the ghost's emotional state change

### 🧟 Zombie AI
- **Update State**: Manually trigger zombie AI update
- **Make Sound**: Trigger sound detection
- **Revive**: Restore zombie health
- **Watch**: See health decay and state changes

### 🔗 Stitching System
- **Stitch Creature**: Create a Frankenstein monster
- **Awaken Creature**: Bring the creature to life
- **Observe**: See module fusion in action

---

## 🎃 Features Demonstrated

### Working Features ✅
- ⚡ Resurrection Engine heartbeat
- 👻 Ghost emotional responses
- 🧟 Zombie state machine
- 🔗 Module stitching
- 📊 Real-time stats
- 🌙 Time of day tracking
- 💓 Emotion tracking
- 🎭 State transitions

### Skeleton Features 💀
- Ghost Chat UI (skeleton)
- Zombie Engine rendering (skeleton)
- Flash game resurrection (skeleton)
- Legacy bot integration (skeleton)
- Dead API simulator (skeleton)

---

## 🧪 Try These Interactions

### Test Ghost Emotions

```
Type: "I'm scared!"
→ Ghost detects fear emotion
→ Responds with reassurance

Type: "Haha that's funny!"
→ Ghost detects joy
→ Responds playfully

Type: "What's your name?"
→ Ghost detects confusion
→ Explains patiently
```

### Test Zombie Behavior

```
1. Click "Update State" multiple times
→ Watch health decay
→ See state transitions

2. Click "Make Sound"
→ Zombie enters detecting state
→ Sound level increases

3. Let health drop below 30
→ Zombie enters decay state
→ Click "Revive" to restore
```

### Test Night Mode

```
1. Wait until after midnight (or change system time)
→ Time of Day shows "witching"
→ Ghost power multiplier increases
→ Responses become more intense
```

### Test Module Fusion

```
1. Click "Stitch Creature"
→ Creates memory + personality modules
→ Checks compatibility
→ Stitches them together

2. Click "Awaken Creature"
→ Initializes all modules
→ Injects connections
→ Creature comes alive!
```

---

## 📊 What's Working vs What's Skeleton

### ✅ Fully Implemented (Working)

| System | Status | Features |
|--------|--------|----------|
| Resurrection Engine | ⚡ ALIVE | Heartbeat, emotions, environment, events |
| Ghost Personality | 👻 ALIVE | 5 states, emotion detection, night mode, whispers |
| Zombie AI | 🧟 ALIVE | 6 states, movement logic, decay, sound reactive |
| Stitching System | 🔗 ALIVE | Module fusion, compatibility, connections |

### 💀 Skeleton (Not Yet Connected)

| System | Status | Notes |
|--------|--------|-------|
| Ghost Chat UI | 💀 Skeleton | HTML/CSS ready, needs wiring |
| Zombie Engine Rendering | 💀 Skeleton | Canvas ready, needs sprites |
| Flash Resurrection | 💀 Skeleton | Modules ready, needs implementation |
| Legacy Bot | 💀 Skeleton | Rules ready, needs integration |
| Dead API | 💀 Skeleton | Simulator ready, needs data |

---

## 🎃 Current State

**Milestone 1**: ✅ Skeleton Crew (Templates created)  
**Milestone 2**: ✅ Resurrection (Dead tech revived)  
**Milestone 3**: ✅ Activation (AI logic implemented)  
**Next**: 🔗 Full Integration (Connect everything)

---

## 🐛 Troubleshooting

**Problem**: Modules not loading (CORS error)  
**Solution**: Must use HTTP server, can't open file directly

**Problem**: Nothing happens when clicking buttons  
**Solution**: Check browser console for errors, ensure server is running

**Problem**: Stats not updating  
**Solution**: Click "Awaken Engine" first to start heartbeat

---

## 🎮 Demo Controls

| Button | Action | Result |
|--------|--------|--------|
| ⚡ Awaken Engine | Start heartbeat | Engine comes alive |
| 💀 Shutdown | Stop heartbeat | Engine goes dormant |
| 💬 Send Message | Talk to ghost | Get emotional response |
| 👁️ Make Whisper | Trigger whisper | Ambient haunting |
| 🔄 Update State | Update zombie | State machine advances |
| 🔊 Make Sound | Trigger detection | Zombie hears sound |
| 💊 Revive | Restore health | Zombie heals |
| 🧟 Stitch Creature | Create monster | Module fusion |
| ⚡ Awaken Creature | Activate modules | Creature lives |

---

## 📈 What to Watch

### Resurrection Engine
- Heartbeat count increases every second
- Time of day updates based on system time
- Emotions decay over time (5% per pulse)

### Ghost Personality
- State changes based on dominant emotion
- Night mode activates 12am-3am
- Whispers occur randomly

### Zombie AI
- Health decays at 0.1 HP/second
- State transitions based on conditions
- Sound level decays at 95% per frame

### Stitching System
- Creature count increases when stitching
- Modules connect automatically
- Compatibility checked before fusion

---

## 🎃 Have Fun!

This demo shows the **living AI systems** we've built. The skeleton templates are ready for full integration in the next phase!

**"IT'S ALIVE!"** ⚡🧟⚡

---

*Built with 🎃 for Kiroween*
