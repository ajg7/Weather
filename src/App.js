import React from "react";
import { Reset, DarkMode } from "./styles/global";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/pages";
import { useDarkMode } from "./hooks";

const App = () => {
	const [darkMode, setDarkMode] = useDarkMode(false);
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
