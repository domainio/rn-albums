import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        }
    }
    componentWillMount() {
        console.log('will mount');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }
    render() {
        console.log(this.state.albums);
        return (
            <ScrollView>
                {this.state.albums.map((album, i) => <AlbumDetails key={i} details={album} />)}
            </ScrollView>
        );
    }
}

export default AlbumList;