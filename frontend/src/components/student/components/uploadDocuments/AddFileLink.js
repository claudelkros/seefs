import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./styles/addFileLink.scss";

export default function AddFileLink({ title, handleClick }) {
	return (
		<div className="addFileLink" onClick={handleClick}>
			<AddIcon className="icon" />
			<span>{title}</span>
		</div>
	);
}
