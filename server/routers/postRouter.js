const express = require('express');
// const router = express.Router();
const { Router } = require('express');
const { Posts, User } = require('../db/models.js'); //NOTE MAY HAVE TO MATCH other routers
//const { Post } = require('../db/models')

const Post = Router();

Post.get('/all', async (req, res) => {
  try {
    const posts = await Posts.findAll({
      order: [
        ['id', 'DESC']
      ],
      include: {
        model: User
      }
    });
    //console.log('PostGet', posts);
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving posts' });
  }
});


Post.post('/add', (req, res) => {
  const post = req.body;
  //console.log('post.post', post);
  Posts.create({
    userId: post.userId,
    post: post.post,
    upVotes: post.upVotes
  })
    .then((data) => {
      //console.log(data);
      res.status(201)
        .send(data);
    })
    .catch((err) => {
      console.error('Failed to Create post', err);
      res.sendStatus(500);
    });
});

module.exports = Post;
