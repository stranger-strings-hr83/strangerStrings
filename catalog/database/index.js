let connection =
  `postgres://postgres:rebase@localhost:5432/catalog` ||
  `${process.env.DATABASE_URL}`;

let knex = require("knex")({
  client: 'pg',
  connection: connection
});

let bookshelf = require('bookshelf')(knex);
let Book = require('bookshelf');

let Genre = bookshelf.Model.extend({
	tableName: 'genre'
});

let Content = bookshelf.Model.extend({
	tableName: 'content'
});

let Movies = bookshelf.Model.extend({
	tableName: 'movies'
});

let Seasons = bookshelf.Model.extend({
	tableName: 'seasons'
});

let Shows = bookshelf.Model.extend({
	tableName: 'shows'
});


// let updateTotalViews = (content_id, callback) => {
// 	// Select from Content by ID
// 	console.log('content_id:', content_id);
// 	return knex('movies')
// 	.where({
// 		content_id: content_id
// 	})
// 	.increment('total_views', 1);
// }



// module.exports.updateTotalViews = updateTotalViews;
module.exports.Genre = Genre;
module.exports.Content = Content;
module.exports.Movies = Movies;
module.exports.Seasons = Seasons;
module.exports.Shows = Shows;
module.exports.knex = knex;

