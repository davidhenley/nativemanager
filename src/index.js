import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Text } from 'native-base';
import firebase from 'firebase';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBA1lKlR2DZBnEYv4re8d3L8BF1GwxDzUc',
      authDomain: 'react-native-manager-4633a.firebaseapp.com',
      databaseURL: 'https://react-native-manager-4633a.firebaseio.com',
      storageBucket: 'react-native-manager-4633a.appspot.com',
      messagingSenderId: '945116885188'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
