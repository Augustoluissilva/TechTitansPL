import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote @expo/vector-icons instalado
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { app } from '../screens/firebaseConfig';

const ChangePasswordScreen = ({ navigation }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState(''); // E-mail do usuário autenticado
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isPressed, setIsPressed] = useState(false); // Estado para controlar o toque no botão

    const auth = getAuth(app);

    const handleChangePassword = () => {
        const user = auth.currentUser;

        if (user) {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);

            reauthenticateWithCredential(user, credential)
                .then(() => {
                    updatePassword(user, newPassword)
                        .then(() => {
                            setSuccessMessage('Senha alterada com sucesso!');
                            setErrorMessage('');
                            Alert.alert('Sucesso', 'Senha alterada com sucesso!');
                            navigation.navigate('Login'); // Navega de volta para a tela de login
                        })
                        .catch(error => {
                            console.error('Erro ao alterar a senha:', error.message);
                            setErrorMessage('Erro ao alterar a senha. Verifique as informações fornecidas.');
                            setSuccessMessage('');
                        });
                })
                .catch(error => {
                    console.error('Erro de autenticação:', error.message);
                    setErrorMessage('Erro de autenticação. Verifique a senha atual.');
                    setSuccessMessage('');
                });
        } else {
            setErrorMessage('Usuário não autenticado.');
            setSuccessMessage('');
        }
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

            {/* Formulário */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Alterar Senha</Text>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#000"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCurrentPassword}
                    value={currentPassword}
                    placeholder="Senha Atual"
                    placeholderTextColor="#000"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNewPassword}
                    value={newPassword}
                    placeholder="Nova Senha"
                    placeholderTextColor="#000"
                    secureTextEntry
                />

                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed || isPressed ? { backgroundColor: '#8BBB0F' } : null,
                    ]}
                    onPress={handleChangePassword}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                >
                    <Text style={styles.buttonText}>Alterar Senha</Text>
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
        top: 40,
        left: 20,
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
        backgroundColor: '#fff',
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
    errorText: {
        color: 'red',
        marginBottom: 16,
    },
    successText: {
        color: 'green',
        marginBottom: 16,
    },
});

export default ChangePasswordScreen;
