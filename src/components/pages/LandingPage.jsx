import React from "react";
import { Descriptor, Title, Button } from "../common";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
	const history = useHistory();
	const tempHandler = () => history.push("/temp");
	const windHandler = () => history.push("/uv");

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

export default LandingPage;
