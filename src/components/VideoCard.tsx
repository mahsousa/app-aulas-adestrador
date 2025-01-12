import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { useVideoPlayer, VideoView } from 'expo-video';

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
  const videoRef = React.useRef<VideoRef | null>(null);

  const handleVideoError = (error: any) => {
    console.error("Erro no vídeo: ", error);
  };

  const player = useVideoPlayer(videoUrl, player => {
    player.loop = true;
    //player.play();
  });

  return (
    <View className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <View className="w-full h-48 bg-black">
        {/* <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          className="w-full h-full"
          controls={true}
          paused={true}
          poster={thumbnailUrl}
          resizeMode="cover"
          onError={handleVideoError}
        /> */}
        <VideoView 
          style={styles.video} 
          player={player}
          allowsFullscreen={false}
          allowsPictureInPicture 
          
        />
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
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default VideoCard;
