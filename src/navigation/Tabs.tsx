import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import Tab1 from './Tab1';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'ios') ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, .9)',
          borderWidth: 0,
          height: (Platform.OS === 'ios') ? 80 : 60,
          elevation: 0
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Tab1}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => <Icon name='list-outline' color={color} size={25} />
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => <Icon name='search-outline' color={color} size={25} />
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs