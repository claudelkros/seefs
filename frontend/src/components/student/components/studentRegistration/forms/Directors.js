import React from "react";
import InputField from "./InputField";
import "./styles/directors.scss";

export default function Directors({ director, notabene, register }) {
	return (
		<div className="directors">
			<div className="directors__bloc">
				<div className="bloc__title">
					<b>Directeur(s) {director}</b> /<em>Advisor(s)</em>{" "}
				</div>
				<div className="bloc__content">
					<div className="content__1">
						<p>1)</p>
						<InputField
							reg={register}
							name="directeur1"
							width="250px"
						/>
						<p>Grade</p>
						<InputField
							reg={register}
							name="grade1"
							width="250px"
						/>
					</div>
				</div>
				<div className="bloc__content">
					<div className="content__1">
						<p>2)</p>
						<InputField
							reg={register}
							name="directeur2"
							width="250px"
						/>
						<p>Grade</p>
						<InputField
							reg={register}
							name="grade2"
							width="250px"
						/>
					</div>
				</div>
				<div className="bloc__content">
					<div className="content__1">
						<p>3)</p>
						<InputField
							reg={register}
							name="directeur3"
							width="250px"
						/>
						<p>Grade</p>
						<InputField
							reg={register}
							name="grade3"
							width="250px"
						/>
					</div>
				</div>
				<div className="bloc__content">
					<div className="content__1">
						<p>
							<b>Superviseur si nécessaire</b>
							<em>(Supervisor if necessary)</em>
						</p>
						<InputField
							reg={register}
							name="superviseur1"
							width="150px"
						/>

						<p>Grade</p>
						<InputField
							reg={register}
							name="gradeSuperviseur"
							width="150px"
						/>
					</div>
				</div>
				<div className="bloc__content">
					<div className="content__1">
						<p>Sujet de recherche</p>

						<InputField
							reg={register}
							name="sujetDeRecherche"
							width="550px"
						/>
					</div>
				</div>
				<div className="bloc__content">
					<div className="content__1">
						<table>
							<tbody>
								<tr>
									<th>
										<p>
											AVIS ET SIGNATURE DU (DES)
											DIRECTEUR(S) DES TRAVAUX
										</p>
									</th>
									<th>
										<p>AVIS DU CONSEIL DE DEPARTEMENT</p>
									</th>
								</tr>
								<tr>
									<td>
										<p>
											AVIS DE LA COMMISSION SCIENTIFIQUE
											DE LA FACULTE
										</p>
									</td>
									<td>
										<p>
											AVIS DE LA COMMISSION SCIENTIFIQUE
											DU RECTORAT
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="bloc__content">
					<div className="content__text">{notabene}</div>
				</div>
			</div>
		</div>
	);
}
