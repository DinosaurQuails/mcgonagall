const db = require('./schema');
const Users = require('./collections/users');
const User = require('./models/user');
const Businesses = require('./collections/businesses');
const Business = require('./models/business');
const Events = require('./collections/events');
const Event = require('./models/event');
const Favorites = require('./collections/favorites');
const Favorite = require('./models/favorite');
const Recipes = require('./collections/recipes');
const Recipe = require('./models/recipe');

// Save to table functionality
const saveUser = user =>
  new Promise(function (resolve, reject) {
    new User({ googleId: user.googleId }).fetch()
    .then(found => (found ? reject() : Users.create(user).then(resolve)));
});

const saveBusiness = business =>
  new Promise(function(resolve, reject) {
    new Business({ name: business.name }).fetch()
    .then(found => (found ? reject() : Businesses.create(business).then(resolve)));
});

const saveEvent = event =>
  new Promise(function(resolve, reject) {
    new Event({ name: event.name }).fetch()
    .then(found => (found ? reject() : Events.create(event).then(resolve)));
});

const saveFavorite = favorite =>
  new Promise(function(resolve, reject) {
    new Favorite({ zipcode: favorite.zipcode }).fetch()
    .then(found => (found ? reject() : Favorites.create(favorite).then(resolve)));
});

//* TODO: Create Recipe fetch for grocery list.  

const updateFavorite = favorite => 
  new Promise((resolve, reject) => {
    new Favorite({ zipcode: favorite.zipcode }).fetch()
      .then((found => {
        console.log(found.attributes)
        if (found) {
          resolve
        } else {
          reject();
        }
      }))
});
//  const saveRecipe = recipe =>
//  new Promise(function(resolve, reject) {
// new Recipe({ yummly_id: recipe.id }).fetch()
// .then(found => (found ? reject() : Recipes.create(recipe).then(resolve)));
// });
// Retrieve functionality

const getUser = user =>
  new Promise(function(resolve, reject) {
    new User({ googleId: user.googleId }).fetch()
    .then(found => resolve(found.attributes));
});

const getBusiness = business =>
  new Promise(function(resolve, reject) {
    new Business({ name: business.name }).fetch()
    .then(found => resolve(found.attributes));
});

//! Consider updating function below. When an event is found, we want to send back
//! the owner info, as well as the business info. Meaning, when we find the event, we should
//! fetch the business and the user and attach them together in our resolve.
const getEvent = event =>
  new Promise(function(resolve, reject) {
    new Event({ name: event.name }).fetch()
    .then(found => resolve(found.attributes));
});

const getFavorite = favorite =>
  new Promise(function(resolve, reject) {
    new Favorite({ zipcode: favorite.zipcode }).fetch()
    .then(found => {
      console.log(found);
      resolve(found.attributes)});
});

// Update table functionality

module.exports.saveUser = saveUser;
module.exports.saveBusiness = saveBusiness;
module.exports.saveEvent = saveEvent;
module.exports.saveFavorite = saveFavorite;
module.exports.updateFavorite = updateFavorite;
module.exports.getUser = getUser;
module.exports.getBusiness = getBusiness;
module.exports.getEvent = getEvent;
module.exports.getFavorite = getFavorite;
