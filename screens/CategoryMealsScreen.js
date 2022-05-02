import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

const CategoryMealsScreen = props => {
    const itemCategory = props.navigation.getParam('item');
    return (<View style={styles.screen}>
        <Text>This is {itemCategory.title} </Text>
        <TouchableOpacity
            onPress={() => { props.navigation.navigate('DetailedMeal') }}
            style={{ borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10, marginTop: 10 }}>
            <Text>Go to meals</Text>
        </TouchableOpacity>
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