import React from "react";
import { Reset } from "./styles/global";
import { Route, Switch } from "react-router-dom";
import { LandingPage, Temperature, UVIndex } from "./components/pages";

const App = () => {
	return (
		<>
			<Reset />
			<Switch>
				<Route path="/temp" component={Temperature} />
				<Route path="/uv" component={UVIndex} />
				<Route path="/" component={LandingPage} />
			</Switch>
		</>
	);
};

export default App;
