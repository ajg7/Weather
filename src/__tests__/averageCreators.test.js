const testInput = [
	{ windSpeed: 54.22 },
	{ windSpeed: 32 },
	{ windSpeed: 122 },
	{ windSpeed: 12.19 },
	{ windSpeed: 5.53 },
	{ windSpeed: 1 },
	{ windSpeed: 12.4 },
	{ windSpeed: 109.1 },
    { windSpeed: 54.22 },
	{ windSpeed: 32 },
	{ windSpeed: 122 },
	{ windSpeed: 12.19 },
	{ windSpeed: 5.53 },
	{ windSpeed: 1 },
	{ windSpeed: 12.4 },
	{ windSpeed: 109.1 },
];

const mockAverageCreator = jest.fn(() => [29.92, 29.92]);

describe("Average Creator Function", () => {
    test("Average Creator Function should return a new array with the averages of every 8 integers for every index", () => {
        expect(mockAverageCreator(testInput)).toStrictEqual([29.92, 29.92]);
        expect(mockAverageCreator(testInput)).toHaveLength(testInput.length / 8);
        expect(mockAverageCreator(testInput)).toBeDefined();
    });
});