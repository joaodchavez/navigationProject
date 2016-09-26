
'use strict';

import React,  {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS, 
  ListView,
  TouchableHighlight
} from 'react-native';


var Featured = require('./Featured');
var Search = require('./Search');
var imageFeatured

class NavigationProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
 
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                  title="Featured"
                    selected={this.state.selectedTab === 'featured'}
                    icon={imageFeatured}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                  title="Search"
                    selected={this.state.selectedTab === 'search'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
