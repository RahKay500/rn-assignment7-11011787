    import React, { useContext } from 'react';
    import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
    import { CartContext } from '../src/context/CartContext';
    import { useNavigation } from '@react-navigation/native';
    import { SafeAreaView } from 'react-native-safe-area-context';

    const DressDetailScreen = ({ route }) => {
    const { dress } = route.params;
    const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.menuIcon} source={require('../assets/Images/Menu.png')} />
            </TouchableOpacity>
            <Image style={styles.logoText} source={require('../assets/Images/Logo.png')} />
            <Image style={styles.searchIcon} source={require('../assets/Images/Search.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image style={styles.shoppingBagIcon} source={require('../assets/Images/shoppingBag.png')} />
            </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle ={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Image source={{ uri: dress.image }} style={styles.dressImage} />
        <View style={styles.dressInfo}>
            <Image source={require('../assets/Images/Export.png')} style={styles.export} />
            <Text style={styles.dressName}>{dress.title}</Text>
            <Text style={styles.dressDescription}>{dress.description}</Text>
            <Text style={styles.dressPrice}>${dress.price}</Text>
            <Text style={styles.materials}>M A T E R I A L S</Text>
            <Text style={styles.materialDetails}>We work with monitoring programmes to
            ensure compliance with safety, health and
            quality standards for our products.
            </Text>
            <View style={styles.materialCareContainer}>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Do Not Bleach.png')} style={styles.materialImage} />
                    <Text style={styles.materialName}> Do Not Use Bleach</Text>
                </View>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Do Not Bleach.png')} style={styles.materialImage} />
                    <Text style={styles.materialName}> Do Not Tu</Text>
                </View>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Do Not Bleach.png')} style={styles.materialImage} />
                    <Text style={styles.materialName}> Do Not Use Bleach</Text>
                </View>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Do Not Bleach.png')} style={styles.materialImage} />
                    <Text style={styles.materialName}> Do Not Use Bleach</Text>
                </View>

            </View>
        </View>
        <TouchableOpacity onPress={() => addToCart(dress)} style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
    };

    export default DressDetailScreen;

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
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
    menuIcon: {
        width: 24,
        height: 24,
        position: 'relative',
        alignItems: 'center',
    },
    logoText: {
        width: 100,
        height: 40
    },
    searchIcon: {
        position: 'absolute',
        right: 70,
    },
    shoppingBagIcon: {
        width: 24,
        height: 24,
        position: 'relative',
        left: 5,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    export: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
    },
    dressImage: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
    },
    dressInfo: {
        marginTop: 20,
    },
    dressName: {
        width: '80%',
        fontSize: 24,
        fontWeight: '500',
    },
    dressDescription: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    dressPrice: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        color: '#FA908A',
    },
    materials: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    materialDetails: {
        width: '80%',
        marginTop: 10,
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    materialCareDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    addToCartButton: {
        marginTop: 20,
        backgroundColor: '#FA908A',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    });
