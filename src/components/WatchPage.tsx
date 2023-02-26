import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSLice";
import { useSearchParams } from "react-router-dom";
import { GET_COMMENTS_URL, VIDEO_DETAILS_FROM_ID } from "../utils/constants";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { VideoData } from "./VideoContainer";
import { CommentsData } from "./Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // const [relatedVideos, setRelatedVideos] = useState<Array<VideoData>>([]);
  const [videoDetails, setVideoDetails] = useState<Array<VideoData>>([]);
  const [comments, setComments] = useState<Array<CommentsData>>([]);
  const videoID = searchParams.get("v");
  const dispatch = useDispatch();

  console.log(videoDetails[0]);

  useEffect(() => {
    dispatch(closeMenu());
    getComments();
    getVideoDetailsFromID();
    // getRelatedVideos();
  }, []);

  async function getComments() {
    const data = await fetch(GET_COMMENTS_URL + videoID);
    const json = await data.json();
    setComments(json.items);
    // setRelatedVideos(json);
  }

  async function getVideoDetailsFromID() {
    const data = await fetch(VIDEO_DETAILS_FROM_ID + videoID);
    const json = await data.json();
    setVideoDetails(json.items);
  }

  // async function getRelatedVideos() {
  //   const data = await fetch(RELATED_VIDEOS_URL + videoID);
  //   const json = await data.json();
  //   setRelatedVideos(json.items);
  // }

  return (
    <div className="flex  ">
      <div className="p-3 m-3 ">
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="w-[900px]">
          <h1 className="text-3xl font-semibold">
            {videoDetails[0].snippet.title}
          </h1>
          {/* <img src={videoDetails[0].snippet} /> */}
          {/* <p className="text-xl">{videoDetails[0].snippet.channelTitle}</p> */}
        </div>

        <div className="m-2 w-[600px] space-y-5 mt-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Comments</h1>
            {comments.map((data) => {
              return <Comments {...data} key={data.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="border-2">Related Videos</div>
    </div>
  );
};

export default WatchPage;
