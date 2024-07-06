import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from '../src/context/CartContext';

import dress1 from '../assets/Images/dress1.png';
import dress2 from '../assets/Images/dress2.png';
import dress3 from '../assets/Images/dress3.png';
import dress4 from '../assets/Images/dress4.png';
import dress5 from '../assets/Images/dress5.png';
import dress6 from '../assets/Images/dress6.png';
import dress7 from '../assets/Images/dress7.png';


    const ProductsCard = ({ product, isLoading, setIsLoading, handleError }) => {
        const { addToCart } = useContext(CartContext);

        const [cart, setCart] = useState([]);
        useEffect(() => {
            const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            }
            };
            loadCart();
        }, []);    

        return (
            <View style={styles.dressContainer}>
                <Image
                    source={getImageSource(product.image)}
                    style={styles.dress}
                    onError={handleError}
                    // Add a placeholder image while loading
                    onLoadStart={() => setIsLoading(true)}
                    onLoad={() => setIsLoading(false)}
                />
                {isLoading && <Text style={styles.placeholderText}>Loading...</Text>}
                <View style={styles.dressInfo}>
                    <Text style={styles.dressName}>{product.name}</Text>
                    <Text style={styles.dressDescription}>{product.description}</Text>
                    <Text style={styles.dressPrice}>${product.price}</Text>
                </View>
                <TouchableOpacity onPress={() => addToCart(product)}>
                    <Image source={require('../assets/Images/add_circle.png')} style={styles.addToCart} />
                </TouchableOpacity>
            </View>
            );
        }

export default ProductsCard


const getImageSource = (imagePath) => {
    switch (imagePath) {
        case '../assets/Images/dress1.png':
            return dress1;
        case '../assets/Images/dress2.png':
            return dress2;
        case '../assets/Images/dress3.png':
            return dress3;
        case '../assets/Images/dress4.png':
            return dress4;
        case '../assets/Images/dress5.png':
            return dress5;
        case '../assets/Images/dress6.png':
            return dress6;
        case '../assets/Images/dress7.png':
            return dress7;
        case '../assets/Images/dress8.png':
            return dress3;
        default:
            return null;
    }
};

const styles = StyleSheet.create({
    dressContainer: {
        marginRight: 15,
        left: 20,
    },
    dress: {
        width: '100%',
        height: 260,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    dressInfo: {
        paddingLeft: 10,
        paddingBottom: 30,
    },
    dressName: {
        fontSize: 18,
        fontWeight: '600',
    },
    dressDescription: {
        fontSize: 14,
        fontWeight: '600',
        color: '#aaa',
    },
    dressPrice: {
        fontSize: 20,
        color: '#FA908A',
        fontWeight: '500',
    },
    addToCart: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10,
        bottom: 110,
    },
})