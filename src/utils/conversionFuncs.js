/**
 * Converts data from kelvin to celsius
 * @param {number[]} data
 * @return {number[]}
 */
export const kelvinToCelsius = data => data.map(datum => (datum - 273.15).toFixed(2)); //Rounds numbers to 100s place

/**
 * Converts data from celsius to kelvin
 * @param {number[]} data
 * @return {number[]}
 */
export const kelvinToFahrenheit = data => data.map(datum => (1.8 * (datum - 273) + 32).toFixed(2)); //Rounds numbers to 100s place

/**
 * Converts data from celsius to fahrenheit
 * @param {number[]} data
 * @return {number[]}
 */
export const celsiusToFahrenheit = data => data.map(datum => (1.8 * datum + 32).toFixed(2)); //Rounds numbers to 100s place

/**
 * Converts data from meters per second to miles per hour
 * @param {number[]} data
 * @return {number[]}
 */
export const metersPerSecondToMPH = data =>
	data.map(datum => ((datum * 3600) / 1609.34).toFixed(2)); //Rounds numbers to 100s place
