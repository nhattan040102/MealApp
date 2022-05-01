import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryMealsScreen = props => {
    return (<View style={styles.screen}>
        <Text>This is CategoryMealsScreen </Text>
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