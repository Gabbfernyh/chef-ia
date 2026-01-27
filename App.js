import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'; 
import api from './API.js';

export default function App() {
  const [ingredientes, setIngredientes] = useState('')
  const [receita, setReceita] = useState('')

  async function gerarReceita() {

    const resposta = await api.post('/chat/completions', {
      model: 'llama-3.1-8b-instant',
      temperatura: 1,
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content: `Você é um chefe de cozinha muito criativo. Crie receitas simples e deliciosas com os ingredientes fornecidos.
          Use este formato:
          `,
        },
        {
          role: 'user',
          content: `Crie a receita com os seguintes gredientes: ${ingredientes}`,
        },
      ]
    })
    setReceita(resposta.data.choices[0].message.content)
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.emoji}>👨‍🍳</Text>
        <Text style={styles.title}>Chef Ia</Text>
        <Text style={styles.subTitle}>Escreva os ingredientes que tem aqui!</Text>
      </View>

      {/* Input de ingredientes */}

      <TextInput
        placeholder="Ex: 2 tomates, 1 cebola, 3 dentes de alho"
        multiline
        placeholderTextColor="#888"
        style={styles.input}
        value={ingredientes}
        onChangeText={setIngredientes}
      />

      {/* Botão de gerar receita */}
      <TouchableOpacity style={styles.btn}
        onPress={gerarReceita}
      >
        <Text style={styles.buttonText}>Gerar Receita</Text>
      </TouchableOpacity>

      {/* Área de exibição da receita */}

      {receita ? (
        <View style={styles.receitaWrapper}>
          
        </View>
      ) : (
        <View>
          <Text >🍳</Text>
          <Text style={styles.text}>Sua Receita gerada aparecerá aqui</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#353557',
    paddingHorizontal: 20,
  },

  input: {
    minHeight: 80,
    marginBottom: 15,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    borderRadius: 15,
    textAlignVertical: 'top',
    borderColor: '#888',
    backgroundColor: '#45455e',
  },

  text: {
    color: '#fff',
  },

  btn: {
    backgroundColor: '#e17055',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 14,
    color: '#d4caca',
    marginTop: 5,
  }
});
