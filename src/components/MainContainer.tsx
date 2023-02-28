import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className={` flex flex-col m-4 mt-20`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
