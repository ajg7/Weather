import React from "react";
import PropTypes from "prop-types";

const Title = props => {
	const { title } = props;
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};

export default Title;
