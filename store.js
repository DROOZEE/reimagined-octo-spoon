
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
	openedMenu: false,
}

export const actionTypes = {
	TOGGLEMENU: 'TOGGLEMENU',
	CLOSEMENU: 'CLOSEMENU',
}

// ACTIONS
export const toggleMenu = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLEMENU })
}
export const closeMenu = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSEMENU })
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
		case actionTypes.TOGGLEMENU:
			return Object.assign({}, state, {
        openedMenu: !state.openedMenu
			})
		case actionTypes.CLOSEMENU:
			return Object.assign({}, state, {
        openedMenu: false
			})

    default: return state
  }
}


export function initializeStore (initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
