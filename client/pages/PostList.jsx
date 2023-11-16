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
        setAllPosts(postArray);
      })
      .catch((err) => {
        console.error('Failed to get posts to render', err);
      });
  }, []);

  console.log('allPosts', allPosts.data);
  const postDataArray = allPosts.data;
  return (
    <div className="postlist-container">
      <h3>POSTLIST TESTER</h3>
      <div>
        {/* {postDataArray.map((post) => ( */}
        <Post
          message={postDataArray}
        />

        {/* // ))} */}
      </div>
    </div>
  );
}

// export default PostList;


