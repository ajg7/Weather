import React from "react";
import PropTypes from "prop-types";
import { StyledDescriptor } from "../../styles/common";

const Descriptor = props => {
	const { description, headingNumber } = props;
	return <StyledDescriptor className={"descriptor"}>{headingNumber === 2 ? <h2>{description}</h2> : <h3>{description}</h3>}</StyledDescriptor>;
};

Descriptor.propTypes = {
	description: PropTypes.string,
	headingNumber: PropTypes.number,
};

export default Descriptor;
