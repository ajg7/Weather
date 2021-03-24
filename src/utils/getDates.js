/*
	This function grabs the current day of the week, and then the next subsequent 4 days, and returns an array of those days.
	This is for the labels in the graphs
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
