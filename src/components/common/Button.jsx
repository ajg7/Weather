import React from "react";
import PropTypes from "prop-types";

const Button = props => {
	const { buttonText, clickFunc } = props;
	return (
		<div>
			<button onClick={clickFunc}>{buttonText}</button>
		</div>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
	clickFunc: PropTypes.func,
};

export default Button;
