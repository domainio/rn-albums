import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={Style.imageContainer}>
                    <Image style={Style.image} source={{ uri: props.details.thumbnail_image}} />
                </View>
                <View style={Style.header}>
                    <Text style={Style.title}>{props.details.title}</Text>
                    <Text>{props.details.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={Style.albumImage} source={{ uri: props.details.image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.details.url)}></Button>
            </CardSection>
        </Card>
    );
};

const Style = StyleSheet.create({
   header: {
       flexDirection: 'column',
       justifyContent: 'space-around',
   },
   image: {
       height: 50,
       width: 50,
   },
    imageContainer: {
       justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,

    },
    title: {
       fontSize: 20,
    },
    albumImage: {
       height: 300,
       flex: 1,
        width: null,
    }
});

export default AlbumDetails;