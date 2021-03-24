import React from "react";
import { Reset } from "./styles/global";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/pages";

const App = () => {
	return (
		<>
			<Reset />
			<Switch>
				<Route path="/" component={LandingPage} />
			</Switch>
		</>
	);
};

export default App;
