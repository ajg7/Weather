import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title, WeatherChart } from "../common";
import { tempAverageCreator } from "../../utils/averageCreators";

const Temperature = props => {
	const { temps } = props;
	const tempData = tempAverageCreator(temps);
	return (
		<div>
			<Title title={"Temperature"} />
			<WeatherChart tempData={tempData} />
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
