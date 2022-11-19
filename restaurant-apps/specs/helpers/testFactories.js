// // import likeButtonInitiator from "../../src/scripts/utils/like-button-presenter";
// // import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

// import likeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
// import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

// const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
//   await likeButtonInitiator.init({
//     likeButtonContainer: document.querySelector('#likeButtonContainer'),
//     favoriteRestaurants: FavoriteRestaurantIdb,
//     restaurant,
//   });
// };

// export { createLikeButtonPresenterWithRestaurant };


import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
 
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};
 
export { createLikeButtonPresenterWithRestaurant };