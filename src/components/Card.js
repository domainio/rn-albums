import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <View style={Styles.containeStyle}>
            {props.children}
        </View>
    );
};

const Styles = StyleSheet.create({
   containeStyle: {
       borderWidth: 1,
       borderRadius: 2,
       borderColor: 'white',
       borderBottomWidth: 0,
       shadowColor: 'black',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.1,
       shadowRadius: 2,
       marginLeft: 5,
       marginRight: 5,
       marginTop: 10,
   }
});

export default Card;