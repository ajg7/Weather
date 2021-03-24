import React from "react";
import PropTypes from "prop-types";

const Descriptor = props => {
    const { description } = props;
    return (
        <div>
            <h3>{description}</h3>
        </div>
    );
};

Descriptor.propTypes = {
    description: PropTypes.string
};

export default Descriptor;