import React from "react";
//CHILD OF POSTLIST

function Post({ message, user, upVotes }) {
  //console.log('post props', props)
  return (
    <div className="post">
      <h4 className="post-message">{message}</h4>
      <div className="post-user">{user}</div>
      {/* <div className="post-upvotes">Upvotes:{ upVotes}</div> */}
    </div>
  );
}

export default Post;
