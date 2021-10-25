import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen';

const Tab = createMaterialBottomTabNavigator();

function TabStack() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffff"
        barStyle={{ backgroundColor: '#7209b7' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactInfoScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="contacts" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default TabStack;