import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import CommentsList from "./CommentsList";
import "./Comments.css";
// import fadeStyles from './fade.module.css';

function Comments() {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <button type="button" onClick={toggleComments}>
        {showComments ? "Hide" : "Show"} comments
      </button>

      <CSSTransition
        in={showComments}
        classNames="fade"
        timeout={250}
        unmountOnExit
      >
        <CommentsList />
      </CSSTransition>
    </>
  );
}

export default Comments;
