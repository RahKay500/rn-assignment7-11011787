    import React, { useState, useEffect } from 'react';
    import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import ProductsCard from './ProductsCard';
    import { Ionicons } from '@expo/vector-icons';

    const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const handleError = (error) => {
        console.error('Error loading data:', error);
    };

    useEffect(() => {
        const getData = async () => {
        setIsLoading(true);
        try {
            await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
        };
        getData();
    }, []);

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
        <View style={styles.sectionTwo}>
            <Text style={styles.sectionTwoText}>O U R  S T O R E</Text>
            <View style={styles.listContainer}>
            <Ionicons style={styles.listIcon} name="list" size={25} color="black" />
            </View>
            <View style={styles.filterContainer}>
            <Ionicons style={styles.filterIcon} name="filter" size={20} color="#FA908A" />
            </View>
        </View>
        <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate('DressDetails', { dress: item })} 
                style={styles.itemContainer}
            >
                <ProductsCard
                product={item}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                handleError={handleError}
                />
            </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.row}
        />
        </SafeAreaView>
    );
    }

    export default HomeScreen;

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    navBar: {
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
    },
    logoText: {
        width: 100,
        height: 40,
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
    sectionTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        margin: 16,
    },
    sectionTwoText: {
        fontSize: 24,
        fontWeight: '400',
        marginBottom: 10,
    },
    listContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#F7F7F7',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        left: 80,
        bottom: 5,
    },
    filterContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#F7F7F7',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        left: 30,
        bottom: 5,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 10, // Adjust the spacing between rows
    },
    itemContainer: {
        flex: 1,
        marginHorizontal: 10, // Adjust the spacing between columns
    },
    });
