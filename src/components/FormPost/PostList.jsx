import React from "react";
import "./PostList.css";

const PostList = () => {
  return (
    <div className="post-list">
      {/* Each post should have the like, comment, and share option */}
      <div className="post">
        <p>User Name</p>
        <p>Post Text</p>
        <div className="post-media">{/* Render the image or video here */}</div>
        <div className="post-actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
