import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f6f6f6',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
