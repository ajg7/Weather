import { useState } from "react";

export const useDarkMode = () => {
	localStorage.GetItem("isDark") === undefined ? localStorage.SetItem("isDark", false) : null;
	const [isDark, setIsDark] = useState(false);
	isDark ? setIsDark(true) : setIsDark(false);
	localStorage.SetItem("isDark", isDark);
	console.log("Hi");
	return [isDark];
	// this will return a boolean, which can be used in the styled components
};
