'use strict';

import React,  {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';
 
var SearchBooks = require('./SearchBooks');

class Search extends Component {
    render() {
        return (
          <View>
              <NavigatorIOS
                  style={styles.container}
                  initialRoute=
                  {{
                    title: 'Search Books',
                    component: SearchBooks
                  }}
              />           
          </View>  
        );
    }
}

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        height: 687
    },      
    powderblue: {
        width: 50, 
        height: 50, 
        backgroundColor: 'powderblue'
    },
    skyblue: {
        width: 50, 
        height: 50, 
        backgroundColor: 'skyblue'
    },
    steelblue: {
        width: 50, 
        height: 50, 
        backgroundColor: 'steelblue'
    }
});
 
module.exports = Search;