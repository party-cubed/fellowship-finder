/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';

//CHILD OF APP, PARENT OF POST

function PostList() {
  return (
    <div className="postlist-container">
      <h3>POSTLIST TESTER</h3>
      <Post />
    </div>
  );
}

export default PostList;


