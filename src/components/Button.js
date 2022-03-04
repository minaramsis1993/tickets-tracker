import React from "react";
import PropTypes from "prop-types";
import loading from "../svg/loading.svg";

const Button = ({
	color,
	text,
	isDisabled,
	isLoading,
	btnClickHandler,
	classes
}) => {
	return (
		<button
			className={`btn ${classes}`}
			onClick={() => btnClickHandler()}
			disabled={isDisabled}
			style={{ backgroundColor: color }}
		>
			{text} {isLoading && <img src={loading} width="27" alt="loading" />}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue"
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	btnClickHandler: PropTypes.func
};

export default Button;
