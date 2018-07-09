const initialState = {

}

const actionTypes = {
	SETCASEPATH: 'SETCASEPATH'
}

export default function setCasePath(state = initialState, action) {
	if (action.type === "SETCASEPATH") {
		return action.payload
	}
	return state
}
