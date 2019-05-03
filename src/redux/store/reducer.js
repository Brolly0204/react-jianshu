import * as types from './action-types'
import { fromJS } from 'immutable'

const initState = fromJS(
  {
    focused: false
  }  
)
export default (state = initState, action) => {
  switch(action.type) {
    case types.INPUT_FOCUS:
      return state.set('focused', true)
    case types.INPUT_BLUR:
      return state.set('focused', false)
  }
  return state
}