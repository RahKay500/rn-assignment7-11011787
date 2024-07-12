import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from '../src/context/CartContext';

const ProductsCard =({ product, isLoading, setIsLoading, handleError }) => {
const { addToCart } = useContext(CartContext);
const [setCart] = useState([]);

useEffect(() => {
    const loadCart = async () => {
    const storedCart = await AsyncStorage.getItem('cart');
    if (storedCart) {
        setCart(JSON.parse(storedCart));
    }
    };
    loadCart();
}, []);

const truncateDescription = (description) => {
    return description.length > 50 ? description.substring(0, 50) + '...' : description;
};

return (
    <View style={styles.dressContainer}>
    <TouchableOpacity onPress={() => addToCart(product)}>
        <Image source={require('../assets/Images/add_circle.png')} style={styles.addToCart} />
    </TouchableOpacity>
    <Image
        source={{ uri: product.image }}
        style={styles.dress}
        onError={handleError}
        // Add a placeholder image while loading
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
    />
    {isLoading && <Text style={styles.placeholderText}>Loading...</Text>}
    <View style={styles.dressInfo}>
        <Text style={styles.dressName}>{product.title}</Text>
        <Text style={styles.dressDescription}>{truncateDescription(product.description)}</Text>
        <Text style={styles.dressPrice}>${product.price}</Text>
    </View>
    </View>
);
}

export default React.memo (ProductsCard);

const styles = StyleSheet.create({
dressContainer: {
    width: '60%', 
    flexDirection: 'colummn', 
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
    position: 'relative',
},
dress: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
    marginLeft: 10,
},
dressInfo: {
    paddingLeft: 30,
    paddingBottom: 30,
},
dressName: {
    width: 150,
    fontSize: 18,
    fontWeight: '700',
},
dressDescription: {
    width: 150,
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
    left: 140,
    top: 120,
},
});
