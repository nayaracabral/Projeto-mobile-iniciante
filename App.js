import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import ReduxThunk from "redux-thunk";
import AppNavigator from './navigation/AppNavigator';




export default function App() {
  return (
  
  
      <AppNavigator />
  
  );
}
