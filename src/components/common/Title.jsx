import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "../../styles/common";

const Title = props => {
	const { title } = props;
	return (
		<StyledTitle className={"title"}>
			<h1>{title}</h1>
		</StyledTitle>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};

export default Title;
