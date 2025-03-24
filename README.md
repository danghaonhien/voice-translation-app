# LinguaLoop - AI Conversation Assistant

LinguaLoop is a mobile application that helps users communicate in foreign languages by suggesting contextually relevant replies based on their ongoing conversation.

## Features

- Input your message and its translation
- Input the other person's response and its translation
- Generate AI-powered reply suggestions
- Get translations for suggested replies
- Get pronunciation guidance for specific languages (Chinese, Japanese)
- Text-to-speech playback of both original and translated replies

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app (compatible with SDK 52.0.0)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Open the app on your device using the Expo Go app by scanning the QR code displayed in the terminal.

## How to Use

1. Enter your native language and the target language
2. Fill in all four text fields:
   - Your original message
   - The translation of your message
   - The other person's response (in their language)
   - The translation of their response
3. Tap "Generate Reply Suggestions"
4. Choose from the suggested replies
5. Use the speaker buttons to hear the pronunciation

## Production Implementation

For a production app, you would need to:

1. Set up a secure backend server to handle API keys
2. Integrate with real translation APIs (Google Translate, DeepL, etc.)
3. Connect to an AI service (OpenAI, Azure OpenAI) for generating contextual replies
4. Add user authentication
5. Implement data storage for conversation history

## License

This project is licensed under the MIT License. 