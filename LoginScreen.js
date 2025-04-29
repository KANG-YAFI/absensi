import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import api from '../api/api';
import { setToken } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await api.post('/login', { email, password });
      await setToken(res.data.token);
      navigation.replace('Home');
    } catch (err) {
      Alert.alert('Login Gagal', 'Periksa email dan password Anda');
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
      <Button title="Daftar" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
