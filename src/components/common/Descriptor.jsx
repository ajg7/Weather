import React from "react";
import PropTypes from "prop-types";

const Descriptor = props => {
	const { description, headingNumber } = props;
	return (
		<div>
			{headingNumber === 2 ? <h2>{description}</h2> : <h3>{description}</h3>}
		</div>
	);
};

Descriptor.propTypes = {
	description: PropTypes.string,
	headingNumber: PropTypes.number,
};

export default Descriptor;
