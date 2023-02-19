import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col m-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
