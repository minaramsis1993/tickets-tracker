import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, isDisabled, isLoading, btnClickHandler }) => {
	const onBtnClick = (e) => {
		console.log("clicked");
		btnClickHandler(e);
	};
	return (
		<button
			className="btn"
			onClick={onBtnClick}
			disabled={isDisabled}
			style={{ backgroundColor: color }}
		>
			{text} {isLoading ? "loading" : ""}
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
