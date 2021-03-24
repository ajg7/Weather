import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
