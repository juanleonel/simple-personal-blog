const express = require('express');
const router = express.Router();
const BLOGS = require('../dao/blog.dao');

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Welcome admin' });
});

router.get('/new', function(req, res, next) {
  res.render('new', {});
});

module.exports = router;
