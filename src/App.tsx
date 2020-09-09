import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import combinedReducers from './redux/reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css'

const store = createStore(
  combinedReducers,
  {},
  compose(
    applyMiddleware(thunk, logger)
  )
)

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </Provider>
  );
}

export default App;
