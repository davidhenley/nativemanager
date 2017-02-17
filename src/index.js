import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import Router from './router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
