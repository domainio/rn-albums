import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
      <View style={Style.container}>
          {props.children}
      </View>
  );
};

const Style = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
});

export default CardSection;