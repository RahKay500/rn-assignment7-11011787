import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, 
    Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ProductsCard from './ProductsCard';
import { Ionicons } from '@expo/vector-icons';
const data = require('../Data/data.json');

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
            setProducts(data.products);
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
            <FlatList 
            numColumns={2}
            ListHeaderComponent={
                
                <>
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => navigation.openDrawer() }>
                        <Image style={styles.menuIcon} source={require('../assets/Images/Menu.png')} />
                    </TouchableOpacity>
                    <Image style={styles.logoText} source={require('../assets/Images/Logo.png')} />
                    <Image style={styles.searchIcon} source={require('../assets/Images/Search.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image style={styles.shoppingBagIcon} source={require('../assets/Images/shoppingBag.png')} />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.sectionTwo}>
                    <Text style={styles.sectionTwoText}>O U R  S T O R Y</Text>
                    <View style={styles.listContainer}>
                        <Ionicons style={styles.listIcon} name="list" size={25} color="black" />
                    </View>
                    <View style={styles.filterContainer}>
                        <Ionicons style={styles.filterIcon} name="filter" size={20} color="#FA908A" />
                    </View>
                </View>
                
                </>
            }
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ProductsCard
                product={item}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                handleError={handleError}
                />
            )}
            showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
        
    )
    }

    export default HomeScreen

const styles = StyleSheet.create({
container: {
    backgroundColor: '#ffffff',
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
    right: 0,
},
sectionTwo: {
    position: 'relative',
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
    position: 'relative',
},
listContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#F7F7F7',
    borderRadius: 100,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
    left: 30,
    bottom: 5,
},
listIcon: {
    position: 'relative',
    left: 8,
},
filterIcon: {
    position: 'relative',
    left: 10,
},
ProductsCardContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    margin: 15,
},
})