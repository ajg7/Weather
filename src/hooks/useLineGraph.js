import Chart from "chart.js";
import { useEffect } from "react";

export const useLineGraph = (chartRef, data, dataLabel, xLabels, units) => {
	useEffect(() => {
		const canvas = chartRef.current;
		const ctx = canvas.getContext("2d");
		new Chart(ctx, {
			type: "line",
			data: {
				labels: xLabels,
				datasets: [
					{
						label: `${dataLabel} (${units})`,
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
	}, [chartRef, xLabels, dataLabel, data, units]);
};
