import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = isDark => {
	const [darkMode, setDarkMode] = useState(isDark);
	useEffect(() => {
		const element = window.document.body;
		if (darkMode) {
			element.classList.add("dark-mode");
		} else {
			element.classList.remove("dark-mode");
		}
	}, [darkMode]);


	return [darkMode, setDarkMode];
};
