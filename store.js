import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const exampleInitialState = {
  count: 0
}

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// ACTIONS
export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}


// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 3
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 4
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default: return state
  }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
