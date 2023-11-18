//CHILD OF POSTLIST
import React, { useState, useEffect, useContext } from 'react';

function Post({
  message, user, upVotes, created, deletePost, id, editPost
}) {
  const [formInput, setFormInput] = useState('');
  //console.log('post props', id)
  return (
    <div className="post">
      <h4 className="post-message">{message}</h4>
      <h5 className="post-user">{user}</h5>
      <div className="post-created">{created}</div>
      <div className="edit-post" onClick={() => editPost(id, formInput)}>Edit</div>
      <input
        type="text"
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
      />
      <div className="delete-button" onClick={() => deletePost(id)}>Delete</div>
      {/* <div className="post-upvotes">Upvotes:{ upVotes}</div> */}
    </div>
  );
}

export default Post;
