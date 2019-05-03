import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { headerReducer } from './store'

const store = createStore(combineReducers({
  header: headerReducer
}))

export default store
