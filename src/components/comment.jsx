import React from "react";
import UserInfo from "./userInfo";

const Comment = props => {
  return (
    <div>
      <UserInfo user={props.avatar} />
      <div className="Comment">
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
    </div>
  );
};

export default Comment;
