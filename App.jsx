import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import SideBar from './Components/SideBar';
import DressDetailScreen from './Components/DressDetails';
import { CartProvider } from './src/context/CartContext';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <CartProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
                    name="DressDetails"
                    component={DressDetailScreen}
                    options={{ headerShown: false }}
                />
      </Stack.Navigator>
  </CartProvider>
  );
};


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{ headerShown: false, swipeEnabled: false}}
        drawerContent={(props) => <SideBar {...props} />}
      >
        <Drawer.Screen name="Store" component={HomeStack} />
        <Drawer.Screen name="Locations" component={HomeStack} />
        <Drawer.Screen name="Blog" component={HomeStack} />
        <Drawer.Screen name="Jewelry" component={HomeStack} />
        <Drawer.Screen name="Electronic" component={HomeStack} />
        <Drawer.Screen name="Clothing" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
