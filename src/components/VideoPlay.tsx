import React, { useState } from "react";
import { View, TouchableOpacity, Image, Button } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import * as VideoThumbnails from "expo-video-thumbnails";

export interface VideoPlayProps {
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoPlay: React.FC<VideoPlayProps> = ({ videoUrl }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = true;
  });

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(videoUrl, {
        time: 5000, 
      });
      setThumbnail(uri);
    } catch (error) {
      console.warn("Erro ao gerar thumbnail:", error);
    }
  };

  React.useEffect(() => {
    generateThumbnail();
  }, []);

  return (
    <View className="bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4">
      {showVideo ? (
        <>
          <VideoView
            style={{ width: "100%", height: 200 }}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
          <Button
            title={player.playing ? "Pausar" : "Reproduzir"}
            onPress={() => {
              if (player.playing) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </>
      ) : (
        <TouchableOpacity
          onPress={() => setShowVideo(true)}
          className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden"
        >
          {thumbnail ? (
            <Image source={{ uri: thumbnail }} className="w-full h-full" />
          ) : (
            <View className="flex-1 justify-center items-center">
              <Button title="Carregando..." disabled />
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoPlay;
