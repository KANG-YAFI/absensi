import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api/api';
import { getToken } from '../utils/storage';

export default function RiwayatScreen() {
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const fetchRiwayat = async () => {
      const token = await getToken();
      const res = await api.get('/riwayat', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRiwayat(res.data);
    };
    fetchRiwayat();
  }, []);

  return (
    <FlatList
      data={riwayat}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text>{item.tipe} - {new Date(item.waktu).toLocaleString()}</Text>
      )}
    />
  );
}
