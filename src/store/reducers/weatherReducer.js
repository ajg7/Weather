const initialState = {
	data: [],
	temperatures: [],
	windSpeeds: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "WEATHER_DATA_SUCCESS":
			return {
				...state,
				data: action.list,
				temperatures: action.temperatures,
				windSpeeds: action.windSpeeds,
			};
		default:
			return state;
	}
};
