import React, { useRef } from "react";
import PropTypes from "prop-types";
import { getNextKDates } from "../../utils/getDates";
import { useChart } from "../../hooks";
import { ChartInput } from "../../classes";
import { StyledWeatherChart } from "../../styles/common";

const WeatherChart = props => {
	const { data, typeOfGraph, title, units, darkMode } = props;
	const chartRef = useRef();
	const dates = getNextKDates(5);
	const chartValues = new ChartInput(chartRef, typeOfGraph, data, title, dates, units, darkMode);
	useChart(chartValues);
	return (
		<StyledWeatherChart className="weather-chart">
			<canvas ref={chartRef}></canvas>
		</StyledWeatherChart>
	);
};

WeatherChart.propTypes = {
	data: PropTypes.array,
	typeOfGraph: PropTypes.string,
	title: PropTypes.string,
	units: PropTypes.string,
	darkMode: PropTypes.bool,
};

export default WeatherChart;
