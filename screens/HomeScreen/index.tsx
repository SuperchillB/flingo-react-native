import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import DeckCard from '../../components/DeckCard';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DeckCard createBtn />
      {/* <DeckCard /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingBottom: 90, // Compensates height of bottom tab
  },
});

export default HomeScreen;
