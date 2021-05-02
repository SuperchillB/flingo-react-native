import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  navigation: any;
  title: string;
};

const Header: React.FC<HeaderProps> = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // width: '100%',
    // height: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
});

export default Header;
