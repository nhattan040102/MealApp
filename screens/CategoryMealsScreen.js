import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { MEALS } from '../dummy_data/data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const itemCategory = props.navigation.getParam('item');
    const renderGridItem = (dataItem) => {
        return <MealItem
            item={dataItem.item}
            categoryID={itemCategory.id}
            navigation={props.navigation}
        />;
    }

    return (<View style={styles.screen}>
        <FlatList
            data={MEALS}
            keyExtractor={item => item.id}
            renderItem={renderGridItem}
        />
    </View>
    );
};


CategoryMealsScreen.navigationOptions = navigationData => {
    const itemCategory = navigationData.navigation.getParam('item');
    return ({
        headerTitle: itemCategory.title,
    }
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealsScreen;