import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { closeMenu } from "../utils/AppSLice";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { GET_COMMENTS_URL, RELATED_VIDEOS_URL } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [relatedVideos, setRelatedVideos] = useState();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getComments();
  }, []);

  //   async function getRelatedVideos() {
  //     const data = await fetch(RELATED_VIDEOS_URL + searchParams.get("v"));
  //     const json = await data.json();
  //     console.log(json);
  //     // setRelatedVideos(json);
  //   }

  async function getComments() {
    const data = await fetch(GET_COMMENTS_URL);
    const json = await data.json();
    console.log(json);
    // setRelatedVideos(json);
  }

  return (
    <div className="p-3 m-3">
      <iframe
        width="950"
        height="475"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <VideoCard info/> */}
    </div>
  );
};

export default WatchPage;
