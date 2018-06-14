
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
	// data: [
	// 	{
	// 		id: 0,
	// 		name: 'Daniel',
	// 		job: 'front',
	// 	},
	// 	{
	// 		id: 1,
	// 		name: 'Alex',
	// 		job: 'design',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Paul',
	// 		job: 'owner',
	// 	}
	// ],
	openedMenu: false,
}

export const actionTypes = {
	LOADDATA: 'LOADDATA',
	TOGGLEMENU: 'TOGGLEMENU',
	CLOSEMENU: 'CLOSEMENU',
}

// ACTIONS
export const loadData = () => dispatch => {
  return dispatch({ type: actionTypes.LOADDATA })
}
export const toggleMenu = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLEMENU })
}
export const closeMenu = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSEMENU })
}


// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
		case actionTypes.LOADDATA:
			return Object.assign({}, state, {
				data: initialState.data
			})
		case actionTypes.TOGGLEMENU:
			return Object.assign({}, state, {
				...state,
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
