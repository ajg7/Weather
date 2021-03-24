import React from "react";
import { Reset } from "./styles/global";
import { Route, Switch } from "react-router-dom";
import { LandingPage, Temperature, WindSpeed } from "./components/pages";

const App = () => {
	return (
		<>
			<Reset />
			<Switch>
				<Route path="/temp" component={Temperature} />
				<Route path="/wind" component={WindSpeed} />
				<Route path="/" component={LandingPage} />
			</Switch>
		</>
	);
};

export default App;
