
'use strict';

import React,  {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
 
var styles = StyleSheet.create({
     container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'skyblue'
        },
});
 
class SearchBooks extends Component {
    render() {
        return (
          <View style={styles.container}>
          </View>             
        );
    }
}
 
module.exports = SearchBooks;