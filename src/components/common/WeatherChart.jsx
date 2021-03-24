import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import PropTypes from "prop-types";


const WeatherChart = () => {
	// const { windSpeedData, tempData } = props;
	const chartRef = useRef();

	useEffect(() => {
		const canvas = chartRef.current;
		const ctx = canvas.getContext("2d");
		console.log(canvas, "dark", ctx, "light");
		new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["M", "T", "W", "R", "F"],
				datasets: [
					{
						label: "Average Wind Speeds",
						data: [9, 4, 3, 6, 10],
					}
				]
			},
			options: {
				maintainAspectRatio: false,
				responsive: false
			}
		});
	}, []);

	return (
		<div>
			<canvas ref={chartRef} width="800" height="400"></canvas>
		</div>
	);
};

WeatherChart.propTypes = {
	windSpeedData: PropTypes.array,
	tempData: PropTypes.array
};

export default WeatherChart;
