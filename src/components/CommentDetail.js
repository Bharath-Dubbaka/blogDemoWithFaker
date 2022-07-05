import React from "react";
import faker from "faker";

function CommentDetail({ name, text, date }) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.image()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default CommentDetail;
