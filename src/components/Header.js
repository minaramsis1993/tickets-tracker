import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, addBtnClickHandler, showAddTicket }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAddTicket ? "red" : "green"}
				text={showAddTicket ? "Close" : "Add"}
				btnClickHandler={addBtnClickHandler}
			/>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
