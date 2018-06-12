import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
	id: 0,
	data: [
		{
			id: 0,
			name: 'Daniel',
			job: 'front',
		},
		{
			id: 1,
			name: 'Alex',
			job: 'design',
		},
		{
			id: 2,
			name: 'Paul',
			job: 'owner',
		}
	],
}

export const actionTypes = {
	LOADDATA: 'LOADDATA',
	FETCHFROMDATA: 'FETCHFROMDATA',
	GETINDEX: 'GETINDEX',
}

// ACTIONS
export const loadData = () => dispatch => {
  return dispatch({ type: actionTypes.LOADDATA })
}

export const fetchFromData = () => dispatch => {
  return dispatch({ type: actionTypes.FETCHFROMDATA })
}

export const getIndex = () => dispatch => {
  return dispatch({ type: actionTypes.GETINDEX })
}


// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
		case actionTypes.LOADDATA:
			return Object.assign({}, state, {
				data: initialState.data
			})
		case actionTypes.GETINDEX:
			return Object.assign({}, state, {
				id: initialState.id = 2
			})
		case actionTypes.FETCHFROMDATA:
			return Object.assign({}, state, {
				fetched: initialState.fetched = initialState.data[initialState.id]
			})


    default: return state
  }
}


export function initializeStore (initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
