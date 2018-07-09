const initialState = {

}

const actionTypes = {
	SETDATA: 'SETDATA'
}

export default function setData(state = initialState, action) {
	if (action.type === "SETDATA") {
		return action.payload
	}
	return state
}
