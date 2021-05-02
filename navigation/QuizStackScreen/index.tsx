import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../../screens/QuizScreen';

const QuizStack = createStackNavigator();
const screenOptionStyle = {
  // headerShown: false,
  headerStyle: {
    backgroundColor: '#f6f6f6',
    shadowColor: 'transparent',
  },
};

const QuizStackScreen = () => {
  return (
    <QuizStack.Navigator screenOptions={screenOptionStyle}>
      <QuizStack.Screen name="Quiz" component={QuizScreen} />
      {/* <QuizStack.Screen name="Details" component={DetailsScreen} /> */}
    </QuizStack.Navigator>
  );
};

export default QuizStackScreen;
