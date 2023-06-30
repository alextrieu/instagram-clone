import React from "react";
import AddComment from "./AddComment/AddComment";
import ViewComments from "./ViewComments/ViewComments";

const PostComments: React.FC = () => {
  return (
    <div>
      <ViewComments />
      <AddComment />
    </div>
  );
};

export default PostComments;
