import Category from '../models/CategoriesModel'

export const CATEGORIES = [
    new Category('1', 'Hot and Spicy', 'white', require('../assets/hot-spicy-food.jpg')),
    new Category('2', 'Quick and easy', 'white', require('../assets/fast-easy.jpg')),
    new Category('3', 'Asia', 'white', require('../assets/asia-food.jpg')),
    new Category('4', 'Mexico', 'white', require('../assets/mexican-food.jpg')),
    new Category('5', 'Protein and no fat', 'white', require('../assets/protein-food.jpg')),
    new Category('6', 'For vegan', 'white', require('../assets/vegan-food.jpg')),
    new Category('7', 'Europe', 'white', require('../assets/eu-food.jpg')),
    new Category('8', 'Dessert', 'white', require('../assets/desserts.jpg')),
];