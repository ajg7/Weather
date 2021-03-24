import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "../common";

const Temperature = () => {
	// const { temps } = props;
	return (
		<div>
			<Title title={"Temperature"} />
			
		</div>
	);
};

Temperature.propTypes = {
	temps: PropTypes.array
};

const mapStateToProps = state => {
	return {
		temps: state.weather.temps,
	};
};

export default connect(mapStateToProps, {})(Temperature);
