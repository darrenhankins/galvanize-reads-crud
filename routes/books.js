const express = require('express');
const router = express.Router();
const Book = require('../db/book');


/* GET users listing. */
router.get('/', function(req, res, next) {
    Book.getAllBooks().then(books => {
      if(books.length > 1) {
          res.json(books);
          // console.log(res.json(books));
      } else {
        res.status(400);
        res.json(books);
      }
    });
});

module.exports = router;
