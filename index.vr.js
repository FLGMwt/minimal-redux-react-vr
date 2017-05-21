import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

export class App extends React.Component {
  render() {
    let textStyle = {
      backgroundColor: '#777879',
      fontSize: 0.8,
      fontWeight: '400',
      layoutOrigin: [0.5, 0.5],
      paddingLeft: 0.2,
      paddingRight: 0.2,
      textAlign: 'center',
      textAlignVertical: 'center',
      transform: [{translate: [0, 0, -3]}],
    };
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={textStyle}>
          Hello there! {this.props.count}
        </Text>
      </View>
    );
  }
};

export let ConnectedApp = connect(
  (state) => ({count: state})
)(App);

export let reducer = (state = 0, action) => state;

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <ConnectedApp />
      </Provider>
    );
  }
};

AppRegistry.registerComponent('redux_vr', () => Root);
