
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
  ActivityIndicatorIOS, 
  RefreshControl
} from 'react-native';

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

var BookDetail = require('./BookDetail');
var Search = require('./Search');

var styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'powderblue'

    },
    thumbnail: {
        width: 80,
        height: 80,
        backgroundColor: 'blue'
    },
    rightContainer: {
        //backgroundColor: 'green'
    },
    title: {
        fontSize: 20,
        marginBottom: 10, 

    },
    author: {
        color: '#656565'
    },
    listView: {
       backgroundColor: '#F5FCFF', 
       flex: 1, 
       marginTop: 45, 
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }, 
    cellSeparator: {
    height: 50,
  },  
    rowSeparator: {
    width: 8,
  },  
});
 
class BookList extends Component {

    constructor(props) {
           super(props);
           this.state = {
               isLoading: true,
               refreshing: false,
               dataSource: new ListView.DataSource({
                   rowHasChanged: (row1, row2) => row1 !== row2
               })
           };
    }

    onRefresh() {
        this.setState({refreshing: true});
        this.componentDidMount().then(() => {
          this.setState({refreshing: false});
        });
      }

    componentDidMount() {
           this.fetchData();
       }
     
    fetchData() {
           fetch(REQUEST_URL)
           .then((response) => response.json())
           .then((responseData) => {
               this.setState({
                   dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                   isLoading: false
               });
           })
           .done();
       }

    showBookDetail(book) {
       this.props.navigator.push({
           title: book.volumeInfo.title,
           component: BookDetail,
           passProps: {book}, 
            rightButtonTitle : " "          ,
            // onRightButtonPress: () => {
            //   this.props.navigator.push({
            //     component: Search,
            //     onRightButtonPress: () => { this.props.navigator.pop(); }
            //   });}

       });
   }
    renderBook(book) {
           return (
                <TouchableHighlight onPress={() => this.showBookDetail(book)}  underlayColor='#dddddd'>                
                    <View>
                        <View style={styles.container}>
                            <View style={styles.rowSeparator} />
                            <Image
                                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                                style={styles.thumbnail} />
                            <View style={styles.rowSeparator} />
                            <View style={styles.rightContainer}>
                                <Text style={styles.title}>{book.volumeInfo.title}</Text>
                                <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                    </View>
                </TouchableHighlight>
           );
       }

    render() {
           if (this.state.isLoading) {
               return this.renderLoadingView();
           }
           return (            
                <ListView
                    // refreshControl={
                    //   <RefreshControl
                    //     refreshing={this.state.refreshing}
                    //     onRefresh={this.onRefresh.bind(this)}/>
                    //  }   
                    dataSource={this.state.dataSource}
                    renderRow={this.renderBook.bind(this)}
                    style={styles.listView}
                    />                
            );
    }  

    //TODO
    //DO THE SEARCH FEATURE
        
    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS
                    size='large'/>
                <Text>
                    Loading books...
                </Text>
            </View>
        );
    }
}

module.exports = BookList;