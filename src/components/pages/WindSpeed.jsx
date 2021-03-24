import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title, WeatherLineChart } from "../common";
import { windAverageCreator } from "../../utils/averageCreators";

const WindSpeed = props => {
	const { windSpeeds } = props;
	const windSpeedData = windAverageCreator(windSpeeds);
	return (
		<div>
			<Title title={"Wind Speed"} />
			<WeatherLineChart windSpeedData={windSpeedData} />
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
