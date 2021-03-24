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
            <footer>
                <Descriptor description={"Created By: A.J. Gebara"} headingNumber={2} />
            </footer>
		</div>
	);
};

export default LandingPage;
