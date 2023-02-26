import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSLice";
import { useSearchParams } from "react-router-dom";
import { GET_COMMENTS_URL, RELATED_VIDEOS_URL } from "../utils/constants";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { VideoData } from "./VideoContainer";
import { CommentsData } from "./Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // const [relatedVideos, setRelatedVideos] = useState<Array<VideoData>>([]);
  const [comments, setComments] = useState<Array<CommentsData>>([]);
  const videoID = searchParams.get("v");
  const dispatch = useDispatch();

  // console.log(relatedVideos);

  useEffect(() => {
    dispatch(closeMenu());
    getComments();
    // getRelatedVideos();
  }, []);

  async function getComments() {
    const data = await fetch(GET_COMMENTS_URL + videoID);
    const json = await data.json();
    setComments(json.items);
    // setRelatedVideos(json);
  }

  // async function getRelatedVideos() {
  //   const data = await fetch(RELATED_VIDEOS_URL + videoID);
  //   const json = await data.json();
  //   setRelatedVideos(json.items);
  // }

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

        <div className="m-2 w-[500px] space-y-5 mt-6">
          {comments.map((data) => {
            return <Comments {...data} key={data.id} />;
          })}
        </div>
      </div>
      {/* <div>
        {relatedVideos.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard {...video} />
            </Link>
          );
        })}
      </div> */}
    </div>
  );
};

export default WatchPage;
