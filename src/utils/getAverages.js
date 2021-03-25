/**
 * Returns an average of numbers from an array
 * @param {number[]} nums
 * @return {number}
 */
const getAverage = nums => {
	let sum = 0;
	for (const num of nums) {
		sum += num;
	}
	return sum / nums.length;
};

/**
 * Partitions array of numbers into groups of size k and calculates the average of each group
 * Note: the last group may be less than k if data.length is not divisible by k.
 * @param {number[]} data
 * @param {number} k
 * @return {number[]}
 */
export const getAveragesForKGroups = (data, k) => {
	const averages = [];

	for (let i = 0; i < data.length; i += k) {
		const nums = data.slice(i, i + k);
		const roundedAverage = getAverage(nums).toFixed(2); // Rounds to 100s place
		averages.push(roundedAverage);
	}
	return averages;
};
