import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Descriptor, Title, Button, WeatherChart, Toggle } from "../common";
import { useFetches } from "../../hooks";
import { getAveragesForKGroups } from "../../utils/getAverages";
import { StyledLandingPage } from "../../styles/pages";

const LandingPage = props => {
	const { fetchWeatherData, windSpeeds, temperatures, setDarkMode, darkMode } = props;
	const windSpeedData = getAveragesForKGroups(
		windSpeeds.map(windSpeed => windSpeed.windSpeed),
		8 // The API returns the 40 most recent measurements, measured every 3 hours. To get all measurements in 24 hours (1 day), you must take 8 measurements.
	);
	const temperatureData = getAveragesForKGroups(
		temperatures.map(temperature => temperature.temperature),
		8 // The API returns the 40 most recent measurements, measured every 3 hours. To get all measurements in 24 hours (1 day), you must take 8 measurements.
	);
	const [active, setActive] = useState("");
	const activateChart = event => setActive(event.target.value);
	const change = event => setDarkMode(event.target.checked);
	useFetches(fetchWeatherData);

	return (
		<StyledLandingPage>
			<header>
				<Title title={"Weather!"} />
			</header>
			<div>
				<Toggle toggleLabel={"Dark Mode"} changeFunc={change} />
			</div>
			<section>
				<Descriptor
					description={"See the Temperature and Wind Speed of Nebraska!"}
					headingNumber={3}
				/>
				<Descriptor description={"Click to See a Graph"} headingNumber={3} />
				<Button buttonText={"Wind Speed"} value={"wind"} clickFunc={activateChart} />
				<Button buttonText={"Temperature"} value={"temp"} clickFunc={activateChart} />
				{active === "wind" ? (
					<WeatherChart
						className="chart"
						units={"m/s"}
						title={"Average Wind Speed"}
						data={windSpeedData}
						typeOfGraph={"line"}
						darkMode={darkMode}
					/>
				) : null}
				{active === "temp" ? (
					<WeatherChart
						className="chart"
						units={"K"}
						title={"Average Temperature"}
						data={temperatureData}
						typeOfGraph={"bar"}
					/>
				) : null}
			</section>
			<footer>
				<Descriptor description={"Created By: A.J. Gebara"} headingNumber={2} />
			</footer>
		</StyledLandingPage>
	);
};

LandingPage.propTypes = {
	fetchWeatherData: PropTypes.func,
	windSpeeds: PropTypes.array,
	temperatures: PropTypes.array,
	setDarkMode: PropTypes.func,
	darkMode: PropTypes.bool,
};

const mapStateToProps = state => {
	return {
		windSpeeds: state.weather.windSpeeds,
		temperatures: state.weather.temperatures,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchWeatherData: () => dispatch({ type: "FETCH_WEATHER_DATA" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
