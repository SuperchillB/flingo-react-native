import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text>Profile screen</Text>
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 90, // Compensates height of bottom tab
  },
});

export default ProfileScreen;
