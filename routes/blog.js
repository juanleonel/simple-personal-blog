const express = require('express');
const router = express.Router();
const BLOGS = require('../dao/blog.dao');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Personal Blog' });
});

router.get('/article/:id', (req, res) => {
  const { id } = req.params;
  const blog = BLOGS.find(item => item.id === Number(id));

  return res.render('article', { blog });
});

// API

router.get('/blogs', (req, res) => {
  return res.json({
    items: BLOGS
  })
})

module.exports = router;
