import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import HomeStackScreen from '../HomeStackScreen';
import CreateStackScreen from '../CreateStackScreen';
import QuizStackScreen from '../QuizStackScreen';
import ProfileStackScreen from '../ProfileStackScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // inactiveTintColor: '#babe55',
        // activeTintColor: '#bebb',
        style: {
          height: 90,
          justifyContent: 'center',
          paddingVertical: 15,
          // paddingTop: 5,
          // paddingBottom: 0,
          backgroundColor: '#fff',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderTopColor: 'transparent',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowColor: '#414141',
          shadowOpacity: 0.05,
          shadowRadius: 20,
          elevation: 2,
          position: 'absolute', // !!! Makes background behind tabs disappear
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            // <Image
            //   source={require('../assets/flingo-icons-decks.svg')}
            //   style={{
            //     height: 30,
            //     width: 30,
            //   }}
            // />
            <AntDesign
              name="appstore-o"
              size={30}
              color={focused ? '#3A3A3A' : '#CDCACD'}
              // selectionColor="#3A3A3A"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Create"
        component={CreateStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            // <Image
            //   source={require('../assets/flingo-icons-plus.svg')}
            //   style={{ height: 20, width: 20 }}
            // />
            <AntDesign
              name="plus"
              size={30}
              color={focused ? '#3A3A3A' : '#CDCACD'}
              // selectionColor="#3A3A3A"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            // <Image
            //   source={require('../assets/flingo-icons-quiz.svg')}
            //   style={{ height: 20, width: 20 }}
            // />
            <Ionicons
              name="flash-outline"
              size={30}
              color={focused ? '#3A3A3A' : '#CDCACD'}
              // selectionColor="#3A3A3A"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            // <Image
            //   source={require('../assets/flingo-icons-profile.svg')}
            //   style={{ height: 20, width: 20 }}
            // />
            <Feather
              name="user"
              size={30}
              color={focused ? '#3A3A3A' : '#CDCACD'}
              // selectionColor="#3A3A3A"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
