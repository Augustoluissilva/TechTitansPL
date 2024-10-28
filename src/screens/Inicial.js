import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';

export default function App({ navigation }) {
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isCadastroPressed, setIsCadastroPressed] = useState(false);

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/80/ea/07/80ea0762cf64c07c9b727daae6b9d1d1.jpg' }} 
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem vindo a</Text>
        <Text style={styles.academiaText}>Academia <Text style={styles.highlightText}>Play Life</Text></Text>
        <Text style={styles.descriptionText}>
          Explore nossa academia, agende uma avaliação personalizada e conheça nossos planos de mensalidade. 
          Aqui, você encontra tudo o que precisa para transformar sua vida com saúde e bem-estar! 💪✨
        </Text>

        {/* Botão de Login */}
        <Pressable
          style={({ pressed }) => [
            styles.loginButton,
            (pressed || isLoginPressed) && { backgroundColor: '#8BBB0F' },
          ]}
          onPress={() => navigation.navigate('Login')}
          onPressIn={() => setIsLoginPressed(true)}
          onPressOut={() => setIsLoginPressed(false)}
        >
          <Text style={styles.loginText}>Fazer Login</Text>
        </Pressable>

        {/* Botão de Cadastro */}
        <Pressable
          onPress={() => navigation.navigate('Cadastro')}
          onPressIn={() => setIsCadastroPressed(true)}
          onPressOut={() => setIsCadastroPressed(false)}
        >
          <Text
            style={[
              styles.cadastroText,
              isCadastroPressed && { color: '#8BBB0F' },
            ]}
          >
            Cadastre-se
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: -100,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 100,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  academiaText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  highlightText: {
    color: '#A7FF14',
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#A7FF14',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  loginText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cadastroText: {
    color: '#A7FF14',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
