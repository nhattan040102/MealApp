import { React } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

let dv_width = Dimensions.get('window').width;

const MealItem = (props) => {
    if (props.item.categoryID == props.categoryID) {
        return (
            <TouchableOpacity style={styles.meal}
                onPress={() => {
                    props.navigation.navigate('DetailedMeal')
                }}>
                <ImageBackground
                    source={props.item.img}

                    style={{
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        borderRadius: 10,
                        overflow: 'hidden'
                    }}

                >
                    <View style={styles.title}>
                        <Text style={styles.title_text}> {props.item.mealName}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, backgroundColor: 'white', borderRadius: 10, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, padding: 5 }}>
                        <Text>Difficulty: {props.item.complexity} |  </Text>
                        <Text>Calories: {props.item.calories} </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity >
        );
    }
    else {
        return (<View></View>);
    }
}
const styles = StyleSheet.create({
    meal: {
        marginVertical: 20,
        borderRadius: 10,
        width: dv_width * 0.95,
        height: 200,
    },

    title: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000c0",
    },

    title_text: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'open-sans'
    },

    meal_text: {

    },
});


export default MealItem;