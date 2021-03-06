const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'recipe_test',
  },
});

const db = require('bookshelf')(knex);

// Table Schemas

db.knex.schema.hasTable('Users').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('Users', (user) => {
      user.increments('id').primary();
      user.string('googleId');
      user.string('username');
      user.string('profileImageUrl');
      user.string('intolerances').defaultTo('none');
      user.string('zipcode').defaultTo('No Zip');
      user.timestamps();
    })
      .then(table => console.log('Created Table: ', table));
  }
});

db.knex.schema.hasTable('Businesses').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('Businesses', (business) => {
      business.increments('id').primary();
      business.string('name');
      business.string('imgUrl', 100);
      business.string('category', 50);
      business.float('rating');
      business.string('price');
      business.string('address');
      business.string('latitude');
      business.string('longitude');
      business.string('phone');
      business.integer('distance');
      business.timestamps();
    })
      .then(table => console.log('Created Table: ', table));
  }
});

db.knex.schema.hasTable('Events').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('Events', (event) => {
      event.increments('id').primary();
      event.string('name');
      event.dateTime('eventDate');
      event.integer('user_id');
      event.integer('business_id');
      event.string('description');
      event.timestamps();
    })
      .then(table => console.log('Created Table: ', table));
  }
});

db.knex.schema.hasTable('LocalFavorites').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('LocalFavorites', (favorite) => {
      favorite.increments('id').primary();
      favorite.string('zipcode');
      favorite.integer('Italian').defaultTo(0);
      favorite.integer('Chinese').defaultTo(0);
      favorite.integer('Mexican').defaultTo(0);
      favorite.integer('Indian').defaultTo(0);
      favorite.integer('Thai').defaultTo(0);
      favorite.integer('American').defaultTo(0);
      favorite.integer('Japanese').defaultTo(0);
      favorite.integer('Mediterranean').defaultTo(0);
      favorite.integer('French').defaultTo(0);
      favorite.integer('Korean').defaultTo(0);
      favorite.timestamps();
    })
      .then(table => console.log('Created Table: ', table));
  }
});

db.knex.schema.hasTable('Recipes').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('Recipes', (recipe) => {
      recipe.increments('id').primary();
      recipe.integer('yummly_id');
      recipe.integer('likes');
      recipe.timestamps();
    })
      .then(table => console.log('Created Table: ', table));
  }
});


// ALTER TABLE `Events` ADD FOREIGN KEY (user_id) REFERENCES `User` (`id`);
// ALTER TABLE `Events` ADD FOREIGN KEY (business_id) REFERENCES `Businesses` (`id`);
// Schemas above
module.exports = db;
