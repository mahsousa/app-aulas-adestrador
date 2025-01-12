import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { useVideoPlayer, VideoView } from 'expo-video';
import * as VideoThumbnails from 'expo-video-thumbnails';

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
    <View className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <View className="w-full h-48 bg-black">
      { !image && 
        <Text className="text-white text-center text-2xl">Carregando...</Text>
      }
        { image && 
          <Image source={{ uri: image }} style={styles.image} />
        }
          {/* <VideoView 
            style={styles.video} 
            player={player}
            allowsFullscreen={false}
            allowsPictureInPicture 
          /> */}
      </View>

      <View className="p-4">
        <Text className="text-lg font-bold text-gray-800 mb-2">{title}</Text>
        <Text className="text-sm text-gray-600 mb-4">{description}</Text>

        <View className="flex-row justify-between">
          <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-lg">
            <Text className="text-white font-semibold">Assistir</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-blue-500 py-2 px-4 rounded-lg">
            <Text className="text-blue-500 font-semibold">Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default VideoCard;
