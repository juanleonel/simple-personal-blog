const express = require('express');
const router = express.Router();

const articles = require('../dao/blog.dao');

// API
router.get('/posts', (req, res) => {
  return res.json({
    items: articles
  });
});

router.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const article = articles.find(item => item.id === Number(id));

  return res.json({
    item: article
  });
});

router.post('/posts/', (req, res) => {
  req.body.id = getId();
  articles.push(req.body);

  return res.json({
    item: req.body
  });
});

router.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const article = articles.find(item => item.id === Number(id));

  article.title = req.body.title;
  article.content = req.body.content;
  article.date = req.body.date;

  return res.json({
    item: article
  });
});

router.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const newArticles = articles.filter(item => item.id !== Number(id));

  return res.json({
    items: newArticles
  });
});

function getId() {
  return articles.length + 1; 
}

module.exports = router;
