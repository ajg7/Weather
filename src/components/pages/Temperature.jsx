import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title, Button } from "../common";

const Temperature = props => {
	const { fetchWeatherData } = props;
	return (
		<div>
			<Title title={"Temperature"} />
			<Button buttonText={"Test"} clickFunc={fetchWeatherData} />
		</div>
	);
};

Temperature.propTypes = {
	fetchWeatherData: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
	return {
		fetchWeatherData: () => dispatch({ type: "FETCH_WEATHER_DATA" }),
	};
};

export default connect(null, mapDispatchToProps)(Temperature);
