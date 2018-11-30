import { combinedReducers, combineReducers } from 'redux'
import {reducer as formReducer } from 'redux-form'
import personInfo from './redux/reducers/'

const rootReducer = combineReducers({
  persons: personInfo,
  form: formReducer
})