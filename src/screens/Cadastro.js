import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importação de ícones
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { app } from '../screens/firebaseConfig';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkPasswordMatch(text, confirmPassword);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    checkPasswordMatch(password, text);
  };

  const checkPasswordMatch = (pass, confirmPass) => {
    if (pass && confirmPass && pass === confirmPass) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleSignUp = () => {
    if (!isPasswordValid) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    const auth = getAuth(app);
    const db = getFirestore(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Adicionando o usuário à coleção 'users' com o campo 'role'
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          role: 'user', // Defina como 'user' ou 'admin' conforme necessário
        });

        setSuccessMessage('Cadastro realizado com sucesso!');
        setErrorMessage('');
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error.message);
        setErrorMessage('Erro ao cadastrar usuário. Verifique suas informações.');
        setSuccessMessage('');
      });
  };

  return (
    <View style={styles.container}>
      {/* Círculos de fundo */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>

      {/* Logo */}
      <Image 
        source={{ uri: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t39.30808-6/348227636_788477599343412_6211707956625065991_n.png' }}
        style={styles.logo}
      />

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Criar senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry
          onChangeText={handlePasswordChange}
          value={password}
        />

        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#666"
          secureTextEntry
          onChangeText={handleConfirmPasswordChange}
          value={confirmPassword}
        />

        {password && confirmPassword && (
          <Text style={isPasswordValid ? styles.validationText : styles.errorText}>
            {isPasswordValid ? 'As senhas são iguais' : 'As senhas não são iguais'}
          </Text>
        )}

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed || isPressed ? { backgroundColor: '#8BBB0F' } : null,
          ]}
          onPress={handleSignUp}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Possuo Cadastro</Text>
        </Pressable>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    padding: 15,
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#A7FF14',
    opacity: 0.2,
    borderRadius: 100,
  },
  circle1: {
    width: width * 0.6,
    height: width * 0.6,
    top: 0,
    right: 0,
  },
  circle2: {
    width: width * 0.35,
    height: width * 0.35,
    bottom: 10,
    left: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    zIndex: 1,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#FFF',
    fontSize: 14,
  },
  input: {
    width: '100%',
    height: 35,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
    color: '#000',
    backgroundColor: '#fff',
  },
  validationText: {
    alignSelf: 'flex-start',
    color: 'green',
    marginBottom: 8,
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 8,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#A7FF14',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  linkText: {
    color: '#808080',
    marginTop: 10,
    fontSize: 12,
  },
  successText: {
    color: 'green',
    marginTop: 10,
  },
});

export default SignUpScreen;
