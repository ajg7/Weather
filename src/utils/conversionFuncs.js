/**
 * Converts data from kelvin to celsius and returns the resulting array
 * @param {number[]} data
 */
export const kelvinToCelsius = data => data.map(datum => (datum - 273.15).toFixed(2)); //Rounds numbers to 100s place

/**
 * Converts data from celsius to kelvin and returns the resulting array
 * @param {number[]} data
 */
export const kelvinToFahrenheit  = data => data.map(datum => (1.8 * (datum - 273) + 32).toFixed(2)); //Rounds numbers to 100s place

/**
 * Converts data from celsius to fahrenheit and returns the resulting array
 * @param {number[]} data
 */
export const celsiusToFahrenheit  = data => data.map(datum => (1.8 * datum + 32).toFixed(2)); //Rounds numbers to 100s place