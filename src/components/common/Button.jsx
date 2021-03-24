import React from "react";
import PropTypes from "prop-types";

const Button = props => {
	const { buttonText, clickFunc, value } = props;
	return (
		<div>
			<button onClick={clickFunc} value={value}>
				{buttonText}
			</button>
		</div>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
	clickFunc: PropTypes.func,
	value: PropTypes.string,
};

export default Button;
