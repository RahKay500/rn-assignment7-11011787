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
                    <Image source={require('../assets/Images/Do Not Bleach.png')} style={styles.materialCareImage} />
                    <Text style={styles.materialName}> Do Not Use Bleach</Text>
                </View>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Do Not Tumble Dry.png')} style={styles.materialCareImage} />
                    <Text style={styles.materialName}> Do not tumble dry</Text>
                </View>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Do Not Wash.png')} style={styles.materialCareImage} />
                    <Text style={styles.materialName}> Dry clean with tetrachloroethylene</Text>
                </View>
                <View style={styles.materialCareDetails}>
                    <Image source={require('../assets/Images/Iron Low Temperature.png')} style={styles.materialCareImage} />
                    <Text style={styles.materialName}> Iron at a maximum of 110oC/230oF</Text>
                </View>
                <Image style={styles.line} source={require('../assets/Images/line.png')} />
            </View>
            <View style={styles.shippingInfo}>
                <Image source={require('../assets/Images/Shipping.png')} style={styles.shippingIcon} />
                <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
                <Text style={styles.shippingText2}>
                Estimated to be delivered on
                09/11/2021 - 12/11/2021.
                </Text>
                <Image source={require('../assets/Images/Up.png')} style={styles.upIcon} />
            </View>
        </View>
        <TouchableOpacity onPress={() => addToCart(dress)} style={styles.addToCartButton}>
            <Image source={require('../assets/Images/Plus.png')} style={styles.plusIcon} />
            <Text style={styles.addToCartButtonText}>ADD TO BASKET</Text>
            <Image source={require('../assets/Images/Heart.png')} style={styles.heartIcon} />
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
        marginBottom: 15,
    },
    materialCareImage: {
        width: 24,
        height: 24,
        marginRight: 10,
        marginBottom: 10
    },
    line: {
        width: '90%',
        height: 1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#EDEDED',
    },
    shippingInfo: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        
    },
    shippingIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
        marginBottom: 10
    },
    shippingText: {
        fontSize: 16,
    },
    shippingText2: {
        width: '60%',
        position: 'absolute',
        fontSize: 14,
        color: '#666',
        marginLeft: 35,
        marginTop: 10,
        top: 20,
    },
    upIcon: {
        width: 24,
        height: 24,
        marginBottom: 10,
        position: 'absolute',
        right: 30,
    },
    addToCartButton: {
        height: 60,
        marginTop: 100,
        backgroundColor: '#000000',
        paddingVertical: 10,
    },
    addToCartButtonText: {
        color: '#F5F5F5',
        fontSize: 16,
        position: 'relative',
        marginLeft: 10,
        left: 50,
        top: 12,
    },
    plusIcon: {
        width: 24,
        height: 24,
        marginBottom: 10,
        marginLeft: 10,
        tintColor: 'white',
        position: 'absolute',
        left: 10,
        top: 20,
    },
    heartIcon: {
        width: 24,
        height: 24,
        marginRight: 30,
        tintColor: '#FFFFFF',
        position: 'absolute',
        right: 10,
        top: 20,
    },
    });
