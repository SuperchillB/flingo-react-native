import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateScreen from '../../screens/CreateScreen';

const CreateStack = createStackNavigator();
const screenOptionStyle = {
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#f6f6f6',
    shadowColor: 'transparent',
  },
};

const CreateStackScreen = () => {
  return (
    <CreateStack.Navigator screenOptions={screenOptionStyle}>
      <CreateStack.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'Create a card' }}
      />
      {/* <CreateStack.Screen name="Details" component={DetailsScreen} /> */}
    </CreateStack.Navigator>
  );
};

export default CreateStackScreen;
