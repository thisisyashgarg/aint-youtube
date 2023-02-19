import React from "react";

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

const Comments: React.FunctionComponent<CommentsData> = ({ snippet }) => {
  return (
    <div>
      <img />
      <p>Name</p>
      <p>{snippet.topLevelComment.snippet.textOriginal}</p>
    </div>
  );
};

export default Comments;
