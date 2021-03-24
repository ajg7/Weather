/*

This custom hook is used to call in asynchronous action calls. 
*@param {fetchFunc} asynchronous action call

I used it to make call to the Weather API, and fetch the data
*/
import { useEffect } from "react";

export const useFetches = fetchFunc => {
	useEffect(() => {
		fetchFunc();
	}, [fetchFunc]);
};
