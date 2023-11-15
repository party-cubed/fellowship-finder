const express = require('express');
// const router = express.Router();
const { Router } = require('express');
const { Post: Posts } = require('../db/models.js'); //NOTE MAY HAVE TO MATCH other routers
//const { Post } = require('../db/models')

const Post = Router();

Post.get('/all', async (req, res)) {
  
}