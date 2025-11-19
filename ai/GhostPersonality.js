// 👻 GhostPersonality - Emotional AI for Haunted Chat
// State machine with fear, rage, curiosity, mischief, and sleep states

class GhostPersonality {
    constructor() {
        // 💀 Personality traits (0-1 scale)
        this.traits = {
            fearLevel: 0.3,
            mischiefLevel: 0.7,
            curiosityLevel: 0.5,
            rageLevel: 0.2
        };
        
        // 🎭 Current state
        this.state = 'curious'; // curious, mischievous, fearful, angry, sleeping
        
        // 🕯️ Speech tone modifiers
        this.toneModifiers = {
            curious: ['Ooooh', 'Interesting', 'Tell me more', 'Hmm'],
            mischievous: ['Hehe', 'Boo!', 'Gotcha', 'LOL'],
            fearful: ['Oh no', 'Scary', 'Help', 'Eek'],
            angry: ['RAWR', 'Grr', 'Enough!', 'Stop it!'],
            sleeping: ['Zzz', 'Yawn', 'So tired', 'Sleepy']
        };
        
        // 🧠 Memory fragments (recent interactions)
        this.memory = [];
        this.maxMemory = 10;
        
        // 🌙 Night mode power boost
        this.nightPowerMultiplier = 1.0;
        
        // 👁️ Whisper mode
        this.whisperMode = false;
        this.whisperProbability = 0.1;
    }

    // 💓 Pulse - called every heartbeat
    pulse(emotions, environment) {
        // 🌙 Boost power during witching hours
        if (environment.timeOfDay === 'witching') {
            this.nightPowerMultiplier = 2.0;
            this.whisperProbability = 0.5; // 50% chance to whisper
        } else if (environment.timeOfDay === 'night') {
            this.nightPowerMultiplier = 1.5;
            this.whisperProbability = 0.3;
        } else {
            this.nightPowerMultiplier = 1.0;
            this.whisperProbability = 0.1;
        }
        
        // 🎭 Update state based on emotions
        this.updateState(emotions);
        
        // 👻 Random whisper chance
        if (Math.random() < this.whisperProbability) {
            this.whisper();
        }
    }

    // 🎭 Update personality state based on emotions
    updateState(emotions) {
        // 💀 Find dominant emotion
        let maxEmotion = 'curiosity';
        let maxValue = emotions.curiosity;
        
        if (emotions.fear > maxValue) {
            maxEmotion = 'fear';
            maxValue = emotions.fear;
        }
        if (emotions.rage > maxValue) {
            maxEmotion = 'rage';
            maxValue = emotions.rage;
        }
        if (emotions.mischief > maxValue) {
            maxEmotion = 'mischief';
            maxValue = emotions.mischief;
        }
        
        // 🎃 Map emotion to state
        const stateMap = {
            fear: 'fearful',
            rage: 'angry',
            curiosity: 'curious',
            mischief: 'mischievous'
        };
        
        // 😴 Sleep state if all emotions are low
        if (maxValue < 0.2) {
            this.state = 'sleeping';
        } else {
            this.state = stateMap[maxEmotion];
        }
    }

    // 💬 Generate response based on current state
    generateResponse(userMessage) {
        // 🧠 Store in memory
        this.remember(userMessage);
        
        // 🎭 Get tone modifier for current state
        const modifiers = this.toneModifiers[this.state];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        
        // 👻 Detect user emotion
        const userEmotion = this.detectUserEmotion(userMessage);
        
        // 🎃 Generate contextual response
        let response = this.generateContextualResponse(userMessage, userEmotion);
        
        // 🌙 Apply night power boost
        if (this.nightPowerMultiplier > 1.0) {
            response = this.applyNightBoost(response);
        }
        
        // 👁️ Whisper mode formatting
        if (this.whisperMode) {
            response = `*whispers* ${response}`;
        }
        
        return `${modifier}... ${response} 👻`;
    }

    // 🧠 Remember interaction
    remember(message) {
        this.memory.push({
            message,
            timestamp: Date.now(),
            state: this.state
        });
        
        // 💀 Forget old memories
        if (this.memory.length > this.maxMemory) {
            this.memory.shift();
        }
    }

    // 😊 Detect user's emotional state
    detectUserEmotion(message) {
        const lower = message.toLowerCase();
        
        // 😱 Fear indicators
        if (lower.match(/scared|afraid|fear|help|scary/)) {
            return 'scared';
        }
        
        // 😂 Joy indicators
        if (lower.match(/haha|lol|funny|joke|happy/)) {
            return 'joking';
        }
        
        // 😕 Confusion indicators
        if (lower.match(/what|how|why|confused|don't understand/)) {
            return 'confused';
        }
        
        // 😃 Excitement indicators
        if (lower.match(/wow|amazing|awesome|cool|excited/)) {
            return 'excited';
        }
        
        return 'neutral';
    }

    // 🎃 Generate contextual response
    generateContextualResponse(userMessage, userEmotion) {
        const responses = {
            scared: [
                "Don't be afraid! I'm a friendly ghost!",
                "Boo! Just kidding, I won't hurt you!",
                "Fear not, mortal. I come in peace... mostly."
            ],
            joking: [
                "Hehe, you're funny! I like you!",
                "LOL! That's hilarious! Even ghosts laugh!",
                "You've got a good sense of humor for a living person!"
            ],
            confused: [
                "Let me explain from beyond the veil...",
                "Ah, I see your confusion. Allow me to clarify...",
                "Don't worry, even the dead get confused sometimes!"
            ],
            excited: [
                "Your excitement is contagious! Even in the afterlife!",
                "Woohoo! I love your energy!",
                "That's the spirit! Pun intended!"
            ],
            neutral: [
                "I'm listening from the other side...",
                "Tell me more, mortal friend...",
                "The spirits are curious about your thoughts..."
            ]
        };
        
        const options = responses[userEmotion] || responses.neutral;
        return options[Math.floor(Math.random() * options.length)];
    }

    // 🌙 Apply night power boost to response
    applyNightBoost(response) {
        if (this.nightPowerMultiplier >= 2.0) {
            return `✨ ${response.toUpperCase()} ✨`; // POWERFUL
        } else if (this.nightPowerMultiplier >= 1.5) {
            return `🌙 ${response} 🌙`; // Enhanced
        }
        return response;
    }

    // 👁️ Random whisper (ambient haunting)
    whisper() {
        const whispers = [
            "*whispers* I'm watching...",
            "*whispers* Can you hear me?",
            "*whispers* The veil is thin tonight...",
            "*whispers* Boo...",
            "*whispers* Remember me..."
        ];
        
        const whisper = whispers[Math.floor(Math.random() * whispers.length)];
        console.log(`👻 ${whisper}`);
        return whisper;
    }

    // 🎭 Manually set state
    setState(newState) {
        const validStates = ['curious', 'mischievous', 'fearful', 'angry', 'sleeping'];
        if (validStates.includes(newState)) {
            this.state = newState;
        }
    }

    // 📊 Get current personality status
    getStatus() {
        return {
            state: this.state,
            traits: this.traits,
            memoryCount: this.memory.length,
            nightPower: this.nightPowerMultiplier,
            whisperMode: this.whisperMode
        };
    }
}

export default GhostPersonality;
