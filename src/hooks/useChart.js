/*
Using Chart.js, this hook takes data, and produces a graph
*@param {chartRef} You need to useRef in the component that uses useChart
*@param {typeOfGraph} line, bar, or pie
*@param {data} data supplied in JSON format
*@param {dataLabel} title of the graph
*@param {xLabels} labels on the x-axis of the graph
*@param {units} unit of measurements for the graph
*/
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
