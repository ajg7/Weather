import React from "react";
import { Descriptor, Title } from "../common";

const LandingPage = () => {
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
				<Descriptor description={"UV Index"} headingNumber={2} />
			</section>
		</div>
	);
};

export default LandingPage;
