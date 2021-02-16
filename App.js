import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Home from './src/screens/home'
import Login from './src/screens/login'
import Products from './src/screens/products'

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Login') {
              return (
                <Ionicons
                  name={focused ? 'ios-log-in' : 'ios-log-in'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Products') {
              return (
                <Ionicons
                  name={focused ? 'ios-list' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Products" component={Products} options={{tabBarBadge: 6}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;