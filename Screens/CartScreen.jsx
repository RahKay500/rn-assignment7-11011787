import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { CartContext } from '../src/context/CartContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CartScreen = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navBar}>
                <Image style={styles.logoText} source={require('../assets/Images/Logo.png')} />
                <Image style={styles.searchIcon} source={require('../assets/Images/Search.png')} />
            </View>
            <View style={styles.checkOutContainer}>
                <Text style={styles.checkOut}> C H E C K O U T</Text>
                <Image style={styles.line1} source={require('../assets/Images/line.png')} />
                <MaterialCommunityIcons style={styles.rhombus} name="rhombus-outline" size={15} color="black" />
                <Image style={styles.line2} source={require('../assets/Images/line.png')} />
            </View>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContentContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                        <View style={styles.cartItemInfo}>
                            <Text style={styles.cartItemName}>{item.title}</Text>
                            <Text style={styles.cartItemPrice}>${item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                            <Image style={styles.removeButton} source={require('../assets/Images/remove.png')} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    navBar: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    logoText: {
        width: 100,
        height: 40,
        position: 'relative',
        left: 135,
    },
    searchIcon: {
        position: 'absolute',
        right: 50,
    },
    checkOutContainer: {
        marginBottom: 20,
    },
    checkOut: {
        fontSize: 24,
        fontWeight: '400',
        marginTop: 20,
        position: 'relative',
        left: 135,
    },
    line1: {
        width: 70,
        height: 5,
        position: 'relative',
        left: 145,
        top: 10,
    },
    line2: {
        width: 70,
        height: 5,
        position: 'relative',
        left: 230,
        top: 5,
    },
    rhombus: {
        position: 'absolute',
        right: 200,
        top: 50,
        opacity: 0.3,
    },
    cartItemInfo: {
        width: '60%',
        alignContent: 'center',
        position: 'relative',
        top: 60,
    },
    cartItem: {
        flexDirection: 'row',
        alignContent: 'left',
        justifyContent:'left',
        marginTop: 30,
    },
    cartItemImage: {
        width: '40%',
        height: 200,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    cartItemName: {
        width: '90%',
        flexWrap: 'wrap',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 10,
    },
    cartItemDescription: {
        fontSize: 14,
        fontWeight: '600',
        color: '#aaa',
        marginBottom: 10,
    },
    cartItemPrice: {
        fontSize: 20,
        color: '#FA908A',
        fontWeight: '500',
        marginLeft: 10,
    },
    
    removeButton: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        right: 60,
        bottom: 10,
    },
    flatListContentContainer: {
        paddingBottom: 100,
    }
});
