import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FavoriteMealsScreen = props => {
    return (<View style={styles.screen}>
        <Text>This is FavoriteMealsScreen </Text>
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

export default FavoriteMealsScreen;