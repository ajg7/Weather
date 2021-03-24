/*
	The data from the API returns the temperature and wind speed of every 3 hours for 5 days. 
	I decided to simply take the average of each day.
	This function takes an array, takes the average of every k values, and then creates a new array with each average value
*/

const getAverage = nums => {
	let sum = 0;
	for (const num of nums) {
		sum += num;
	}
	return (sum / nums.length).toFixed(2);
};

export const getAveragesForKGroups = (data, k) => {
	const averages = [];

	for (let i = 0; i < data.length; i += k) {
		const nums = data.slice(i, i + k);
		const roundedAverage = getAverage(nums); // Rounds to 100s place
		averages.push(roundedAverage);
	}
	return averages;
};
