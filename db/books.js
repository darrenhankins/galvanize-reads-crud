const knex = require('./connection'); // db connection

module.exports = {

  getAll: function() {
    return knex.select()
    .table('book');
  },

  getOne: function(id) {
    return knex('book')
    .where('id', id)
    .first();
  },

  deleteOne: function(id) {
    return knex('book')
    .where('id', id)
    .del();
  }

  // join
  // getAllAuthors: function() {
  //   return knex('book')
  //   .select(
  //     '',
  //     '',
  //     ''
  //   )
  //   .join('author', 'author.author_id', 'book.id')
  //   .join('book_author', 'book_author.author', '')
  //   .then(books => res.json(books))
  // }

};
