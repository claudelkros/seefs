import React from "react";
import InputField from "./InputField";
import "./styles/formtitle.scss";

export default function FormTitle({ cycle, cycleEng, register }) {
	return (
		<div className="formtitle">
			<div className="formtitle__year">
				<b>Année académique</b>
				<em>(Academic year): </em>{" "}
				<b>
					{" "}
					20
					<InputField
						reg={register}
						name="academicYear1"
						width="20px"
					/>
					/20
					<InputField
						reg={register}
						name="academicYear2"
						width="20px"
					/>
				</b>
			</div>
			<div className="formtitle__type">
				<b className="maintitle">
					FICHE DE DEMANDE D'ADMISSION {cycle}
				</b>
				<div className="secondtitle">
					<em>APPLICATION FORM FOR ADMISSION INTO {cycleEng}</em>
				</div>
				<div className="caption">
					(A remplir en caracteres d'imprimerie/to be filled in
					capital letters)
				</div>
			</div>
		</div>
	);
}
