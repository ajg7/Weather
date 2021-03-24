import Chart from "chart.js";
import { useEffect } from "react";

export const useBarGraph = (chartRef, data, dataLabel, xLabels) => {
	useEffect(() => {
		const canvas = chartRef.current;
		const ctx = canvas.getContext("2d");
		new Chart(ctx, {
			type: "bar",
			data: {
				labels: xLabels,
				datasets: [
					{
						label: dataLabel,
						data: data[0],
						backgroundColor: ["red", "green", "blue", "purple", "orange"],
					},
					{
						label: "Average Lows",
						data: data[1],
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
	}, [chartRef, xLabels, dataLabel, data]);
};
