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
    new Meal(1, 1, 'Hot & Spicy Francheesie', 'Easy', ' Hot & Spicy Francheesie is a wiener gone wild. This spicy recipe gets its heat from the addition of hot pepper sauce. Try adding additional hot peppers or other spices if the base recipe does not quite stoke your fires. This spicy food pairs well with fresh fruit.', 120, require('../assets/hot-spicy-francheesie-118668-580x250.jpg')),
    new Meal(2, 1, 'Chorizo Potato & Green Chile Omelet', 'Intermediate', ' Start your day with spice thanks to the Chorizo, Potato & Green Chile Omelet. You don’t need to fuss with flipping and forming a perfect omelet, because this version lets you bake everything to a perfect consistency. Enjoy it alongside fresh fruit and a cold glass of milk to round out the meal and cool your mouth', 220, require('../assets/chorizo-potato-green-chile-omelet-126197-580x250.jpg')),
];

// new Meal(3, 1, 'Spicy Jalapeño & Bacon Flatbread', 'Difficult', ' Feel the burn, and do it with bacon. Our Spicy Jalapeño Bacon Flatbread recipe features a video to guide you step-by-step through the process of putting together this spicy pizza. PHILADELPHIA Spicy Jalapeño Cream Cheese Spread does the heavy lifting to give this dish its spice. If you are still craving more blaze, consider adding sliced jalapenos. For a topping on the sweeter side, substitute the cherry tomatoes the recipe calls for with dried canned pineapple tidbits.', 160),
    // new Meal(4, 1, 'Spicy Grilled Salmon Kabobs', 'Easy', 'If you thought it was a bit fishy that our list was lacking seafood, worry no further. Our Spicy Grilled Salmon Kabobs have you covered. Perfect for backyard barbeques, these deceivingly simple skewers gets their spice from a marinade of chili powder and cayenne pepper. Try substituting tuna, scallops or shrimp for the salmon. ', 100),

    // //Asian food
    // new Meal(11, 3, 'Jajangmyeon', 'Easy', ' Jajangmyeon refers to a dish of thick, handmade (or machine-pulled) wheat noodles topped with a heavy sauce made from fried chunjang (sweet bean sauce), soy sauce, diced pork, and vegetables. It dates back to the early 20th century, to a Korean-Chinese restaurant in Incheon’s Chinatown that now functions as a Jajangmyeon museum.', 165),
    // new Meal(12, 3, 'Yum Cha', 'Easy', 'Traditional yum cha is a communal meal featuring bamboo steamers filled with a collection of steamed, pan-fried, and deep-fried dim sum dishes. They’d be piled high on push carts that would make their way from table to table.', 130),
    // new Meal(13, 3, 'Bun Bo in Hue', 'Intermediate', 'As its name suggests, bun bo hue is a Vietnamese noodle soup that’s originally from Hue in central Vietnam, where it’s known simply as bun bo. It’s made with rice vermicelli, thin slices of beef, and hefty chunks of beef shank.', 146),
    // new Meal(14, 3, 'Chili Crab', 'Difficult', 'Chili crab is prepared by stir-frying crabs, preferably mud crabs, in a tomato- and chili-based sauce. Egg is often used to thicken the sauce which you can mop up with a side of fried mantou bread.', 110),
    // new Meal(15, 3, 'Durian Cendol', 'Easy', 'Cendol refers to a popular dessert made with shaved ice, coconut milk, jelly noodles, and palm sugar. It’s usually topped with a mix of ingredients like red beans, glutinous rice, grass jelly, and creamed corn. I like to think of it as the Malaysian / Indonesian version of Filipino halo-halo.', 220),