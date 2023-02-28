import React from "react";

export type CommentsData = {
  snippet: {
    topLevelComment: {
      snippet: {
        textOriginal: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
      };
    };
  };
  id: string;
};

const Comments: React.FunctionComponent<CommentsData> = ({ snippet }) => {
  const { authorDisplayName, authorProfileImageUrl, textOriginal } =
    snippet?.topLevelComment?.snippet;

  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex items-center space-x-2">
        <img className="rounded-full w-10" src={authorProfileImageUrl} />
        <p className="font-bold">{authorDisplayName}</p>
      </div>

      <p className="text-gray-700">{textOriginal}</p>
    </div>
  );
};

export default Comments;
