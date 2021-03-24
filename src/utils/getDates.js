export const getDates = () => {
	const date = new Date();
	const fiveDay = [];
	let count = 0;
	while (count < 5) {
		fiveDay.push(`${date.getMonth() + 1}/${date.getDate() + count}`);
		count++;
	}

	return fiveDay;
};
