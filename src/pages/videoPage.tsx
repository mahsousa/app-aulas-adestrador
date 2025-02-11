import React from "react";
import { ScrollView } from "react-native";
import VideoPlay, { VideoPlayProps } from "src/components/VideoPlay";


const VideoPage: React.FC = () => {
  const videos: VideoPlayProps[] = [
    {
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: "https://dummyimage.com/400x200/ccc/000&text=Thumbnail",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {videos.map((video, index) => (
        console.log("VDO2", video),
        <VideoPlay
          key={index}
          videoUrl={video.videoUrl}
          thumbnailUrl={video.thumbnailUrl}
        />
      ))}
    </ScrollView>
  );
};

export default VideoPage;
