import React from "react";
import { useSelector } from "react-redux";
import { ETUDIANT } from "../../../../../navigation/CONSTANTS";
import BackBtnView from "../../../../backbtn/BackBtnView";
import Button from "../../../../button/Button";
import CycleSelect from "./CycleSelect";
import "./styles/registrationheader.scss";

export default function RegistrationHeader() {
	const cycle = useSelector((state) => state.studentRegistration.cycle);

	return (
		<div className="registrationHeader">
			<div className="registrationHeader__backBtn">
				<BackBtnView link={ETUDIANT} />
			</div>
			<div className="registrationHeader__btnGroup">
				<div className="btnGroup__select">
					<div className="select__text">
						Veuillez choisir votre cycle
					</div>
					<div className="select__select">
						<CycleSelect />
					</div>
				</div>
				<div className="btnGroup__download">
					{cycle === "null" || !cycle ? (
						""
					) : (
						<Button
							title="Télécharger"
							buttonType="primary"
							form="hook-form"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
