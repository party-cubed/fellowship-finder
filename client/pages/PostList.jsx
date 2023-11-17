/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import { UserContext } from '../components/UserProvider';

//CHILD OF APP, PARENT OF POST

function PostList() {
  const [allPosts, setAllPosts] = useState([]);
  //const [user, setUser] = useState([]);
  const { activeUser, setActiveUser } = useContext(UserContext);
  const [newPost, setNewPost] = useState([]);
  const [txt, setTxt] = useState([]);

  const displayMsg = (event) => {
    event.preventDefault();
    setNewPost(txt);
    setTxt('');
  };

  const getAllPosts = () => {
    axios.get('/post/all')
      .then((postArray) => {
        //console.log('postArray', postArray);
        setAllPosts(postArray.data);
      })
      .catch((err) => {
        console.error('Failed to get posts to render', err);
      });
  };

  const newPosting = () => {
    axios.post('/post/add', {
      userId: activeUser.id,
      post: newPost,
      upVotes: 0
    })
      .then(() => {
        getAllPosts();

        //console.log('Post Success');
      })
      .catch((err) => {
        console.error('Failed to newPosting', err);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  //TODO: add enter button functionality Clear input field on submit ADD EDIT AND DELETE FEATURES

  //const {post} = allPosts[0];
  //console.log('active user', activeUser);
  console.log('allPosts', allPosts);
  return (
    <div className="postlist-container">
      <div className="postlist">
        <h3 className="post-header">Post your Requests</h3>
        <input
          type="text"
          name="username"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={newPosting}>Submit</button>
        <div>
          {allPosts.map((post) => (
            <Post
              message={post.post}
              key={post.id}
              user={post.User.username}
              upVotes={post.upVotes}
              created={post.createdAt}
            />

          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;


