import React from "react";
import "./styles/button.scss";

export default function Button({
	title,
	width,
	height,
	handleSubmit,
	buttonType,
	onClick,
	disabled,
	form,
}) {
	const backgroundColor = buttonType == "primary" ? "#0288d1" : "red";
	const disable = disabled ? true : false;

	const style = {
		width: { width },
		height: { height },
		backgroundColor: { backgroundColor },
	};

	return (
		<input
			type="submit"
			className="button"
			value={title}
			style={(style.width, style.height, style.backgroundColor)}
			onClick={onClick}
			disabled={disable}
			form={form}
		/>
	);
}
