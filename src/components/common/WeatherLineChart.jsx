import React, { useRef } from "react";
import PropTypes from "prop-types";
import { getDates } from "../../utils/getDates";
import { useLineGraph } from "../../hooks";

const WeatherLineChart = props => {
	const { windSpeedData } = props;
	const chartRef = useRef();
	const dates = getDates();
	useLineGraph(chartRef, windSpeedData, "Average Wind Speed", dates, "m/s");
	return (
		<div>
			<canvas ref={chartRef} width="800" height="400"></canvas>
		</div>
	);
};

WeatherLineChart.propTypes = {
	windSpeedData: PropTypes.array,
	tempData: PropTypes.array,
};

export default WeatherLineChart;
