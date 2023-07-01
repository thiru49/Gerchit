import images from './images';

const indianVegFoods = [
  {
    title: 'Paneer Tikka',
    price: '₹150',
    tags: 'Indian | Vegetarian',
  },
  {
    title: 'Vegetable Biryani',
    price: '₹200',
    tags: 'Indian | Vegetarian',
  },
  {
    title: 'Idli',
    price: '₹40',
    tags: 'Tamil Nadu | Vegetarian',
  },
  {
    title: 'Dosa',
    price: '₹50',
    tags: 'Tamil Nadu | Vegetarian',
  },
  {
    title: 'Pongal',
    price: '₹60',
    tags: 'Tamil Nadu | Vegetarian',
  },
];

const indianNonVegFoods = [
  {
    title: 'Butter Chicken',
    price: '₹250',
    tags: 'Indian | Non-Vegetarian',
  },
  {
    title: 'Chicken Biryani',
    price: '₹300',
    tags: 'Indian | Non-Vegetarian',
  },
  {
    title: 'Fish Curry',
    price: '₹220',
    tags: 'Indian | Non-Vegetarian',
  },
  {
    title: 'Mutton Rogan Josh',
    price: '₹280',
    tags: 'Indian | Non-Vegetarian',
  },
  {
    title: 'Tandoori Chicken',
    price: '₹230',
    tags: 'Indian | Non-Vegetarian',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Indian Restaurant',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Excellence in Indian Cuisine',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Restaurant of the Year',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Authentic Indian Flavors',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const data = {
  indianVegFoods,
  indianNonVegFoods,
  awards,
};

export default data;
