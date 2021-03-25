import React from "react";
import PropTypes from "prop-types";
import { StyledToggle } from "../../styles/common";

const Toggle = props => {
	const { toggleLabel, changeFunc, classNameText } = props;
	return (
		<StyledToggle>
			<label>{toggleLabel}</label>
			<input
				id={"toggle-input"}
				className={classNameText}
				type={"checkbox"}
				name={"toggleSwitch"}
				onChange={changeFunc}
			/>
		</StyledToggle>
	);
};

Toggle.propTypes = {
	toggleLabel: PropTypes.string,
	changeFunc: PropTypes.func,
	classNameText: PropTypes.string,
};

export default Toggle;
