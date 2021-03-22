import React from "react";
import { useSelector } from "react-redux";
import InputField from "./InputField";
import "./styles/personalinformation.scss";

export default function PersonalInformation({ register }) {
	const student = useSelector((state) => state.studentRegistration.student);

	return (
		<div className="personalinformation">
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Département</b> <em>(Department):</em>
				</div>
				<InputField reg={register} name="department" width="550px" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Parcours </b>
					<em>(Course of study):</em>
				</div>
				<InputField reg={register} name="parcours" width="550px" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Spécialité</b> <em>(Speciality):</em>
				</div>
				<InputField reg={register} name="specialite" width="550px" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Nom et Prénoms</b> <em>(Names):</em>
				</div>
				<InputField reg={register} name="nomEtPrenom" width="550px" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Date et lieu de Naissance</b>{" "}
					<em>(Date and place of birth):</em>
				</div>
				<InputField
					reg={register}
					name="jourDeNaissance"
					width="100px"
				/>
				<InputField
					reg={register}
					name="moiDeNaissance"
					width="100px"
				/>
				<InputField
					reg={register}
					name="anneeDeNaissance"
					width="100px"
				/>
				<InputField
					reg={register}
					name="lieuDeNaissance"
					width="100px"
				/>
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Sexe</b> <em>(Sex):</em>
				</div>
				<InputField reg={register} name="sexe" width="80px" />
				<div className="bloc__title">
					<b>Nationalité </b> <em>(Nationality):</em>
				</div>
				<InputField reg={register} name="nationalite" width="80px" />
				<div className="bloc__title">
					<b>1ère langue</b> <em>(1st language):</em>
				</div>
				<InputField reg={register} name="premiereLangue" width="80px" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Nom du père</b> <em>(Father's name):</em>
				</div>
				<InputField reg={register} name="nomDuPere" />
				<div className="bloc__title">
					<b>Nom de la mère</b> <em>(Mother's name):</em>
				</div>
				<InputField reg={register} name="nomDeLaMere" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Région d'origine</b> <em>(Region of origin):</em>
				</div>
				<InputField reg={register} name="regionOrigine" />
				<div className="bloc__title">
					<b>Département</b> <em>(Division):</em>
				</div>
				<InputField reg={register} name="departement" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Université d'origine</b> <em>(Previous university):</em>
				</div>
				<InputField reg={register} name="universiteOrigine" />
				<div className="bloc__title">
					<b>Matricule</b> <em>(Registration number):</em>
				</div>
				<InputField reg={register} name="matricule" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Diplome d'accès à l'UN</b>{" "}
					<em>(Access diploma into the UN):</em>
				</div>
				<InputField
					reg={register}
					name="diplomeAccessUn"
					width="80px"
				/>
				<div className="bloc__title">
					<b>Année d'obtention</b> <em>(Year of Obtention):</em>
				</div>
				<InputField reg={register} name="anneeObtention" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Profession</b> <em>(Profession):</em>
				</div>
				<InputField reg={register} name="profession" width="50px" />
				<div className="bloc__title">
					<b>Employeur</b> <em>(Employer):</em>
				</div>
				<InputField reg={register} name="employeur" width="50px" />
				<div className="bloc__title">
					<b>de</b> <em>(Of):</em>
				</div>
				<InputField reg={register} name="de" width="50px" />
				<div className="bloc__title">
					<b>à</b> <em>(to):</em>
				</div>
				<InputField reg={register} name="a" width="50px" />
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Adresse postale</b> <em>(Address):</em>
				</div>
				<InputField
					reg={register}
					name="adressePostale"
					width="550px"
				/>
			</div>
			<div className="personalinformation__bloc">
				<div className="bloc__title">
					<b>Téléphone</b> <em>(Phone):</em>
				</div>
				<InputField reg={register} name="telephone" />
				<div className="bloc__title">
					<b>Email</b> <em>(Email):</em>
				</div>
				<InputField reg={register} name="email" />
			</div>
		</div>
	);
}
