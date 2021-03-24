import React, { useRef } from "react";
import PropTypes from "prop-types";
import { getDates } from "../../utils/getDates";
import { useBarGraph } from "../../hooks";

const WeatherBarChart = props => {
	const { tempData } = props;
	const chartRef = useRef();
	const dates = getDates();
	useBarGraph(chartRef, tempData, ["Average Highs", "Average Lows"], dates);
	return (
		<div>
			<canvas ref={chartRef} width="800" height="400"></canvas>
		</div>
	);
};

WeatherBarChart.propTypes = {
	tempData: PropTypes.array,
};

export default WeatherBarChart;
