// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote @expo/vector-icons instalado
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../screens/firebaseConfig'; 

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isPressed, setIsPressed] = useState(false); // Estado para controlar o toque no botão

    const handleLogin = () => {
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSuccessMessage('Login realizado com sucesso!');
                setErrorMessage('');
                navigation.navigate('Home'); // Ajuste conforme sua navegação
            })
            .catch(() => {
                setErrorMessage('Credenciais inseridas inválidas!');
                setSuccessMessage('');
            });
    };

    return (
        <View style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            {/* Círculos de fundo */}
            <View style={[styles.circle, styles.circle1]} />
            <View style={[styles.circle, styles.circle2]} />

            {/* Logo */}
            <Image 
                source={{ uri: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t39.30808-6/348227636_788477599343412_6211707956625065991_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HhJ06MDw5sMQ7kNvgG4LISh&_nc_ht=scontent.fsjk2-1.fna&oh=00_AYCWKVnOV5MtlhBLM1f6JqMHYS7Dm-c0nqiYtbX33bsUAw&oe=66BC1FA3' }}
                style={styles.logo}
            />

            {/* Formulário */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#000"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Sen"
                    placeholderTextColor="#000"
                    secureTextEntry
                />

                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed || isPressed ? { backgroundColor: '#8BBB0F' } : null, 
                    ]}
                    onPress={handleLogin}
                    onPressIn={() => setIsPressed(true)}  
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('RedefinirSenha')}>
                    <Text style={styles.linkText}>Esqueceu senha?</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.linkText}>Primeiro acesso</Text>
                </Pressable>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: '100%',
    },
    backButton: {
        position: 'absolute',
        top: 40, // ajusta conforme necessário
        left: 20, // ajusta conforme necessário
        zIndex: 10,
        padding: 10,
        color: '#A7FF14',
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
    logo: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.15,
        marginBottom: 20,
        zIndex: 1,
    },
    formContainer: {
        width: '85%',
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 8,
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: '#000',
        backgroundColor:'#fff'
    },
    button: {
        width: '100%',
        height: 45,
        backgroundColor: '#A7FF14',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    linkText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
    },
    successText: {
        color: 'green',
        marginBottom: 16,
    },
});

export default LoginScreen;
