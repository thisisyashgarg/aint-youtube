import React from "react";
import { VideoData } from "./VideoContainer";

const VideoCard: React.FunctionComponent<VideoData> = ({
  snippet,
  statistics,
}) => {
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className=" m-2 p-3 w-72 overflow-hidden rounded-sm space-y-1">
      <div>
        <img
          alt="video"
          src={thumbnails.medium.url}
          className="rounded-lg w-72"
        />
        <h3 className="font-semibold pt-2 ">{title}</h3>
      </div>

      <div>
        <p className="text-sm">{channelTitle}</p>
        <p className="text-sm">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
