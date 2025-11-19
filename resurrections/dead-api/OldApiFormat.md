# 💀 Old API Format Documentation

> Documenting the dead: How these APIs used to work

---

## 🎃 Overview

This document preserves the memory of dead APIs that once powered millions of applications. These APIs are no longer available, but we can resurrect their spirit through simulation.

---

## ☁️ Google Weather API (Died: 2012)

### Original Endpoint

```
GET http://www.google.com/ig/api?weather=[location]
```

### Request Example

```
GET http://www.google.com/ig/api?weather=London
```

### Response Format (XML)

```xml
<?xml version="1.0"?>
<xml_api_reply version="1">
  <weather module_id="0" tab_id="0" mobile_row="0" mobile_zipped="1" row="0" section="0">
    <forecast_information>
      <city data="London, England"/>
      <postal_code data="London"/>
      <latitude_e6 data=""/>
      <longitude_e6 data=""/>
      <forecast_date data="2012-03-15"/>
      <current_date_time data="2012-03-15 12:00:00 +0000"/>
      <unit_system data="US"/>
    </forecast_information>
    <current_conditions>
      <condition data="Cloudy"/>
      <temp_f data="52"/>
      <temp_c data="11"/>
      <humidity data="Humidity: 71%"/>
      <icon data="/ig/images/weather/cloudy.gif"/>
      <wind_condition data="Wind: W at 10 mph"/>
    </current_conditions>
  </weather>
</xml_api_reply>
```

### What's Dead About It

- ❌ No authentication required (security issue)
- ❌ XML format (JSON is now standard)
- ❌ Inconsistent data structure
- ❌ No rate limiting
- ❌ Deprecated image paths
- ❌ Service shut down in 2012

### Resurrection Strategy

```javascript
// Simulated response in old format
const weather = await apiSimulator.getWeather('Haunted Mansion');

// Returns:
{
  location: 'Haunted Mansion',
  condition: 'Foggy with a chance of ghosts',
  temperature: { f: 55, c: 13 },
  humidity: '100% (very damp)',
  wind: 'Howling from the north',
  icon: '👻',
  spirits: 'High activity expected',
  lastUpdated: '2005-10-31T23:59:59Z'
}
```

---

## 🔮 Yahoo! Weather API (Died: 2019)

### Original Endpoint

```
GET https://weather.yahooapis.com/forecastrss?w=[WOEID]
```

### Request Example

```
GET https://weather.yahooapis.com/forecastrss?w=2459115
```

### Response Format (RSS/XML)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:yweather="http://xml.weather.yahoo.com/ns/rss/1.0">
  <channel>
    <title>Yahoo! Weather - New York, NY, US</title>
    <yweather:location city="New York" region="NY" country="United States"/>
    <yweather:units temperature="F" distance="mi" pressure="in" speed="mph"/>
    <yweather:wind chill="45" direction="225" speed="15"/>
    <yweather:atmosphere humidity="65" visibility="10" pressure="30.15" rising="0"/>
    <yweather:astronomy sunrise="6:47 am" sunset="7:38 pm"/>
    <item>
      <yweather:condition text="Partly Cloudy" code="30" temp="52" date="Thu, 15 Mar 2012 12:00 PM EDT"/>
    </item>
  </channel>
</rss>
```

### What's Dead About It

- ❌ Required WOEID (Where On Earth ID) - obscure identifier
- ❌ RSS format (outdated)
- ❌ No HTTPS initially
- ❌ Limited to 2000 requests/day
- ❌ Service shut down in 2019
- ❌ Replaced by paid API

---

## 📰 Google Reader API (Died: 2013)

### Original Endpoint

```
GET https://www.google.com/reader/api/0/stream/contents/[feed-url]
```

### Response Format (JSON)

```json
{
  "direction": "ltr",
  "id": "feed/http://example.com/feed",
  "title": "Example Feed",
  "updated": 1363363200,
  "items": [
    {
      "id": "tag:google.com,2005:reader/item/0001",
      "title": "Article Title",
      "published": 1363363200,
      "updated": 1363363200,
      "author": "John Doe",
      "content": {
        "direction": "ltr",
        "content": "<p>Article content here...</p>"
      }
    }
  ]
}
```

### What's Dead About It

- ❌ Required Google account authentication
- ❌ Complex OAuth flow
- ❌ Proprietary item IDs
- ❌ Service shut down March 2013
- ❌ Caused outcry in tech community

---

## 🎯 Open Trivia Database (Still Alive, but old format)

### Original Endpoint

```
GET https://opentdb.com/api.php?amount=10
```

### Response Format (JSON)

```json
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What year was Minecraft released?",
      "correct_answer": "2011",
      "incorrect_answers": ["2009", "2010", "2012"]
    }
  ]
}
```

### What's Old About It

- ⚠️ HTML entities in questions (needs decoding)
- ⚠️ Inconsistent difficulty ratings
- ⚠️ Limited categories
- ⚠️ No authentication (rate limited by IP)

### Resurrection Enhancement

```javascript
// Enhanced with spooky theme
const trivia = await apiSimulator.getTrivia('spooky');

