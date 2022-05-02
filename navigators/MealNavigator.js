import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Import screen
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import DetailedMealsScreen from '../screens/DetailedMealScreen'
import FavoriteMealsScreen from '../screens/FavoriteMealsScreen'
import FilterScreen from '../screens/FilterScreen'


const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    DetailedMeal: DetailedMealsScreen,
    FavoriteMeals: FavoriteMealsScreen,
},
    {
        initialRouteName: 'Categories',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgb(80, 65, 155)',
            },
            headerTitleStyle: {
                fontSize: 22,
            },
            headerTintColor: 'white'
        }
    });

export default createAppContainer(MealNavigator);