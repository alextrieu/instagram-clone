import React from "react";
import AddComment from "./AddComment/AddComment";
import ViewComments from "./ViewComments/ViewComments";
import { Post } from "../../../../types/PostTypes";

type PostCommentsProps = {
  data: Post;
};

const PostComments: React.FC<PostCommentsProps> = ({ data }) => {
  return (
    <div>
      <ViewComments data={data} />
      <AddComment />
    </div>
  );
};

export default PostComments;
