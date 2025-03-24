import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Card, Divider } from 'react-native-paper';
import ConversationSuggestions from '../components/ConversationSuggestions';
import { generateReplySuggestions } from '../utils/aiHelper';

const ConversationScreen = () => {
  const [userLanguage, setUserLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Spanish');
  
  const [userMessage, setUserMessage] = useState('');
  const [userTranslation, setUserTranslation] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseTranslation, setResponseTranslation] = useState('');
  
  const [suggestions, setSuggestions] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGenerateSuggestions = async () => {
    if (!userMessage || !userTranslation || !responseMessage || !responseTranslation) {
      // Show an error or notification that all fields are required
      return;
    }
    
    setIsProcessing(true);
    
    try {
      const suggestedReplies = await generateReplySuggestions({
        userLanguage,
        targetLanguage,
        userMessage,
        userTranslation,
        responseMessage,
        responseTranslation
      });
      
      setSuggestions(suggestedReplies);
    } catch (error) {
      console.error('Error generating suggestions:', error);
      // Show error notification
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Conversation Assistant" subtitle="Generate reply suggestions" />
        <Card.Content>
          <View style={styles.languageSelectionContainer}>
            <View style={styles.languageRow}>
              <Text style={styles.label}>Your language:</Text>
              <TextInput
                value={userLanguage}
                onChangeText={setUserLanguage}
                style={styles.languageInput}
                mode="outlined"
              />
            </View>
            <View style={styles.languageRow}>
              <Text style={styles.label}>Target language:</Text>
              <TextInput
                value={targetLanguage}
                onChangeText={setTargetLanguage}
                style={styles.languageInput}
                mode="outlined"
              />
            </View>
          </View>
          
          <Divider style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Your Message:</Text>
          <TextInput
            value={userMessage}
            onChangeText={setUserMessage}
            placeholder="Your original message"
            multiline
            mode="outlined"
            style={styles.input}
          />
          
          <TextInput
            value={userTranslation}
            onChangeText={setUserTranslation}
            placeholder="Translation of your message"
            multiline
            mode="outlined"
            style={styles.input}
          />
          
          <Text style={styles.sectionTitle}>Their Response:</Text>
          <TextInput
            value={responseMessage}
            onChangeText={setResponseMessage}
            placeholder="Their response in target language"
            multiline
            mode="outlined"
            style={styles.input}
          />
          
          <TextInput
            value={responseTranslation}
            onChangeText={setResponseTranslation}
            placeholder="Translation of their response"
            multiline
            mode="outlined"
            style={styles.input}
          />
          
          <Button 
            mode="contained" 
            onPress={handleGenerateSuggestions}
            loading={isProcessing}
            disabled={isProcessing}
            style={styles.button}
          >
            Generate Reply Suggestions
          </Button>
        </Card.Content>
      </Card>
      
      {suggestions.length > 0 && (
        <ConversationSuggestions 
          suggestions={suggestions}
          userLanguage={userLanguage}
          targetLanguage={targetLanguage}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  languageSelectionContainer: {
    marginBottom: 16,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  label: {
    width: 110,
  },
  languageInput: {
    flex: 1,
    height: 40,
  },
  divider: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  }
});

export default ConversationScreen; 