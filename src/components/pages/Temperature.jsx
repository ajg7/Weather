import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title, WeatherChart } from "../common";

const Temperature = props => {
	const { temps } = props;
	return (
		<div>
			<Title title={"Temperature"} />
			<WeatherChart tempData={temps} />
		</div>
	);
};

Temperature.propTypes = {
	temps: PropTypes.array,
};

const mapStateToProps = state => {
	return {
		temps: state.weather.temps,
	};
};

export default connect(mapStateToProps, {})(Temperature);
