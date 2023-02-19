import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSLice";
import { useSearchParams } from "react-router-dom";
import { GET_COMMENTS_URL, RELATED_VIDEOS_URL } from "../utils/constants";
import Comments from "./Comments";

export type CommentsData = {
  snippet: {
    topLevelComment: {
      snippet: {
        textOriginal: string;
      };
    };
  };
  id: string;
};

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [relatedVideos, setRelatedVideos] = useState();
  const [comments, setComments] = useState<Array<CommentsData>>([]);
  const videoID = searchParams.get("v");
  const dispatch = useDispatch();

  console.log(comments);

  useEffect(() => {
    dispatch(closeMenu());
    getComments();
  }, []);

  async function getComments() {
    const data = await fetch(GET_COMMENTS_URL + videoID);
    const json = await data.json();
    setComments(json.items);
    // setRelatedVideos(json);
  }

  return (
    <div className="flex ">
      <div className="p-3 m-3 ">
        <iframe
          width="950"
          height="475"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="m-2 w-96">
          {comments.map((data) => {
            return <Comments {...data} />;
          })}
        </div>
      </div>
      <div>Related Videos</div>
    </div>
  );
};

export default WatchPage;
