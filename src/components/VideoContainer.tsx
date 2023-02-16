import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }
  return (
    <div className="p-4">
      <div>
        <h1>Trending</h1>
        <VideoCard info={videos[0]} />
      </div>

      <div>
        <h1>Music</h1>
      </div>

      <div>
        <h1>Podcasts</h1>
      </div>
    </div>
  );
};

export default VideoContainer;
