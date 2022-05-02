import { React } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CategoryItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.category}
            onPress={() => {
                props.navigation.navigate('CategoryMeals', {
                    item: props.item,
                    otherParam: 'anything you want here',
                })
            }}
        >
            <Image
                style={{ resizeMode: 'cover', width: '100%', height: 150, borderRadius: 10 }}
                source={props.item.img} />
            <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'white', borderRadius: 10, borderBottomLeftRadius: 0 }}>
                <Text style={styles.category_text}>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    category: {
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        width: 180,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        marginBottom: 10,
        elevation: 4,
    },

    category_text: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 5,
        color: '#1E3163',
        fontFamily: 'open-sans-bold'
    },
});


export default CategoryItem;