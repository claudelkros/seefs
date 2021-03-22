import React from "react";
import InputField from "./InputField";
import "./styles/academic.scss";

export default function AcademicRecords({ univRecords, register }) {
	return (
		<div className="academic">
			<div className="academic__title">
				<b>
					ETUDES ANTERIEURES <em>(PREVIOUS ACADEMIC RECORDS)</em>
				</b>
			</div>
			<div className="academic__subtitle">
				<b>
					A-Secondaires <em>(College and High School)</em>
				</b>
			</div>
			<div className="academic__table">
				<table>
					<tbody>
						<tr>
							<th>
								<div className="header">
									<b>Année scolaire</b>
									<em>Academic year</em>
								</div>
							</th>
							<th>
								<div className="header">
									<b>Etablissement</b>
									<em>Etablissement</em>
								</div>
							</th>
							<th>
								<div className="header">
									<b>Diplômes obtenus</b>
									<em>Passed certificates</em>
								</div>
							</th>
							<th>
								<div className="header">
									<b>Mention</b>
									<em>Grade</em>
								</div>
							</th>
						</tr>
						<tr>
							<td>
								<InputField
									reg={register}
									name="academicYearSecondaire1"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="etablissement1"
									width="100px"
								/>
							</td>
							<td>
								BEPC / <em>GCE OL</em>
							</td>
							<td>
								<InputField
									reg={register}
									name="mention1"
									width="100px"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<InputField
									reg={register}
									name="academicYearSecondaire2"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="etablissement2"
									width="100px"
								/>
							</td>
							<td>Probatoire</td>
							<td>
								<InputField
									reg={register}
									name="mention2"
									width="100px"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<InputField
									reg={register}
									name="academicYearSecondaire3"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="etablissement3"
									width="100px"
								/>
							</td>
							<td>
								Baccalauréat / <em>GCE AL</em>
							</td>
							<td>
								<InputField
									reg={register}
									name="mention3"
									width="100px"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="academic__subtitle">
				<b>
					B-Universitaires <em>(University studies)</em>
				</b>
			</div>
			<div className="academic__table">
				<table>
					<tbody>
						<tr>
							<th className="big">
								<div className="header">
									<b>
										Année première inscription/Année
										validation
									</b>
									<em>1st registration/validation</em>
								</div>
							</th>
							<th>
								<div className="header">
									<b>Université</b>
									<em>University</em>
								</div>
							</th>
							<th>
								<div className="header">
									<b>Mention</b>
									<em>(Grade)</em>
								</div>
							</th>
						</tr>
						<tr>
							<td className="registrationYear">
								<div className="niveau">
									<b>Niveau I (Level I)</b>
									<p>
										20
										<InputField
											reg={register}
											name="niveau11"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="niveau12"
											width="20px"
										/>
									</p>
								</div>
								ou
								<div className="semestre1">
									<b>Semestre 1</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre11"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre12"
											width="20px"
										/>
									</p>
								</div>
								-
								<div className="semestre2">
									<b>Semestre 2</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre21"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre22"
											width="20px"
										/>
									</p>
								</div>
							</td>
							<td>
								<InputField
									reg={register}
									name="universite1"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="mentionniveau1"
									width="100px"
								/>
							</td>
						</tr>
						<tr>
							<td className="registrationYear">
								<div className="niveau">
									<b>Niveau II (Level II)/DEUG</b>
									<p>
										20
										<InputField
											reg={register}
											name="niveau21"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="niveau22"
											width="20px"
										/>
									</p>
								</div>
								ou
								<div className="semestre1">
									<b>Semestre 3</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre31"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre32"
											width="20px"
										/>
									</p>
								</div>
								-
								<div className="semestre2">
									<b>Semestre 4</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre41"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre42"
											width="20px"
										/>
									</p>
								</div>
							</td>
							<td>
								<InputField
									reg={register}
									name="universite2"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="mentionniveau2"
									width="100px"
								/>
							</td>
						</tr>
						<tr>
							<td className="registrationYear">
								<div className="niveau">
									<b>Niveau III (Level III)/Licence</b>
									<p>
										20
										<InputField
											reg={register}
											name="niveau31"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="niveau32"
											width="20px"
										/>
									</p>
								</div>
								ou
								<div className="semestre1">
									<b>Semestre 5</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre51"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre52"
											width="20px"
										/>
									</p>
								</div>
								-
								<div className="semestre2">
									<b>Semestre 6</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre61"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre62"
											width="20px"
										/>
									</p>
								</div>
							</td>
							<td>
								<InputField
									reg={register}
									name="universite3"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="mentionniveau3"
									width="100px"
								/>
							</td>
						</tr>
						<tr>
							<td className="registrationYear">
								<div className="niveau">
									<b>Niveau IV (Level IV)/Master I</b>
									<p>
										20
										<InputField
											reg={register}
											name="niveau41"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="niveau42"
											width="20px"
										/>
									</p>
								</div>
								ou
								<div className="semestre1">
									<b>Master I</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre71"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre72"
											width="20px"
										/>
									</p>
								</div>
								-
								<div className="semestre2">
									<b>Master I</b>
									<p>
										20
										<InputField
											reg={register}
											name="semestre81"
											width="20px"
										/>
										/20
										<InputField
											reg={register}
											name="semestre82"
											width="20px"
										/>
									</p>
								</div>
							</td>
							<td>
								<InputField
									reg={register}
									name="universite4"
									width="100px"
								/>
							</td>
							<td>
								<InputField
									reg={register}
									name="mentionniveau4"
									width="100px"
								/>
							</td>
						</tr>
						{univRecords}
					</tbody>
				</table>
			</div>
		</div>
	);
}
