import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "./styles/backbtn.scss";
import { Link } from "react-router-dom";

export default function BackBtnView(props) {
	return (
		<Link to={props.link}>
			<div className="back">
				<div className="back__icon">
					<KeyboardBackspaceIcon className="icon" />
				</div>

				<div className="back__text">
					<p>Retour</p>
				</div>
			</div>
		</Link>
	);
}
