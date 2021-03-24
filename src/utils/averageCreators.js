export const windAverageCreator = data => {
	const averages = [];
	let count = 1;
	let accumulator = 0;

	for (const datum of data) {
		if (count % 8 === 0) {
			const average = accumulator / 8;
			averages.push(average.toFixed(2));
			accumulator = 0;
		}
		accumulator += datum.windSpeed;
		count++;
	}
	return averages;
};

export const tempAverageCreator = data => {
	const highAverages = [];
	const lowAverages = [];
	let count = 1;
	let accumulator = 0;

	const highs = data.map(high => high.high);
	const lows = data.map(low => low.low);

	for (const high of highs) {
		if (count % 8 === 0) {
			const average = accumulator / 8;
			highAverages.push(average.toFixed(2));
			accumulator = 0;
		}
		accumulator += high;
		count++;
	}

	count = 1;
	for (const low of lows) {
		if (count % 8 === 0) {
			const average = accumulator / 8;
			lowAverages.push(average.toFixed(2));
			accumulator = 0;
		}
		accumulator += low;
		count++;
	}
	return [highAverages, lowAverages];
};
