'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class UkProperties extends React.Component {
  render() {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Property Finder',
            component: SearchPage,
          }}/>
      );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('UkProperties', () => UkProperties);
