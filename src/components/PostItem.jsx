import React from "react";
import MyButton from "./UI/button/MyButton";
import { useHistory } from "react-router-dom";

const PostItem = (props) => {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => router.push(`/posts/`)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
