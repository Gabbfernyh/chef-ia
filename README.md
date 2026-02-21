# 🍳 Chef IA

Um aplicativo mobile inteligente que facilita o seu dia a dia na cozinha utilizando inteligência artificial. O Chef IA ajuda você a descobrir receitas, planejar refeições e obter sugestões culinárias personalizadas de forma rápida e prática.

## 📱 Sobre o Projeto

O Chef IA é uma solução mobile desenvolvida para tornar a experiência culinária mais acessível e inteligente. Utilizando o poder da inteligência artificial através da API do Groq, o aplicativo oferece sugestões de receitas, dicas culinárias e assistência personalizada para facilitar o preparo das suas refeições.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile multiplataforma
- **Expo Go** - Plataforma para desenvolvimento e teste rápido de aplicações React Native
- **Axios** - Cliente HTTP para realizar requisições à API
- **Groq API** - API de inteligência artificial para processamento de linguagem natural

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) no seu dispositivo móvel (Android/iOS)

## 🔧 Instalação e Configuração

Siga os passos abaixo para clonar e executar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/gabbfernyh/chef-ia.git
```

### 2. Acesse a pasta do projeto

```bash
cd chef-ia
```

### 3. Instale as dependências

```bash
npm install
```

ou, se preferir usar yarn:

```bash
yarn install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Groq:

```env
GROQ_API_KEY=sua_chave_api_aqui
```

> 💡 **Dica:** Você pode obter sua chave API gratuita em [console.groq.com](https://console.groq.com)

### 5. Inicie o projeto

```bash
npm start
```

ou

```bash
expo start
```

### 6. Execute no seu dispositivo

Após iniciar o projeto, você verá um QR Code no terminal. 

- **Android:** Abra o aplicativo Expo Go e escaneie o QR Code
- **iOS:** Abra a câmera nativa e escaneie o QR Code (o Expo Go abrirá automaticamente)

## 📱 Visualização do Projeto

Para visualizar o projeto, você tem as seguintes opções:

### Opção 1: Dispositivo Físico
1. Instale o **Expo Go** na [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android) ou [App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)
2. Execute `npm start` no terminal
3. Escaneie o QR Code com o Expo Go (Android) ou câmera (iOS)

### Opção 2: Emulador Android
1. Instale o [Android Studio](https://developer.android.com/studio)
2. Configure um dispositivo virtual (AVD)
3. Execute `npm start` e pressione `a` para abrir no Android

### Opção 3: Simulador iOS (apenas macOS)
1. Instale o [Xcode](https://developer.apple.com/xcode/)
2. Execute `npm start` e pressione `i` para abrir no iOS

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## ✨ Autor

Desenvolvido com 💚 por [Gabbfernyh & Devclub]

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!
