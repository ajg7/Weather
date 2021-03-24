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
	const averages = [];
	let count = 1;
	let accumulator = 0;

	const temps = data.map(temp => temp.temp);

	for (const temp of temps) {
		if (count % 8 === 0) {
			const average = accumulator / 8;
			averages.push(average.toFixed(2));
			accumulator = 0;
		}
		accumulator += temp;
		count++;
	}

	return averages;
};
