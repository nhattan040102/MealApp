import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryMealsScreen = props => {
    return (<View style={styles.screen}>
        <Text>This is CategoryMealsScreen </Text>
        <TouchableOpacity
            onPress={() => { props.navigation.navigate('DetailedMeal') }}
            style={{ borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10, marginTop: 10 }}>
            <Text>Go to meals</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealsScreen;