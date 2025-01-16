import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";

export interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  videoUrl,
  thumbnailUrl,
}) => {
  // const player = useVideoPlayer(videoUrl, player => {
  //   player.loop = true;
  //   //player.play();
  // });

  const [image, setImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Assim que abrir a tela, iniciar a geração do thumbnail
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
    <View className="flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4">
      {/* Thumbnail */}
      <View className="w-1/3 h-24 bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <Image source={{ uri: image }} className="w-full h-full" />
        ) : (
          <Text className="text-center text-gray-500">Carregando...</Text>
        )}
      </View>

      {/* Texto (Título e Descrição) */}
      <View className="flex-1 ml-4 justify-between">
        <Text className="text-lg font-bold text-gray-800">{title}</Text>
        <Text className="text-sm text-gray-600 mt-1">{description}</Text>
      </View>
    </View>
  );
};

export default VideoCard;
