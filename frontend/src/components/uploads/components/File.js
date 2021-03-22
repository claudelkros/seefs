import React from "react";
import "./styles/file.scss";

export default function File({ name, icon }) {
	return (
		<div className="file">
			<div className="file__icon">{icon}</div>
			<div className="file__name">{name}</div>
		</div>
	);
}
