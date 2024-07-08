import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import DrawerItems from './DrawerItems';
const SideBar = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Text style={styles.nameText}>RAHINA KAYOR</Text>
                <Image style={styles.line} source={require('../assets/Images/line.png')} />
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Image style={styles.closeButton} source={require('../assets/Images/Close.png')} />
                </TouchableOpacity>
            </View>
            {props.state.routes.map((route, index) => (
                <DrawerItems
                    key={index}
                    label={route.name}
                    onPress={() => props.navigation.navigate(route.name)}
                    focused={props.state.index === index}
                />
            ))}
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,

    },
    nameText: {
        fontSize: 18,
        marginBottom: 20,
    },
    line: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 15,
        left: 30,
        tintColor: '#FA908A',
    },
    closeButton: {
        height  : 20,
        width: 25,
        position: 'relative',
        bottom: 50,
        right: 220,
    },
});

export default SideBar;
