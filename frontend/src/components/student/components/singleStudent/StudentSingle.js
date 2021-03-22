import React from "react";
import { useSelector } from "react-redux";
import StudentFiles from "./StudentFiles";
import "./styles/studentsingle.scss";

export default function StudentSingle() {
	const student = useSelector((state) => state.studentList.selectedStudent);

	return (
		<div className="studentSingle">
			<div className="studentSingle__mainContent">
				<div className="mainContent">
					<div className="mainContent__header"></div>
					<div className="mainContent__content">
						<div className="mainContent__items">
							<div className="content__title">
								Informations Academiques
							</div>
							<div className="content__item">
								<div className="item__title">Matricule</div>
								<div className="item__value">
									{student.matricule}
								</div>
							</div>
							<div className="content__item">
								<div className="item__title">
									Diplôme d'entré/Lieu d'obtention
								</div>
								<div className="item__value">
									{student.accessDiploma}
								</div>
							</div>
							<div className="content__item">
								<div className="item__title">Moyenne/20</div>
								<div className="item__value">
									{student.average}
								</div>
							</div>
							{/* <div className="content__item">
								<div className="item__title">
									Performance/20
								</div>
								<div className="item__value">Not</div>
							</div> */}
							<div className="content__item">
								<div className="item__title">
									Sujet de recherche
								</div>
								<div className="item__value">
									{student.subject}
								</div>
							</div>
							<div className="content__item">
								<div className="item__title">
									Directeurs(s)/Codirecteurs(Grade)
								</div>
								<div className="item__value">
									{student.encadreur}
								</div>
							</div>
							<div className="content__item">
								<div className="item__title">
									Superviseur(s)(Grade)
								</div>
								<div className="item__value">None</div>
							</div>
						</div>
						<div className="mainContent__items">
							<div className="content__title">
								Informations Personelles
							</div>
							<div className="content__item">
								<div className="item__title">
									Nom et Prenom:
								</div>
								<div className="item__value">
									{student.name}
								</div>
							</div>
							<div className="content__item">
								<div className="item__title">Sexe:</div>
								<div className="item__value">{student.sex}</div>
							</div>
							<div className="content__item">
								<div className="item__title">Nationalité</div>
								<div className="item__value">
									{student.nationalite}
								</div>
							</div>
							<div className="content__item">
								<div className="item__title">
									Date et lieu de Naissance
								</div>
								<div className="item__value">
									{student.birthDate}
								</div>
							</div>
						</div>
						{/* Infos academiques */}
					</div>
				</div>
			</div>
			<div className="studentSingle__sidebar">
				<StudentFiles />
			</div>
		</div>
	);
}
