import { useEffect } from "react";

export const useLocalStorage = (key, value) => {
	useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);
};
