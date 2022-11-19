import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" />
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Name</h4>
        <p>${restaurant.name}</p>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address} minutes</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant__overview">
        <h3>Overview</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__overview">
        <h3>Categories</h3>
        <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
        <h3>Foods</h3>
        <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
        <h3>Drinks</h3>
        <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
        <h3>Review</h3>
        <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <article class="card-item">
        <img class="card-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" width="100%" height="250" alt="gambar restoran indonesia">
        <p class="card-item__badge">${restaurant.city}</p>
        <div class="card-item__content">
            <p class="card-item__rating">Rating ${restaurant.rating}</p>
            <h2 class="card-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
            <p class="card-item__description">${restaurant.description}</p>
        </div>
        </article>
`;

const createLikeMovieButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeMovieButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
};
