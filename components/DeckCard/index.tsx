import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type DeckCardProps = {
  createBtn?: boolean;
  label?: string;
};

const DeckCard: React.FC<DeckCardProps> = ({
  createBtn = false,
  label = 'New deck',
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.deckCard}>
        {createBtn ? <AntDesign name="plus" size={60} color={'#FFF'} /> : ''}
        <Text style={styles.title}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deckCard: {
    height: 150,
    width: 150,
    borderRadius: 40,
    backgroundColor: '#5B7AE6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 15.7,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  title: {
    color: '#FFF',
  },
});

export default DeckCard;
