import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Touchable } from 'react-native-web';

import { CATEGORIES } from '../dummy_data/data'

const renderGridItem = (ItemData) => {

    return (
        <TouchableOpacity style={styles.category}>
            <Image
                style={{ resizeMode: 'cover', width: '100%', height: 150, borderRadius: 10 }}
                source={ItemData.item.img} />
            <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'white', borderRadius: 10, borderBottomLeftRadius: 0 }}>
                <Text style={styles.category_text}>{ItemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const CategoriesScreen = props => {
    return (<View style={styles.screen}>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderGridItem}
                numColumns={2}
                key={2}
            />

        </View>
    </View >
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    category: {
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: 10,
        width: 180,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        marginBottom: 10,
        elevation: 4
    },

    category_text: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 5,
        color: '#1E3163',
        fontWeight: 'bold',
        fontFamily: 'open-sans'
    },

});

export default CategoriesScreen;