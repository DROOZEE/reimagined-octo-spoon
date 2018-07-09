const initialState = [
	{
		item: {
			id: 1,
			title: "Maincode",
			name: "maincode",
			desc: "First project of maincode agency"
		}
	},
	{
		item: {
			id: 2,
			title: "Seveda",
			name: "seveda",
			desc: "Second project of maincode agency"
		}
	},
	{
		item: {
			id: 3,
			title: "TokeIn",
			name: "tokein",
			desc: "Third project of maincode agency"
		}
	}
]

const actionTypes = {
	GETDATA: 'GETDATA'
}

export default function loadCaseData(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GETDATA:
			return Object.assign({}, state, {
				...state
			})

		default: return state
	}
	return state
}
