import Category from '../models/CategoriesModel'
import Meal from '../models/MealsModel';

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

export const MEALS = [
    //Hot and spicy
    new Meal(1, 1, 'Hot & Spicy Francheesie', 'Easy', ' Hot & Spicy Francheesie is a wiener gone wild. This spicy recipe gets its heat from the addition of hot pepper sauce. Try adding additional hot peppers or other spices if the base recipe does not quite stoke your fires. This spicy food pairs well with fresh fruit.', 120),
    new Meal(2, 1, 'Chorizo Potato & Green Chile Omelet', 'Intermediate', ' Start your day with spice thanks to the Chorizo, Potato & Green Chile Omelet. You don’t need to fuss with flipping and forming a perfect omelet, because this version lets you bake everything to a perfect consistency. Enjoy it alongside fresh fruit and a cold glass of milk to round out the meal and cool your mouth', 220),
    new Meal(3, 1, 'Spicy Jalapeño & Bacon Flatbread', 'Difficult', ' Feel the burn, and do it with bacon. Our Spicy Jalapeño Bacon Flatbread recipe features a video to guide you step-by-step through the process of putting together this spicy pizza. PHILADELPHIA Spicy Jalapeño Cream Cheese Spread does the heavy lifting to give this dish its spice. If you are still craving more blaze, consider adding sliced jalapenos. For a topping on the sweeter side, substitute the cherry tomatoes the recipe calls for with dried canned pineapple tidbits.', 160),
    new Meal(4, 1, 'Spicy Grilled Salmon Kabobs', 'Easy', 'If you thought it was a bit fishy that our list was lacking seafood, worry no further. Our Spicy Grilled Salmon Kabobs have you covered. Perfect for backyard barbeques, these deceivingly simple skewers gets their spice from a marinade of chili powder and cayenne pepper. Try substituting tuna, scallops or shrimp for the salmon. ', 100),

];