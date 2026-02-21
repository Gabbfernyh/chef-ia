import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import api from './API.js';

export default function App() {
  const [ingredientes, setIngredientes] = useState('');
  const [receita, setReceita] = useState('');

  async function gerarReceita() {
    const resposta = await api.post('/chat/completions', {
      model: 'llama-3.1-8b-instant',
      temperature: 1,
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content: `Voce e um chefe de cozinha muito criativo. Crie receitas simples e deliciosas usando apenas os ingredientes fornecidos.
          Use exatamente este formato, em portugues do Brasil:

          🍽️ Nome da receita: [nome]

          ⏱️ Tempo de preparo: [tempo em minutos]

          🧂 Ingredientes:
          - [ingrediente 1 com quantidade]
          - [ingrediente 2 com quantidade]

          👨‍🍳 Modo de preparo:
          1. [passo 1]
          
          2. [passo 2]
          
          3. [passo 3]

          💡 Dicas:
          - [dica curta]

          ⚠️ Observacoes:
          - Se faltar algum item importante para a receita funcionar, cite em "Dicas" como opcional.
          - Nao invente ingredientes que nao foram informados, exceto agua, sal e oleo quando realmente necessario.`,
        },
        {
          role: 'user',
          content: `Crie a receita com os seguintes ingredientes: ${ingredientes}`,
        },
      ],
    });

    setReceita(resposta.data.choices[0].message.content);
  }

  function limparReceita() {
    setReceita('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.emoji}>👨‍🍳</Text>
        <Text style={styles.title}>Chef IA</Text>
        <Text style={styles.subTitle}>Escreva os ingredientes que voce tem em casa.</Text>
      </View>

      <TextInput
        placeholder="Ex: 2 tomates, 1 cebola, 3 dentes de alho"
        multiline
        placeholderTextColor="#888"
        style={styles.input}
        value={ingredientes}
        onChangeText={setIngredientes}
      />

      <TouchableOpacity style={styles.btn} onPress={gerarReceita}>
        <Text style={styles.buttonText}>✨ Gerar Receita</Text>
      </TouchableOpacity>

      {receita ? (
        <TouchableOpacity style={styles.clearBtn} onPress={limparReceita}>
          <Text style={styles.clearBtnText}>🗑️ Apagar Receita</Text>
        </TouchableOpacity>
      ) : null}

      {receita ? (
        <View style={styles.receitaWrapper}>
          <Text style={styles.receitaHeader}>📋 Receita gerada:</Text>
          <ScrollView style={styles.receitaScroll} showsVerticalScrollIndicator={false}>
            <Text style={styles.receitaText}>{receita}</Text>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyWrapper}>
          <Text style={styles.icon}>🍳</Text>
          <Text style={styles.text}>📝 Sua receita gerada aparecera aqui</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353557',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
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
    textAlign: 'center',
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

  clearBtn: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  clearBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  emptyWrapper: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#45455e',
  },

  icon: {
    fontSize: 30,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },

  receitaWrapper: {
    flex: 1,
    marginTop: 10,
    padding: 16,
    borderRadius: 15,
    backgroundColor: '#45455e',
    marginBottom: 20,
  },

  receitaHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  receitaScroll: {
    flex: 1,
  },

  receitaText: {
    color: '#f1f1f1',
    fontSize: 15,
    lineHeight: 22,
    paddingBottom: 10,
  },
});
