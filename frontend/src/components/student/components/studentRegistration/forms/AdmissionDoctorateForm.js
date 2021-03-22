import React from "react";
import AcademicRecords from "./AcademicRecords";
import Mention from ".//Mention";
import PersonalInformation from "./PersonalInformation";
import Directors from "./Directors";
import InputField from "./InputField";
import FormHeader from "./FormHeader";
import FormTitle from "./FormTitle";

export default function AdmissionDoctorateForm({ register }) {
	const cycle = "AU CYCLE DE DOCTORAT/PhD";
	const cycleEng = "DOCTORAT/PhD CYCLE";
	const universityRecords = (
		<tr>
			<td className="registrationYear">
				<div className="niveau">
					<b>Niveau V (Level V)</b>
					<p>
						200
						<InputField
							reg={register}
							name="niveau51"
							width="20px"
						/>
						/200
						<InputField
							reg={register}
							name="niveau52"
							width="20px"
						/>
					</p>
				</div>
				ou
				<div className="semestre1">
					<b>Semestre 9</b>
					<p>
						200
						<InputField
							reg={register}
							name="semestre91"
							width="20px"
						/>
						/200
						<InputField
							reg={register}
							name="semestre92"
							width="20px"
						/>
					</p>
				</div>
				-
				<div className="semestre2">
					<b>Semestre 10</b>
					<p>
						200
						<InputField
							reg={register}
							name="semestre101"
							width="20px"
						/>
						/200
						<InputField
							reg={register}
							name="semestre102"
							width="20px"
						/>
					</p>
				</div>
			</td>
			<td>
				<InputField reg={register} name="universite5" width="100px" />
			</td>
			<td>
				<InputField
					reg={register}
					name="mentionniveau5"
					width="100px"
				/>
			</td>
		</tr>
	);

	const mention = (
		<p>
			<b>Moyenne générale obtenue au niveau V</b>
			<em>(General average obtained in level V):</em>
			<InputField reg={register} name="moyenneGenerale2" width="20px" />
			/20 - <b>Mention</b>
			<em>(Grade)</em>
		</p>
	);
	const director = "de thèse";
	const notabene = (
		<>
			<p>
				<b>NB</b>: L'admission en Doctorat/PhD est sélective. Le
				candidat doit notamment avoir obtenu une moyenne générale au
				moins égale à 12/20 en Master II ou en DEA
			</p>
			<em>
				<div className="list">
					<p>
						Cette fiche de renseignement remplie en caractères
						d'imprimerie est déposée à la scolarité avec les
						documents suivants:
					</p>
					<p>- Une demande motivée timbrée; </p>
					<p>
						- Quatres (04) photos 4x4 datant de moins de trois mois
						et prtant le nom du candidat au verso;
					</p>
					<p>
						- Deux photocopies certifiées conforme de l'acte de
						naissance datant de moins de trois (03) mois;
					</p>
					<p>
						- Les photocopies certifiées conforme des diplômes à
						partir du BAC/GCE AL;
					</p>
					<p>
						- Les relevé de notes du cycle donnant droit à la
						selection
					</p>
					<p>
						- le reçu ECOBANK de paiement de <b>10 000 FCFA</b>
						de frais de préinscriptions au compte ECOBANK de la
						faculté des Sciences
						<b>(N0 10029 26017 01207972001-09FS Ngaoundéré)</b>
					</p>
					<p>
						- Une enveloppe 32 cm x 23 cm timbrée au tarif en
						vigueur et portant l'adresse du candidat
					</p>
					<p>
						- Eventuellement un projet de recherche de 20 pages
						maximum. Dactylographiées, faisant ressortir la
						problématique et l'approche méthodologique de votre
						sujet de thèse ;
					</p>
					<p>
						- <b>Pièces à fournir après la sélection</b>{" "}
					</p>
					<p>
						- Une fiche d'inscription académique à retirer à la
						scolarité;
					</p>
					<p>
						- Le quitus de paiement des droits universitaires d'un
						montant de 50 000F CFA dans le compte ECOBANK de la
						faculté des Sciences{" "}
						<b>(NO 100 29 00040 010 11817786-35 FS Ngaoundéré)</b>
					</p>
					<p>
						{" "}
						- Le quitus de la visite médicale délivré par le médécin
						du Centre Medico-Social de l'Université de Ngaoundéré
					</p>
					<p>
						- Une photocopie de la carte d'identité ou d'un document
						équivalent
					</p>
				</div>
			</em>
		</>
	);

	return (
		<>
			<div className="page">
				<div className="subpage">
					<div className="subpage__header">
						<FormHeader />
					</div>
					<div className="subpage__title">
						<FormTitle cycle={cycle} cycleEng={cycleEng} />
					</div>
					<div className="subpage__personal">
						<PersonalInformation />
					</div>
					<div className="subpage__academic">
						<AcademicRecords univRecords={universityRecords} />
					</div>
					<div className="subpage__mention">
						<Mention mentionNiveau5={mention} />
					</div>
				</div>
			</div>
			<div className="page">
				<div className="subpage">
					<Directors director={director} notabene={notabene} />
				</div>
			</div>
		</>
	);
}
