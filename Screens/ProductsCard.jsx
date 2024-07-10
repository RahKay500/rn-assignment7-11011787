    import React, { useContext } from 'react';
    import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
    import { CartContext } from '../src/context/CartContext';

    const ProductsCard = ({ product, isLoading, setIsLoading, handleError }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <View style={styles.dressContainer}>
        <View style={styles.card}>
            <Image
            source={{ uri: product.image }}
            style={styles.dress}
            onError={handleError}
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
            />
            {isLoading && <Text style={styles.placeholderText}>Loading...</Text>}
            <View style={styles.dressInfo}>
            <Text style={styles.dressName}>{product.title}</Text>
            <Text style={styles.dressDescription} numberOfLines={2}>
                {product.description}
            </Text>
            <Text style={styles.dressPrice}>${product.price}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => addToCart(product)} style={styles.addToCart}>
            <Image source={require('../assets/Images/add_circle.png')} style={styles.addToCartIcon} />
        </TouchableOpacity>
        </View>
    );
    };

    export default React.memo(ProductsCard);

    const styles = StyleSheet.create({
    dressContainer: {
        marginBottom: 20,
        width: '48%', // Adjust width to create two columns with a small gap
        flexDirection: 'row', // Ensure items are aligned horizontally
        justifyContent: 'space-between', // Ensure items are spaced evenly
        alignItems: 'stretch', // Align items vertically
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    dress: {
        width: '100%',
        height: 260,
        resizeMode: 'contain',
    },
    dressInfo: {
        padding: 10,
    },
    dressName: {
        fontSize: 18,
        fontWeight: '600',
    },
    dressDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    dressPrice: {
        fontSize: 20,
        color: '#FA908A',
        marginTop: 5,
    },
    addToCart: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    addToCartIcon: {
        width: 30,
        height: 30,
    },
    placeholderText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        fontSize: 16,
        color: '#999',
    },
    });
