const initialState = {
	data: [],
	temperatures: [],
	windSpeeds: [],
	state: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "WEATHER_DATA_SUCCESS":
			return {
				...state,
				data: action.list,
				temperatures: action.temperatures,
				windSpeeds: action.windSpeeds,
				state: action.state,
			};
		default:
			return state;
	}
};
