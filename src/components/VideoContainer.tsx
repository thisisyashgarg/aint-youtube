import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

export type VideoData = {
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
  statistics: { viewCount: string; commentCount: string };
  id: string;
};

const VideoContainer = () => {
  const [videos, setVideos] = useState<Array<VideoData>>([]);
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    console.log("api called");
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(await json.items);
  }

  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <VideoCard {...video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
