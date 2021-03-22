import { Input } from "@material-ui/core";
import React from "react";
import "./styles/inputField.scss";

export default function InputField({ width, name, value, reg }) {
	const styles = {
		width: { width },
	};

	return (
		<div className="inputField" style={styles.width}>
			<Input
				placeholder=""
				name={name}
				autoComplete="false"
				inputRef={reg}
				inputProps={{ "aria-label": "description" }}
			/>
		</div>
	);
}
