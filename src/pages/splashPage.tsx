import React, { useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from "expo-router";

type RootStackParamList = {
  Splash: undefined;
  InicialPage: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export const SplashPage: React.FC = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      //navigation.navigate('Home', { screen: 'stack' });
      navigation.navigate('Lesson');
      // navigation.navigate('Home', {
      //   screen: 'Settings',
      //   params: {
      //     screen: 'Sound',
      //     params: {
      //       screen: 'Media',
      //     },
      //   },
      // });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 flex-col w-full">
      <ImageBackground
        source={require("../assets/images/bg-inicial.jpg")}
        className="flex-[0.7] justify-center items-center"
        resizeMode="stretch"
      >
        <View className="justify-center items-center">
          <LottieView
            source={require("../assets/animations/animacao.json")}
            autoPlay
            loop
            style={{ width: 400, height: 400 }}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
      <View className="flex-[0.3] justify-center items-center bg-white">
        <View>
          <Text className="text-20 font-serif font-semibold text-center">KEEP CALMING DOG</Text>
          <Text className="text-20 font-serif text-center">APP</Text>
        </View>
        <LottieView
          source={require("../assets/animations/loading.json")}
          autoPlay
          loop
          style={{ width: 50, height: 50 }}
          resizeMode="cover"
        />
        <Text className="px-5 font-18 font-semibold text-gray-800 text-center">
          Lembre-se de treinar sempre em um {"\n"} ambiente seguro para seu cão.
        </Text>
      </View>
    </View>
  );
}
