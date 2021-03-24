import React, { useRef } from "react";
import PropTypes from "prop-types";
import { getDates } from "../../utils/getDates";
import { useLineGraph, useBarGraph } from "../../hooks/";

const WeatherChart = props => {
	const { windSpeedData, tempData } = props;
	const chartRef = useRef();
	const dates = getDates();
	useLineGraph(chartRef, windSpeedData, "Average Speed", dates);
	useBarGraph(chartRef, tempData, ["Average Highs", "Average Lows"], dates);
	return (
		<div>
			<canvas ref={chartRef} width="800" height="400"></canvas>
		</div>
	);
};

WeatherChart.propTypes = {
	windSpeedData: PropTypes.array,
	tempData: PropTypes.array,
};

export default WeatherChart;
