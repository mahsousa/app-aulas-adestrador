import React from "react";
import { ScrollView, View } from "react-native";
import VideoPlay, { VideoPlayProps } from "src/components/VideoPlay";
import ListThumbnails, { ListThumbnailsProps } from "src/components/ListThumbnails";

const VideoPage: React.FC = () => {
  const videos: VideoPlayProps[] = [
    {
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
  ];

  const videosthumb: ListThumbnailsProps[] = [
    {
      title: "Aprenda React Native",
      description: "Tutorial completo sobre React Native.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
    {
      title: "React Native Avançado",
      description: "Dicas e truques para desenvolvedores avançados.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
    {
      title: "Introdução ao Expo",
      description: "Como usar Expo para criar aplicativos incríveis.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {videos.map(
        (video, index) => (
          console.log("VDO2", video),
          (
            <VideoPlay
              key={index}
              videoUrl={video.videoUrl}
              thumbnailUrl={video.thumbnailUrl}
            />
          )
        )
      )}

      <View className="flex-1 bg-gray-100 p-4">
        {videosthumb.map(
          (videosthumb, index) => (
            console.log("VDO2", videosthumb),
            (
              <ListThumbnails
                key={index}
                title={videosthumb.title}
                description={videosthumb.description}
                videoUrl={videosthumb.videoUrl}
                thumbnailUrl={videosthumb.thumbnailUrl}
              />
            )
          )
        )}
      </View>
    </ScrollView>
  );
};

export default VideoPage;
