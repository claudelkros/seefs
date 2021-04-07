import React from "react";
import "./styles/formheader.scss";
import Univ from "../../../../../assets/Images/unnamed.png";
import Fs from "../../../../../assets/Images/logo.png";

export default function FormHeader() {
	return (
		<div className="formheader">
			<div className="formheader__bloc1">
				<div className="header1">
					<b>UNIVERSITE DE NGAOUNDERE</b>
				</div>
				<div className="header1">
					<b>FACULTE DES SCIENCES</b>
				</div>
				<div className="header2">
					<b>BP: 454 NGAOUNDERE</b>
				</div>
				<div className="header2">
					{" "}
					<b>
						Courriel: <u>fs@univ-ndere.cm</u>
					</b>
				</div>
				<div className="header2">Site web: http://fs.univ-ndere.cm</div>
			</div>
			<div className="formheader__bloc2">
				<div className="logo1">
					<img src={Univ} alt="Logo univ" />
				</div>
				<div className="logo2">
					<img src={Fs} alt="Logo FS" />
				</div>
			</div>
			<div className="formheader__bloc3">
				<div className="header1">
					<b>UNIVERSITY OF NGAOUNDERE</b>
				</div>
				<div className="header1">
					<b>FACULTY OF SCIENCE</b>
				</div>
				<div className="header2">
					<b>P.O. BOX: 454 NGAOUNDERE</b>
				</div>
				<div className="header2">
					{" "}
					<b>
						Email: <u>fs@univ-ndere.cm</u>{" "}
					</b>
				</div>
				<div className="header2">Site web: http://fs.univ-ndere.cm</div>
			</div>
		</div>
	);
}
