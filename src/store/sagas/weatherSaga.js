import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
	yield takeEvery("FETCH_WEATHER_DATA", workerSaga);
}

const fetchWeatherData = () => {
	const state = "Nebraska";
	const token = "b1d1b7f31f0345a8b377d968d5e018c3";
	return axios(`https://api.openweathermap.org/data/2.5/forecast/?q=${state}&appid=${token}`);
};

function* workerSaga() {
	try {
		const {
			data: { list },
		} = yield call(fetchWeatherData);

		const temps = list.map(ele => {
			return { temp: ele.main.temp };
		});

		const windSpeeds = list.map(ele => {
			return { windSpeed: ele.wind.speed };
		});

		yield put({ type: "WEATHER_DATA_SUCCESS", list, temps, windSpeeds });
	} catch (error) {
		yield put({ type: "WEATHER_DATA_FAILURE", error });
	}
}
