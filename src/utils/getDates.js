/**
 * Get an array of the names of the days as strings, from today up to K days from today.
 * @param {number} k
 * @return {string[]}
 */
export const getNextKDates = k => {
	const daysOfTheWeek = ["Su", "M", "T", "W", "R", "F", "Sa"];
	const days = [];
	const currentDayOfTheWeek = new Date().getDay();
	let day = currentDayOfTheWeek;
	for (let i = 0; i < k; i++) {
		days.push(daysOfTheWeek[day % daysOfTheWeek.length]);
		day++;
	}

	console.log(days);
	return days;
};
