import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from "expo-router";

const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/login.jpg")}
        className="flex-1"
      >
        <View className="flex-1 justify-between p-5">
          <View className="justify-center items-center bg-white bg-opacity-80 p-5 rounded-lg">
          </View>

          <View>
            <View className="flex-row justify-center items-center p-3">
              <TouchableOpacity
                className="bg-white py-3 px-6 rounded-lg w-1/2 mx-2 border" 
                onPress={() => navigation.navigate('signIn'as never)}
              >
                <Text className="text-black text-lg font-bold text-center">
                  Logar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-black py-3 px-6 rounded-lg w-1/2 mx-2"
                onPress={() => navigation.navigate('signUp' as never)}
              >
                <Text className="text-white text-lg font-bold text-center">
                  Cadastrar-se
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-1/2 border-t border-gray-400 mt-3 mx-auto" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginPage;