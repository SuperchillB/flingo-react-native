import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';

const ProfileStack = createStackNavigator();
const screenOptionStyle = {
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#f6f6f6',
    shadowColor: 'transparent',
  },
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={screenOptionStyle}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* <ProfileStack.Screen name="Details" component={DetailsScreen} /> */}
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
