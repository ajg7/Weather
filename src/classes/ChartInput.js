export class ChartInput {
	constructor(chartRef, typeOfGraph, data, dataLabel, xLabels, units, darkMode) {
		this.chartRef = chartRef;
		this.typeOfGraph = typeOfGraph;
		this.data = data;
		this.dataLabel = dataLabel;
		this.xLabels = xLabels;
		this.units = units;
		this.darkMode = darkMode;
	}
}
