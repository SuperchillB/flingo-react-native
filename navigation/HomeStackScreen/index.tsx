import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import Header from '../../components/common/Header';

const HomeStack = createStackNavigator();
const screenOptionStyle = {
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#f6f6f6',
    shadowColor: 'transparent',
  },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'regular',
  //   color: 'red',
  // },
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOptionStyle}>
      {/* <HomeStack.Navigator> */}
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Flingo',
        }}
      />
      {/* <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          // headerTitle: props => <Header {...props} />,
          headerTitle: () => <Header navigation={navigation} title="Flingo" />,
        })}
      /> */}
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
