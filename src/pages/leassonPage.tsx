import React from "react";
import { ScrollView } from "react-native";
import ListThumbnails, { ListThumbnailsProps } from "src/components/ListThumbnails";


const LeassonPage: React.FC = () => {
  const videos: ListThumbnailsProps[] = [
    {
      title: "Aprenda React Native",
      description: "Tutorial completo sobre React Native.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
    {
      title: "React Native Avançado",
      description: "Dicas e truques para desenvolvedores avançados.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
    {
      title: "Introdução ao Expo",
      description: "Como usar Expo para criar aplicativos incríveis.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {videos.map((video, index) => (
        console.log("VDO2", video),
        <ListThumbnails
          key={index}
          title={video.title}
          description={video.description}
          videoUrl={video.videoUrl}
          thumbnailUrl={video.thumbnailUrl}
        />
      ))}
    </ScrollView>
  );
};

export default LeassonPage;
