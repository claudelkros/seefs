import React from "react";
import AcademicRecords from "./AcademicRecords";
import PersonalInformation from "./PersonalInformation";
import Directors from "./Directors";
import FormTitle from "./FormTitle";
import Mention from "./Mention";

import FormHeader from "./FormHeader";

export default function AdmissionMasterForm({ register }) {
	const cycle = "EN MASTER II";
	const cycleEng = "MASTER II";
	const director = "du mémoire";
	const notabene = (
		<>
			<p>
				<b>NB</b>: L'admission en Master II est sélective. Le candidat
				doit notamment avoir obtenu une moyenne générale au moins égale
				à 12/20 en Master I ou en Maîtrise
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
						et prtant le nom du candidat au verso;{" "}
					</p>
					<p>
						- Deux photocopies certifiées conforme de l'acte de
						naissance datant de moins de trois mois{" "}
					</p>
					<p>
						- Les photocopies certifiées conforme des diplômes à
						partir du BAC/GCE AL (pour les nouveaux){" "}
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
						vigueur et portant l'adresse du candidat{" "}
					</p>
					<p>
						- Une fiche d'inscription académique à retirer à la
						scolarité;{" "}
					</p>
					<p>
						- Le quitus de la visite médicale délivré par le médécin
						du Centre Medico-Social de l'Université de Ngaoundéré{" "}
					</p>
					<p>
						- Une photocopie de la carte d'identité ou d'un document
						équivalent{" "}
					</p>
					<p>
						- <b>Pièces à fournir après la sélection</b>{" "}
					</p>
					<p>
						- Le quitus de paiement des droits universitaires d'un
						montant de 50 000F CFA dans le compte ECOBANK de la
						faculté des Sciences{" "}
						<b>(NO 100 29 00040 010 11817786-35 FS Ngaoundéré)</b>
					</p>
					<p>
						- Pour les ressortissants d'un pays étranger, une preuve
						tangible des ressources financières (attestation de
						bourse ou engagement parental){" "}
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
						<FormTitle
							cycle={cycle}
							cycleEng={cycleEng}
							register={register}
						/>
					</div>
					<div className="subpage__personal">
						<PersonalInformation register={register} />
					</div>
					<div className="subpage__academic">
						<AcademicRecords register={register} />
					</div>
					<div className="subpage__mention">
						<Mention mentionNiveau5="" register={register} />
					</div>
				</div>
			</div>
			<div className="page">
				<div className="subpage">
					<Directors
						director={director}
						register={register}
						notabene={notabene}
					/>
				</div>
			</div>
		</>
	);
}
