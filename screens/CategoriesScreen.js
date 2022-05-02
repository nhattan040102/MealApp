import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Touchable } from 'react-native-web';

import { CATEGORIES } from '../dummy_data/data'
import CategoryItem from '../components/CategoryItem';



const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryItem item={itemData.item} navigation={props.navigation} />
    }

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


});

export default CategoriesScreen;