'use strict';

import React,  {Component} from 'react';
import {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS, 
  ListView,
  TouchableHighlight, 
  ActivityIndicatorIOS
} from 'react-native';


var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: 'white'
    }, 
    general:{
        backgroundColor: 'steelblue', 
        flex:1
    }
});
 
class BookDetail extends Component {
    render() {
        var book = this.props.book;
        var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
        var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
        return (
            <View style={styles.general}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: imageURI}} />
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        );
    }
}
 
module.exports = BookDetail;