import React from "react";
import Button from "./Button";

const buttonNameList: string[] = [
  "All",
  "Gaming",
  "Technology",
  "Sci-Fi",
  "Trending",
];

const ButtonList = () => {
  return (
    <div className="flex space-x-3 p-4 flex-wrap">
      {buttonNameList.map((topic, index) => {
        return <Button name={topic} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
