// Feature('Liking Restaurants');

// Scenario('test something', ({ I }) => {

// });

const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({I}) => {
  I.dontSeeElement('.card-item');
});

Scenario('liking one restaurant', async ({I}) => {
  I.dontSeeElement('.card-item');
  I.amOnPage('/');
  I.waitForElement('.card-item');
  I.seeElement('.card-item__title a');

  const firstRestaurant = locate('.card-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-item');
  const likedRestaurantTitle = await I.grabTextFrom('.card-item__title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
