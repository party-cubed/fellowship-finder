/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

//CHILD OF APP, PARENT OF POST

function PostList() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get('/post/all')
      .then((postArray) => {
        console.log('postArray', postArray);
        setAllPosts(postArray.data);
      })
      .catch((err) => {
        console.error('Failed to get posts to render', err);
      });
  }, []);

  //const {post} = allPosts[0];
  console.log('allPosts', allPosts);
  return (
    <div className="postlist-container">
      <div className="postlist">
        <h3 className="post-header">Post your Requests</h3>
        <div>
          {allPosts.map((post) => (
            <Post
              message={post.post}
              key={post.id}
              user={post.User.username}
              upVotes={post.upVotes}
            />

          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;


