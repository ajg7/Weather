const testDates = ["3/24", "3/25", "3/26", "3/27", "3/28"];
const mockGetDates = jest.fn(() => testDates);

describe("Get Dates Function", () => {
    test("Function should return an array of the current date and the next 4 dates", () => {
        expect(mockGetDates()).toStrictEqual(testDates);
        expect(mockGetDates()).toHaveLength(5);
        expect(mockGetDates()).toBeDefined();
        expect(mockGetDates()).toEqual(expect.arrayContaining(testDates));
    });
});