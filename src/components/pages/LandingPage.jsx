import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Descriptor, Title, Button, WeatherBarChart, WeatherLineChart } from "../common";
import { useFetches } from "../../hooks";
import { windAverageCreator, tempAverageCreator } from "../../utils/averageCreators";
import { StyledLandingPage } from "../../styles/pages";

const LandingPage = props => {
	const { fetchWeatherData, windSpeeds, temps } = props;
	const windSpeedData = windAverageCreator(windSpeeds);
	const tempData = tempAverageCreator(temps);
	const [active, setActive] = useState("");
	const activateChart = event => {
		setActive(event.target.value);
	};
	useFetches(fetchWeatherData);

	return (
		<StyledLandingPage>
			<header>
				<Title title={"Weather!"} />
			</header>
			<section>
				<Descriptor
					description={"See the Temperature and Wind Speed of Nebraska!"}
					headingNumber={3}
				/>
				<Button buttonText={"Wind Speed"} value={"wind"} clickFunc={activateChart} />
				<Button buttonText={"Temperature"} value={"temp"} clickFunc={activateChart} />
				{active === "wind" ? <WeatherLineChart windSpeedData={windSpeedData} /> : null}
				{active === "temp" ? <WeatherBarChart tempData={tempData} /> : null}
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
	temps: PropTypes.array,
};

const mapStateToProps = state => {
	return {
		windSpeeds: state.weather.windSpeeds,
		temps: state.weather.temps,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchWeatherData: () => dispatch({ type: "FETCH_WEATHER_DATA" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
