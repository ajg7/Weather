const initialState = {
	data: [],
	temps: [],
	windSpeeds: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "WEATHER_DATA_SUCCESS":
			return {
				...state,
				data: action.list,
				temps: action.temps,
				windSpeeds: action.windSpeeds,
			};
		default:
			return state;
	}
};
