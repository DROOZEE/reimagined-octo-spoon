const initialState = {
	openedMenu: false
}

const actionTypes = {
	TOGGLEMENU: 'TOGGLEMENU',
	OPENMENU: 'OPENMENU',
	CLOSEMENU: 'CLOSEMENU'
}

export default function changeMenu(state = initialState, action) {
	switch (action.type) {
		case actionTypes.TOGGLEMENU:
			return Object.assign({}, state, {
				openedMenu: !state.openedMenu
			})
		case actionTypes.OPENMENU:
			return Object.assign({}, state, {
				openedMenu: true
			})
		case actionTypes.CLOSEMENU:
			return Object.assign({}, state, {
				openedMenu: false
			})

		default: return state
	}
	return state
}
