import { Link } from "react-router-dom";
import { RelatedVideosType } from "./WatchPage";

const RelatedVideos: React.FunctionComponent<RelatedVideosType> = ({
  id,
  snippet,
}) => {
  return (
    <Link to={"/watch?v=" + id?.videoId} className="flex space-x-2 m-2 ">
      <img
        alt="thumbnail"
        className=" self-center rounded-md w-40	"
        src={snippet?.thumbnails?.medium?.url}
      />
      <div className="flex flex-col justify-around ">
        <h1 className="text-base font-semibold leading-4">{snippet?.title}</h1>
        <p>{snippet?.channelTitle}</p>
      </div>
    </Link>
  );
};

export default RelatedVideos;
