const initialState = [
	{
		item: {
			id: 1,
			title: "Maincode",
			name: "maincode",
			desc: "First project of maincode agency",
			nextCase: "seveda",
			firstScreenImgUrl: "/static/img/project/maincode-bg-1.png",
			secondScreenImgUrl: "/static/img/project/maincode-bg-2.png"
		}
	},
	{
		item: {
			id: 2,
			title: "Seveda",
			name: "seveda",
			desc: "Second project of maincode agency",
			nextCase: "tokein",
			firstScreenImgUrl: "/static/img/project/seveda-bg-1.png",
			secondScreenImgUrl: "/static/img/project/seveda-bg-2.png"
		}
	},
	{
		item: {
			id: 3,
			title: "TokeIn",
			name: "tokein",
			desc: "Third project of maincode agency",
			nextCase: "needle",
			firstScreenImgUrl: "/static/img/project/token-bg-1.png",
			secondScreenImgUrl: "/static/img/project/token-bg-2.png"
		}
	},
	{
		item: {
			id: 4,
			title: "Needle",
			name: "needle",
			desc: "Fourth project of maincode agency",
			nextCase: "synestesia",
			firstScreenImgUrl: "/static/img/project/needle-bg-1.png",
			secondScreenImgUrl: "/static/img/project/needle-bg-2.png"
		}
	},
	{
		item: {
			id: 5,
			title: "Synestesia",
			name: "synestesia",
			desc: "Fith project of maincode agency",
			nextCase: "bitclave",
			firstScreenImgUrl: "/static/img/project/syn-bg-1.png",
			secondScreenImgUrl: "/static/img/project/syn-bg-2.png"
		}
	},
	{
		item: {
			id: 6,
			title: "Bitclave",
			name: "bitclave",
			desc: "Sixth project of maincode agency",
			nextCase: "pandora",
			firstScreenImgUrl: "/static/img/project/bitclave-bg-1.png",
			secondScreenImgUrl: "/static/img/project/bitclave-bg-2.png"
		}
	},
	{
		item: {
			id: 7,
			title: "Pandora",
			name: "pandora",
			desc: "Seventh project of maincode agency",
			nextCase: "maincode",
			firstScreenImgUrl: "/static/img/project/pandora-bg-1.png",
			secondScreenImgUrl: "/static/img/project/pandora-bg-2.png"
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
