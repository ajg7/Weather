import React from "react";
import { Reset, DarkMode } from "./styles/global";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/pages";
import { useDarkMode, useLocalStorage } from "./hooks";

const App = () => {
	const [darkMode, setDarkMode] = useDarkMode(JSON.parse(localStorage.getItem("isDark")));
	useLocalStorage("isDark", darkMode);
	return (
		<>
			<Reset />
			<DarkMode />
			<Switch>
				<Route path="/">
					<LandingPage darkMode={darkMode} setDarkMode={setDarkMode} />
				</Route>
			</Switch>
		</>
	);
};

export default App;
