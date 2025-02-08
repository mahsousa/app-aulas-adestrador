import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
};

const Form = ({ showNameField = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 

  const handleSubmit = () => {
    if (showNameField && !name) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      const message = showNameField 
        ? `Dados enviados:\nNome: ${name}\nEmail: ${email}` 
        : `Dados enviados:\nEmail: ${email}`;
      Alert.alert('Sucesso', message);
      navigation.navigate('Home');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl mb-5">{showNameField ? 'Registrar-se' : 'Acessar conta'}</Text>
      {showNameField && (
        <TextInput
          className="bg-white p-4 rounded-lg mb-4 border border-gray-300"
          placeholder="Digite seu Nome"
          value={name}
          onChangeText={setName}
        />
      )}
      
      <TextInput
        className="bg-white p-4 rounded-lg mb-4 border border-gray-300"
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="bg-white p-4 rounded-lg mb-6 border border-gray-300"
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center text-lg font-bold">Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;