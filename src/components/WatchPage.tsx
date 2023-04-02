import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSLice";
import { useSearchParams } from "react-router-dom";
import {
  GET_COMMENTS_URL,
  RELATED_VIDEOS_URL,
  VIDEO_DETAILS_FROM_ID,
} from "../utils/constants";
import { getRelatedVideos, getVideoDetailsFromID } from "../utils/helper";
import Comments from "./Comments";
import { CommentsData } from "./Comments";
import { getComments } from "../utils/helper";
import RelatedVideos from "./RelatedVideos";
import { VideoData } from "./VideoContainer";

export type RelatedVideosType = {
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
  etag: string;
  id: {
    videoId: string;
  };
};

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState<VideoData>();
  const [comments, setComments] = useState<Array<CommentsData>>([]);
  const [relatedVideos, setRelatedVideos] = useState<Array<RelatedVideosType>>(
    []
  );
  const videoID: string | null = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatch");
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    console.log("use effect ran");
    getVideoDetailsFromID(setVideoDetails, VIDEO_DETAILS_FROM_ID, videoID!);
    getComments(setComments, GET_COMMENTS_URL, videoID);
    getRelatedVideos(setRelatedVideos, RELATED_VIDEOS_URL, videoID);
  }, [videoID]);

  return (
    <div className="flex mt-20 overflow-hidden ">
      <div className="m-5 w-[100vw]">
        <iframe
          className="w-[100%] h-[60vh]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="w-[100%] mt-3">
          <h1 className="text-3xl font-semibold">
            {videoDetails?.snippet?.title}
          </h1>
          <p className="text-xl">{videoDetails?.snippet?.channelTitle}</p>
          <p className="text-m text-gray-500">
            {videoDetails?.statistics?.viewCount} views
          </p>
        </div>

        <div className="m-2 w-[600px] space-y-5 mt-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Comments</h1>
            {comments.map((data) => {
              return <Comments {...data} key={data?.id} />;
            })}
          </div>
        </div>
      </div>

      <div className=" flex flex-col m-1 ">
        <h1 className="text-2xl font-bold pb-2">Suggested Videos</h1>
        {relatedVideos.map((data) => {
          return <RelatedVideos {...data} key={data?.etag} />;
        })}
      </div>
    </div>
  );
};

export default WatchPage;
