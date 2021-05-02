import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type DeckCardProps = {
  createBtn?: boolean;
  label?: string;
  navigation: StackNavigationProp<any>;
};

const DeckCard: React.FC<DeckCardProps> = ({
  createBtn = false,
  label = 'New deck',
  navigation,
}) => {
  const displayFirstLetter = () => {
    if (label && label.length > 0) return label[0].toUpperCase();
    return '';
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Deck Details')}>
      <View style={[styles.deckCard, createBtn && styles.createDeckCard]}>
        {createBtn ? (
          <AntDesign name="plus" size={60} color={'#FFF'} />
        ) : (
          <Text style={[styles.defaultLabelColor, styles.firstLetter]}>
            {displayFirstLetter()}
          </Text>
        )}
        <Text
          style={createBtn ? styles.createDeckTitle : styles.defaultLabelColor}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deckCard: {
    marginVertical: 10,
    height: 150,
    width: 150,
    borderRadius: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.07,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  createDeckCard: {
    backgroundColor: '#5B7AE6',
  },
  createDeckTitle: {
    color: '#FFF',
  },
  defaultLabelColor: {
    color: '#5B7AE6',
  },
  firstLetter: {
    fontSize: 60,
  },
});

export default DeckCard;
