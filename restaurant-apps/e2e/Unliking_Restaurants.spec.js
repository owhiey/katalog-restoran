const assert = require('assert');

Feature('Unliking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({I}) => {
  I.dontSeeElement('.card-item');
});

Scenario('unliking one restaurant', async ({I}) => {
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
  I.waitForElement('.card-item');
  I.seeElement('.card-item');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.card-item__title a');

  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantsTitles);

  I.seeElement('.card-item__title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.card-item');
});
