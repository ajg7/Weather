import React from "react";
import PropTypes from "prop-types";
import { StyledToggle } from "../../styles/common";

const Toggle = props => {
	const { toggleLabel, changeFunc, classNameText, darkMode } = props;
	return (
		<StyledToggle>
			<label>{toggleLabel}</label>
			<input
				id={"toggle-input"}
				className={classNameText}
				type={"checkbox"}
				name={"toggleSwitch"}
				onChange={changeFunc}
				checked={darkMode}
			/>
		</StyledToggle>
	);
};

Toggle.propTypes = {
	toggleLabel: PropTypes.string,
	changeFunc: PropTypes.func,
	classNameText: PropTypes.string,
	darkMode: PropTypes.bool,
};

export default Toggle;
