import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawerItem = ({ label, onPress, focused }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
            <Text style={[styles.label, focused && styles.focusedLabel]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    drawerItem: {
        padding: 20,
    },
    label: {
        color: 'black', 
    },
    focusedLabel: {
        color: 'black', // Text color when focused (override blue color)
    },
});

export default CustomDrawerItem;
