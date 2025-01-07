import React from "react";
import { View, Text, Image } from "react-native";

interface CardProps {
  data: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <View className="w-full flex flex-col bg-green-100 p-4 rounded-xl">
      <Image
        source={{ uri: data.imageUrl }}
        className="w-full h-40 rounded-lg mb-4"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold">{data.title}</Text>
      <Text className="text-sm text-gray-700">{data.description}</Text>
    </View>
  );
};

export default Card;