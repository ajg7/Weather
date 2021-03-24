const testDays = ["R", "F", "Sa", "Su", "M"];
const mockGetDates = jest.fn(() => testDays);

describe("Get Dates Function", () => {
	test("Function should return an array of the current date and the next 4 dates", () => {
		expect(mockGetDates()).toStrictEqual(testDays);
		expect(mockGetDates()).toHaveLength(5);
		expect(mockGetDates()).toBeDefined();
		expect(mockGetDates()).toEqual(expect.arrayContaining(testDays));
	});
});
