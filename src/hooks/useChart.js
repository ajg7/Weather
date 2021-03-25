import Chart from "chart.js";
import { useEffect } from "react";

export const useChart = (chartRef, typeOfGraph, data, dataLabel, xLabels, units) => {
	useEffect(() => {
		const canvas = chartRef.current;
		const ctx = canvas.getContext("2d");
		new Chart(ctx, {
			type: typeOfGraph,
			data: {
				labels: xLabels,
				datasets: [
					{
						label: `${dataLabel} (${units})`,
						data: data,
						fill: false,
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
	}, [chartRef, typeOfGraph, xLabels, dataLabel, data, units]);
};
