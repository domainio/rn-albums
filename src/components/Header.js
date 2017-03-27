import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
      <View style={Styles.viewStyle}>
        <Text style={Styles.textStyle}>{props.text}</Text>
      </View>
  );
};

const Styles = StyleSheet.create({
   viewStyle: {
     backgroundColor: 'red',
       justifyContent: 'center',
       alignItems: 'center',
       height: 60,
       paddingTop: 8,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2},
       shadowOpacity: 1,
       marginBottom: 2,

   },
   textStyle: {
       fontSize: 20,

   },
});

export default Header;