// Returns:
{
  question: 'What year did Flash officially die?',
  answers: ['2019', '2020', '2021', '2022'],
  correctAnswer: 1,
  category: 'Technology Graveyard',
  difficulty: 'medium',
  funFact: 'Flash powered millions of games and animations!',
  spookiness: 'high',
  hauntedBy: 'Adobe Flash Player'
}
```

---

## 💭 Quotable API (Old Format)

### Original Endpoint

```
GET http://api.quotable.io/random
```

### Old Response Format

```json
{
  "_id": "abc123",
  "content": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "tags": ["inspirational"],
  "authorSlug": "steve-jobs",
  "length": 52
}
```

### Resurrection Enhancement

```javascript
// Spooky quotes from dead technologies
const quote = await apiSimulator.getQuote('technology');

// Returns:
{
  quote: 'What is dead may never die, but rises again in HTML5.',
  author: 'Anonymous Ghost Developer',
  category: 'Technology Resurrection',
  year: 2020,
  context: 'Said during the death of Flash',
  spookiness: 'philosophical',
  relevance: 'high'
}
```

---

## 🎃 Resurrected API Enhancements

### Spooky Weather Conditions

```javascript
const spookyConditions = [
  'Foggy with a chance of ghosts',
  'Partly haunted',
  'Scattered spirits',
  'Heavy supernatural activity',
  'Clear skies, full moon',
  'Ectoplasm precipitation',
  'Zombie weather warning',
  'Vampire-friendly (no sun)'
];
```

### Haunted Horoscopes

```javascript
const hauntedPredictions = [
  'The spirits are aligned in your favor today...',
  'Beware of digital ghosts in your code...',
  'A resurrected technology will bring you fortune...',
  'Your lucky number is 13 (naturally)...',
  'Mercury is in retrograde, and so is your legacy code...'
];
```

### Spooky Trivia Categories

```javascript
const spookyCategories = [
  'Technology Graveyard',
  'Dead Platforms',
  'Obsolete APIs',
  'Discontinued Services',
  'Digital Archaeology',
  'Internet History',
  'Zombie Technologies'
];
```

---

## 🔄 Format Conversion Examples

### XML to JSON

```javascript
// Old XML format
const xml = `
  <weather>
    <location>Haunted Mansion</location>
    <temp>13</temp>
    <condition>Foggy</condition>
  </weather>
`;

// Converted to modern JSON
const json = {
  weather: {
    location: 'Haunted Mansion',
    temperature: 13,
    condition: 'Foggy'
  },
  _metadata: {
    originalFormat: 'xml',
    converted: true,
    timestamp: '2025-10-31T12:00:00Z'
  }
};
```

### Legacy Field Names to Modern

```javascript
// Old field names
const old = {
  loc: 'New York',
  temp: 52,
  desc: 'Cloudy',
  ts: 1363363200
};

// Modern field names
const modern = {
  location: 'New York',
  temperature: 52,
  description: 'Cloudy',
  timestamp: '2013-03-15T12:00:00Z'
};
```

---

## 📊 API Comparison Table

| API | Death Year | Format | Auth | Rate Limit | Resurrection Status |
|-----|-----------|--------|------|------------|-------------------|
| Google Weather | 2012 | XML | None | None | 👻 Resurrected |
| Yahoo Weather | 2019 | RSS/XML | None | 2000/day | 👻 Resurrected |
| Google Reader | 2013 | JSON | OAuth | Unknown | 👻 Resurrected |
| Delicious | 2017 | XML | API Key | 1000/hour | 💀 Planned |
| Twitter v1.0 | 2013 | JSON | OAuth | Varies | 💀 Planned |

---

## 🎯 Why These APIs Died

### Common Causes of API Death

1. **Business Model Changes**
   - Free → Paid
   - Acquisition by another company
   - Service shutdown

2. **Security Issues**
   - No authentication
   - No rate limiting
   - Vulnerable to abuse

3. **Technical Debt**
   - Outdated formats (XML, RSS)
   - Poor documentation
   - Inconsistent responses

4. **Platform Evolution**
   - Better alternatives emerged
   - Technology moved on
   - User base migrated

---

## 🧟 Resurrection Philosophy

We resurrect these APIs not just to preserve their functionality, but to:

1. **Honor Their Legacy**: These APIs powered millions of apps
2. **Learn from History**: Understand what worked and what didn't
3. **Preserve Culture**: They're part of internet history
4. **Enable Creativity**: Use them in new, unexpected ways
5. **Add Personality**: Make them spooky and fun!

---

## 🔮 Future Resurrections

APIs we plan to resurrect:

- 💀 Delicious Bookmarking API
- 💀 Twitter API v1.0
- 💀 Google+ API
- 💀 Vine API
- 💀 Geocities API (if it ever had one!)
- 💀 MySpace API

---

*"In memory of all the APIs that served us well. May they rest in peace... or rise again!"* 👻

---

**Status**: 📋 Documented  
**Resurrection Progress**: 🧟🧟🧟🧟🧟  
**Spookiness Level**: 💀💀💀💀💀

*Documented with 💀 for Kiroween Milestone 2*
