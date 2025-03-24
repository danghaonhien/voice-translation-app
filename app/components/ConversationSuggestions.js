import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const ConversationSuggestions = ({ suggestions, userLanguage, targetLanguage }) => {
  const speakText = (text, language) => {
    // Map language to an appropriate voice locale if needed
    let locale;
    
    switch (language.toLowerCase()) {
      case 'english':
        locale = 'en-US';
        break;
      case 'spanish':
        locale = 'es-ES';
        break;
      case 'french':
        locale = 'fr-FR';
        break;
      case 'german':
        locale = 'de-DE';
        break;
      case 'italian':
        locale = 'it-IT';
        break;
      case 'japanese':
        locale = 'ja-JP';
        break;
      case 'korean':
        locale = 'ko-KR';
        break;
      case 'chinese':
        locale = 'zh-CN';
        break;
      default:
        locale = 'en-US';
    }
    
    Speech.speak(text, {
      language: locale,
      pitch: 1.0,
      rate: 0.9,
    });
  };

  return (
    <Card style={styles.container}>
      <Card.Title 
        title="Suggested Replies" 
        subtitle={`From ${userLanguage} to ${targetLanguage}`} 
      />
      <Card.Content>
        {suggestions.map((suggestion, index) => (
          <View key={index} style={styles.suggestionItem}>
            <View style={styles.suggestionContent}>
              <Text style={styles.sourceText}>{suggestion.source}</Text>
              <Text style={styles.translationText}>{suggestion.translation}</Text>
              {suggestion.pinyin && (
                <Text style={styles.pinyinText}>{suggestion.pinyin}</Text>
              )}
              {suggestion.cultural_note && (
                <Text style={styles.culturalNote}>💡 {suggestion.cultural_note}</Text>
              )}
            </View>
            
            <View style={styles.actionButtons}>
              <IconButton
                icon="volume-high"
                size={20}
                onPress={() => speakText(suggestion.source, userLanguage)}
                mode="outlined"
              />
              <IconButton
                icon="volume-high"
                size={20}
                onPress={() => speakText(suggestion.translation, targetLanguage)}
                mode="outlined"
              />
            </View>
          </View>
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  suggestionItem: {
    flexDirection: 'row',
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  suggestionContent: {
    flex: 1,
  },
  sourceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  translationText: {
    fontSize: 16,
    marginTop: 4,
    fontStyle: 'italic',
  },
  pinyinText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  culturalNote: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 4,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  actionButtons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default ConversationSuggestions; 