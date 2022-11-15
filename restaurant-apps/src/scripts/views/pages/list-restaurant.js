import RestaurantAPISource from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
            <div class="content">
              <h2 class="content__heading">List Restaurant Page</h2>
              <div id="restaurants" class="restaurants">
              </div>
            </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.listRestaurant();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
