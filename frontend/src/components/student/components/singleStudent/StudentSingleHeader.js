import React from "react";
import { ETUDIANT } from "../../../../navigation/CONSTANTS";
import BackBtnView from "../../../backbtn/BackBtnView";

import "./styles/studentSingleHeader.scss";

export default function StudentSingleHeader() {
	return (
		<div className="studentSingleHeader">
			<div className="header__backBtn">
				<BackBtnView link={ETUDIANT} />
			</div>

			<div className="header__text">N'a pas encore soutenu</div>
		</div>
	);
}
