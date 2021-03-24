import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import PropTypes from "prop-types";
import { kelvinToCelsius } from "../../utils/conversions";

const WeatherChart = props => {
	const { windSpeedData, tempData } = props;
	const chartRef = useRef();
	// const convertedHighs = kelvinToCelsius(tempData[0]);
	const convertedLows = kelvinToCelsius(tempData[1]);

	useEffect(() => {
		const canvas = chartRef.current;
		const ctx = canvas.getContext("2d");
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["M", "T", "W", "R", "F"],
				datasets: [
					{
						label: "Average Wind Speeds",
						fill: false,
						data: windSpeedData,
						backgroundColor: ["red, green, blue"],
					},
				],
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
				maintainAspectRatio: false,
				responsive: false,
			},
		});

		new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["M", "T", "W", "R", "F"],
				datasets: [
					{
						label: "Average Temperatures",
						data: convertedLows,
						backgroundColor: ["red, green, blue"],
					},
				],
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
				maintainAspectRatio: false,
				responsive: false,
			},
		});
	}, [windSpeedData, convertedLows]);

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
