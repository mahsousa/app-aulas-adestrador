import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

type RootStackParamList = {
  navigate(arg0: string): unknown;
  videopage: undefined;
};

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  videoUrl,
  thumbnailUrl,
}) => {
  const navigation = useNavigation<RootStackParamList>();

  const handlePress = () => {
    navigation.navigate('videopage');
  };

  const [image, setImage] = useState<string | null>(null);
  
  useEffect(() => {
    generateThumbnail();
  }, []);

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        videoUrl,
        {
          time: 15000,
        }
      );
      setImage(uri);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
    <View className="flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4">
      <View className="w-1/3 h-24 bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <Image source={{ uri: image }} className="w-full h-full" />
        ) : (
          <Text className="text-center text-gray-500">Carregando...</Text>
        )}
      </View>
      <View className="flex-1 ml-4 justify-between">
        <Text className="text-lg font-bold text-gray-800">{title}</Text>
        <Text className="text-sm text-gray-600 mt-1">{description}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
