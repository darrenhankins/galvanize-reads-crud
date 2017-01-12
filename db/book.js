const knex = require('./connection'); // db connection

module.exports = {

  getAllBooks: function() {
    return knex.select()
    .table('book');
  }

};
