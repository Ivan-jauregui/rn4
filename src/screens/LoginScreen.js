    import React, { useState } from 'react';
    import { View, Text, TextInput, Button, Alert } from 'react-native';
    import axios from 'axios';
    import AsyncStorage from '@react-native-async-storage/async-storage';

    const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
        const response = await axios.post('http://10.0.2.2:3000/api/usuarios/login', {
            email,
            password,
        });

        const { token } = response.data;
        await AsyncStorage.setItem('userToken', token);  // Guardar el token en AsyncStorage
        Alert.alert('Inicio de sesión exitoso', 'Bienvenido!');
        navigation.navigate('HomeScreen');  // Redirigir a la pantalla principal
        } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Inicio de Sesión</Text>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
        />
        <TextInput
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 8 }}
        />
        <Button title="Iniciar sesión"  onPress={() => navigation.navigate('Home')} />
        <Text style={{ marginTop: 20 }}>
            ¿No tienes una cuenta?{' '}
            <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Register')}>
            Regístrate
            </Text>
        </Text>
        </View>
    );
    };

    export default LoginScreen;
