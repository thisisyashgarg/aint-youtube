const VideoCard = ({ info }) => {
  const { snippets, statistics } = info;
  const { title, thumbnails, channelTitle } = snippets;
  return (
    <div>
      <img alt="video" src={thumbnails.medium.url} />
    </div>
  );
};

export default VideoCard;
