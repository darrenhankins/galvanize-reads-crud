const express = require('express');
const router = express.Router();
const Books = require('../db/books');

router.get('/', function(req, res, next) {
    Books.getAll().then(books => {
      if(books.length > 1) {
          res.json(books);
      } else {
        res.status(400);
        res.json(books);
      }
    });
});


// router.get('/:id', function(req, res, next) {
//   if(!isNaN(req.params.id)) {
//     Books.getOne(req.params.id).then(book => {
//       if(book) {
//         res.json(book);
//       }else {
//         resError(res, 404, 'Book Not Found');
//       }
//     });
//   } else {
//     resError(res, 500, 'Invalid ID');
//   }
// });
//
// router.post('/', function(req, res, next){
//   db.create(req.body).then(function(id){
//     res.redirect('/'+id);
//   })
// })

// router.delete('/:id/delete', function(req, res, next) {
//   if(!isNaN(req.params.id)) {
//     Books.deleteOne(req.params.id).then(book => {
//       if(book) {
//         console.log(res.json(book));
//         res.json(book);
//       }else {
//         resError(res, 404, 'Book Not Found');
//       }
//     });
//   } else {
//     resError(res, 500, 'Invalid ID');
//   }
// });

// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     Books.deleteOne(id)
//         .then(() => {
//             res.json({
//               message: 'deleted'
//             });
//         });
// });

// router.put('/:id/delete', function(req, res, next) {
//   console.log("here");
//   if(!isNaN(req.params.id)) {
//     Books.deleteOne(req.params.id).then(book => {
//       if(book) {
//         console.log(res.json(book));
//         res.json(book);
//       }else {
//         resError(res, 404, 'Book Not Found');
//       }
//     });
//   } else {
//     resError(res, 500, 'Invalid ID');
//   }
// });

module.exports = router;
