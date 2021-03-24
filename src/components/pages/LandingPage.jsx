import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Descriptor, Title, Button } from "../common";
import { useHistory } from "react-router-dom";
import { useFetches } from "../../hooks";

const LandingPage = props => {
	const { fetchWeatherData } = props;
	const history = useHistory();
	const tempHandler = () => history.push("/temp");
	const windHandler = () => history.push("/wind");
	useFetches(fetchWeatherData);

	return (
		<div>
			<header>
				<Title title={"Weather!"} />
			</header>
			<section>
				<Descriptor
					description={"See the Temperature and Wind Speed of your local area!"}
					headingNumber={3}
				/>
				<Descriptor description={"Temperature"} headingNumber={2} />
				<Button buttonText={"Go to Temperatures"} clickFunc={tempHandler} />
				<Descriptor description={"Wind Speed"} headingNumber={2} />
				<Button buttonText={"Go to Wind Speeds"} clickFunc={windHandler} />
			</section>
			<footer>
				<Descriptor description={"Created By: A.J. Gebara"} headingNumber={2} />
			</footer>
		</div>
	);
};

LandingPage.propTypes = {
	fetchWeatherData: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
	return {
		fetchWeatherData: () => dispatch({ type: "FETCH_WEATHER_DATA" }),
	};
};

export default connect(null, mapDispatchToProps)(LandingPage);
