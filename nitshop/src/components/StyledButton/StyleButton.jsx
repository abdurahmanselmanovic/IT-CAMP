import React from "react";
import "./styleButton.css";

export const StyledButton = (props) => {
	var ButtonText = "Click me";
	function buttonHandler() {
		console.log("clicked");
		ButtonText = "CLICKED!";
		return ButtonText;
	}
	return (
		<button className="styledButton" onClick={buttonHandler}>
			{props.innerText}
		</button>
	);
};
