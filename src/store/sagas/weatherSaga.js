import { takeEvery, call, put } from "redux-saga/effects";
import { token, state } from "../../utils/queryParams";
import axios from "axios";

export function* weatherWatcherSaga() {
	yield takeEvery("FETCH_WEATHER_DATA", weatherWorkerSaga);
}

const fetchWeatherData = () => {
	return axios(`https://api.openweathermap.org/data/2.5/forecast/?q=${state}&appid=${token}`);
};

function* weatherWorkerSaga() {
	try {
		const {
			data: { list },
		} = yield call(fetchWeatherData);

		const temperatures = list.map(ele => {
			return { temperature: ele.main.temp };
		});

		const windSpeeds = list.map(ele => {
			return { windSpeed: ele.wind.speed };
		});

		yield put({ type: "WEATHER_DATA_SUCCESS", list, temperatures, windSpeeds, state });
	} catch (error) {
		yield put({ type: "WEATHER_DATA_FAILURE", error });
	}
}
