import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import DeckCard from '../../components/DeckCard';
import { FlatList } from 'react-native-gesture-handler';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

const DATA = [
  {
    id: '1',
    label: 'Geography',
    createBtn: false,
  },
  {
    id: '2',
    label: 'Animals',
    createBtn: false,
  },
  {
    id: '3',
    label: 'Time/Date',
    createBtn: false,
  },
  {
    id: '4',
    label: 'Family',
    createBtn: false,
  },
  {
    id: '5',
    label: 'Hobbies',
    createBtn: false,
  },
  {
    id: '6',
    label: 'Culture',
    createBtn: false,
  },
  {
    id: '7',
    label: 'Misc',
    createBtn: false,
  },
  {
    id: '8',
    label: 'Test',
    createBtn: false,
  },
];

// type ProfileScreenNavigationProp = StackNavigationProp<any>;
// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const renderItem = ({ item }: any) => {
    if (item.createBtn) return <DeckCard createBtn navigation={navigation} />;
    return <DeckCard label={item.label} navigation={navigation} />;
  };

  const newList = [{ id: '0', label: 'New Deck', createBtn: true }, ...DATA];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newList}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: 'blue',
    // justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingBottom: 50, // ???Compensates height of bottom tab???
  },
});

export default HomeScreen;
