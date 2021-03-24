import React from "react";
import { Descriptor, Title, Button } from "../common";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
	const history = useHistory();
	const tempHandler = () => history.push("/temp");
	const uvHandler = () => history.push("/uv");
    
	return (
		<div>
			<header>
				<Title title={"Weather!"} />
			</header>
			<section>
				<Descriptor
					description={"See the Temperature and UV Index of your local area!"}
					headingNumber={3}
				/>
				<Descriptor description={"Temperature"} headingNumber={2} />
				<Button buttonText={"Go to Temperatures"} clickFunc={tempHandler} />
				<Descriptor description={"UV Index"} headingNumber={2} />
				<Button buttonText={"Go to UV Indexes"} clickFunc={uvHandler} />
			</section>
			<footer>
				<Descriptor description={"Created By: A.J. Gebara"} headingNumber={2} />
			</footer>
		</div>
	);
};

export default LandingPage;
