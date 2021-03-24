import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/common";

const Button = props => {
	const { buttonText, clickFunc, value } = props;
	return (
		<StyledButton className={"buttons"}>
			<button onClick={clickFunc} value={value}>
				{buttonText}
			</button>
		</StyledButton>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
	clickFunc: PropTypes.func,
	value: PropTypes.string,
};

export default Button;
