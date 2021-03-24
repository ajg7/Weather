import Chart from "chart.js";
import { useEffect } from "react";

export const useLineGraph = (chartRef, data, dataLabel, xLabels) => {
	// This hook will set up the chart in the useEffect, and set the state of the data being passed down
	// For example, it will take the temp data and then produce a chart with it, or it will take the wind data and make the data
	// params: chartRef, data, typeOfGraph, dataLabel, labels
	useEffect(() => {
		const canvas = chartRef.current;
		const ctx = canvas.getContext("2d");
		new Chart(ctx, {
			type: "line",
			data: {
				labels: xLabels,
				datasets: [
					{
						label: dataLabel,
						fill: false,
						data: data,
						backgroundColor: ["red", "green", "blue", "purple", "orange"],
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
	}, [chartRef, xLabels, dataLabel, data]);
};
