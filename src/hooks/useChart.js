import Chart from "chart.js";
import { useEffect } from "react";

export const useChart = chartValues => {
	useEffect(() => {
		const canvas = chartValues.chartRef.current;
		const ctx = canvas.getContext("2d");
		new Chart(ctx, {
			type: chartValues.typeOfGraph,
			data: {
				labels: chartValues.xLabels,
				datasets: [
					{
						label: `${chartValues.dataLabel} (${chartValues.units})`,
						data: chartValues.data,
						fill: chartValues.darkMode ? true : false,
						borderColor: chartValues.darkMode ? "orange" : "blue",
						backgroundColor: ["green", "red", "orange", "yellow", "brown"],
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
	}, [chartValues]);
};
