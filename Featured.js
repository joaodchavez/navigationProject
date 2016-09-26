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

var BookList = require('./BookList');
 
class Featured extends Component {
    render() {
        return (
          <View>
              <NavigatorIOS
                  style={styles.container}
                  initialRoute=
                  {{
                    title: 'Featured Books',
                    component: BookList
                  }}
              />           
          </View>  
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 687, 
  //       barTintColor :'#000',
  // titleTextColor:'#fff',
  // tintColor:'#fff',
    }, 
    powderblue:{
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
 
module.exports = Featured;