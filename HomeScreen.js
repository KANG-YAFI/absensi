import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import api from '../api/api';
import { getToken } from '../utils/storage';

export default function HomeScreen({ navigation }) {
  const [status, setStatus] = useState(null);

  const absen = async (tipe) => {
    const token = await getToken();
    try {
      await api.post('/absen', { tipe }, { headers: { Authorization: `Bearer ${token}` } });
      Alert.alert('Sukses', `Absen ${tipe} berhasil`);
    } catch {
      Alert.alert('Gagal', 'Tidak bisa absen');
    }
  };

  return (
    <View>
      <Button title="Absen Masuk" onPress={() => absen('masuk')} />
      <Button title="Absen Keluar" onPress={() => absen('keluar')} />
      <Button title="Riwayat Absensi" onPress={() => navigation.navigate('Riwayat')} />
    </View>
  );
}
