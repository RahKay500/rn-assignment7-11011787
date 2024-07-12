    // CartContext.js
    import React, { createContext, useState, useEffect } from 'react';
    import AsyncStorage from '@react-native-async-storage/async-storage';

    export const CartContext = createContext();

    export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadCart = async () => {
        try {
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart) {
            setCart(JSON.parse(storedCart));
            }
        } catch (error) {
            console.error('Error loading cart from storage', error);
        }
        };
        loadCart();
    }, []);

    const saveCart = async (cart) => {
        try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
        console.error('Error saving cart to storage', error);
        }
    };

    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        saveCart(updatedCart);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
        saveCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
        </CartContext.Provider>
    );
    };
