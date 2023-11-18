import React from "react";
//CHILD OF POSTLIST

function Post({
  message, user, upVotes, created, deletePost, id
}) {
  console.log('post props', id)
  return (
    <div className="post">
      <h4 className="post-message">{message}</h4>
      <h5 className="post-user">{user}</h5>
      <div className="post-created">{created}</div>
      <div className="delete-button" onClick={() => deletePost(id)}>Delete</div>
      {/* <div className="post-upvotes">Upvotes:{ upVotes}</div> */}
    </div>
  );
}

export default Post;
