import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "../common";

const WindSpeed = () => {
	// const { windSpeeds } = props;
	return (
		<div>
			<Title title={"Wind Speed"} />
			
		</div>
	);
};

WindSpeed.propTypes = {
	windSpeeds: PropTypes.array
};

const mapStateToProps = state => {
	return {
		windSpeeds: state.weather.windSpeeds,
	};
};

export default connect(mapStateToProps, {})(WindSpeed);
