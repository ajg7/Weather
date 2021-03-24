import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title, WeatherChart } from "../common";

const WindSpeed = props => {
	const { windSpeeds } = props;
	return (
		<div>
			<Title title={"Wind Speed"} />
			<WeatherChart windSpeedData={windSpeeds} />
		</div>
	);
};

WindSpeed.propTypes = {
	windSpeeds: PropTypes.array,
};

const mapStateToProps = state => {
	return {
		windSpeeds: state.weather.windSpeeds,
	};
};

export default connect(mapStateToProps, {})(WindSpeed);
