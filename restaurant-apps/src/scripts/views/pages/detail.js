import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurantapi-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
// import likeButtonInitiator from '../../utils/like-button-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
              <div id="restaurant" class="restaurant"></div>
              <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAPISource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
