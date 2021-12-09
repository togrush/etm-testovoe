import {  createStore } from "redux";
import { dataBaseReducer } from './app/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(dataBaseReducer, composeWithDevTools());
