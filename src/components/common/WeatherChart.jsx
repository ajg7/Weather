import React, { useRef } from "react";
import PropTypes from "prop-types";
import { getNextKDates } from "../../utils/getDates";
import { useChart } from "../../hooks";

const WeatherChart = props => {
	const { data, typeOfGraph, title, units } = props;
	const chartRef = useRef();
	const dates = getNextKDates(5);
	useChart(chartRef, typeOfGraph, data, title, dates, units);
	return (
		<div>
			<canvas ref={chartRef} width="800" height="400"></canvas>
		</div>
	);
};

WeatherChart.propTypes = {
	data: PropTypes.array,
	typeOfGraph: PropTypes.string,
	title: PropTypes.string,
	units: PropTypes.string,
};

export default WeatherChart;
