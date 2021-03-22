import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { onSubmitRegistrationForm } from "../../../../../redux/actions/studentRegistrationAction";
import FormHeader from "./FormHeader";
import AdmissionDoctorateForm from "./AdmissionDoctorateForm";
import AdmissionMasterForm from "./AdmissionMasterForm";
import "./styles/admissionmasterform.scss";

export default function AdmissionForm() {
	const methods = useForm();

	var chosenCycle = useSelector((state) => state.studentRegistration.cycle);

	const statusMessage = useSelector((state) => state.studentRegistration);

	const { handleSubmit, register } = methods;

	const onSubmitForm = (data) => {
		// Cycle either Master of Doctorate4

		let masterStudent = {
			cycle: chosenCycle,
			academicYear: [
				`20${data.academicYear1}`,
				`20${data.academicYear2}`,
			],
			files: {},
			autorisation: false,
			aSoutenu: false,
			versionFinale: false,
			paiement: false,
			matricule: data.matricule,
			fieldOfStudy: {
				department: data.department,
				parcours: data.parcours,
				specialite: data.specialite,
			},
			name: data.nomEtPrenom,
			gender: data.sexe,
			birth: {
				dateDeNaissance: `${data.jourDeNaissance}-${data.moiDeNaissance}-${data.anneeDeNaissance}`,
				lieuDeNaissance: data.lieuDeNaissance,
			},
			nationality: {
				country: data.nationalite,
				firstLanguage: data.premiereLangue,
			},
			parents: {
				father: data.nomDuPere,
				mother: data.nomDeLaMere,
			},
			regionOfOrigin: {
				region: data.regionOrigine,
				department: data.departement,
			},
			universityInfo: {
				universityOfOrigin: data.universiteOrigine,
				accessDiploma: data.diplomeAccessUn,
				obtentionYear: data.anneeObtention,
			},
			profession: {
				profession: data.profession,
				employer: data.employeur,
				of: data.de,
				to: data.a,
			},
			address: {
				postalAddress: data.adressePostale,
				phone: data.telephone,
				email: data.email,
			},
			highSchoolInfo: {
				1: {
					academicYear: data.academicYearSecondaire1,
					etablissement: data.etablissement1,
					passedCertificates: "BEPC/GCE OL",
					mention: data.mention1,
				},
				2: {
					academicYear: data.academicYearSecondaire2,
					etablissement: data.etablissement2,
					passedCertificates: "Probatoire",
					mention: data.mention2,
				},
				3: {
					academicYear: data.academicYearSecondaire3,
					etablissement: data.etablissement3,
					passedCertificates: "Baccalauréat/GCE AL",
					mention: data.mention3,
				},
			},
			universitySchoolInfo: {
				level1: {
					year: `20${data.niveau11}/20${data.niveau12}`,
					semester1: `20${data.semestre11}/20${data.semestre12}`,
					semester2: `20${data.semestre21}/20${data.semestre22}`,
					university: data.university1,
					mention: data.mentionniveau1,
				},
				level2: {
					year: `20${data.niveau21}/20${data.niveau22}`,
					semester3: `20${data.semestre31}/20${data.semestre32}`,
					semester4: `20${data.semestre41}/20${data.semestre42}`,
					university: data.university2,
					mention: data.mentionniveau2,
				},
				level3: {
					year: `20${data.niveau31}/20${data.niveau32}`,
					semester5: `20${data.semestre51}/20${data.semestre52}`,
					semester6: `20${data.semestre61}/20${data.semestre62}`,
					university: data.university3,
					mention: data.mentionniveau3,
				},
				level4: {
					year: `20${data.niveau41}/20${data.niveau42}`,
					semester7: `20${data.semestre71}/20${data.semestre72}`,
					semester8: `20${data.semestre81}/20${data.semestre82}`,
					university: data.university4,
					mention: data.mentionniveau4,
				},
			},
			generalAverage: data.moyenneGenerale,
			thesisDirectors: {
				1: {
					name: data.directeur1,
					grade: data.grade1,
				},
				2: {
					name: data.directeur2,
					grade: data.grade2,
				},
				3: {
					name: data.directeur3,
					grade: data.grade3,
				},
			},
			supervisor: {
				name: data.superviseur1,
				grade: data.gradeSuperviseur,
			},
			researchSubject: data.sujetDeRecherche,
		};

		// PhD students

		let doctorateStudent = {
			cycle: chosenCycle,
			academicYear: [
				`20${data.academicYear1}`,
				`20${data.academicYear2}`,
			],
			fieldOfStudy: {
				department: data.department,
				parcours: data.parcours,
				specialite: data.specialite,
			},
			name: data.nomEtPrenom,
			gender: data.sexe,
			birth: {
				dateDeNaissance: `${data.jourDeNaissance}-${data.moiDeNaissance}-${data.anneeDeNaissance}`,
				lieuDeNaissance: data.lieuDeNaissance,
			},
			nationality: {
				country: data.nationalite,
				firstLanguage: data.premiereLangue,
			},
			parents: {
				father: data.nomDuPere,
				mother: data.nomDeLaMere,
			},
			regionOfOrigin: {
				region: data.regionOrigine,
				department: data.departement,
			},
			universityInfo: {
				universityOfOrigin: data.universiteOrigine,
				matricule: data.matricule,
				accessDiploma: data.diplomeAccessUn,
				obtentionYear: data.anneeObtention,
			},
			profession: {
				profession: data.profession,
				employer: data.employeur,
				of: data.de,
				to: data.a,
			},
			address: {
				postalAddress: data.adressePostale,
				phone: data.telephone,
				email: data.email,
			},
			highSchoolInfo: {
				1: {
					academicYear: data.academicYearSecondaire1,
					etablissement: data.etablissement1,
					passedCertificates: "BEPC/GCE OL",
					mention: data.mention1,
				},
				2: {
					academicYear: data.academicYearSecondaire2,
					etablissement: data.etablissement2,
					passedCertificates: "Probatoire",
					mention: data.mention2,
				},
				3: {
					academicYear: data.academicYearSecondaire3,
					etablissement: data.etablissement3,
					passedCertificates: "Baccalauréat/GCE AL",
					mention: data.mention3,
				},
			},
			universitySchoolInfo: {
				level1: {
					year: `20${data.niveau11}/20${data.niveau12}`,
					semester1: `20${data.semestre11}/20${data.semestre12}`,
					semester2: `20${data.semestre21}/20${data.semestre22}`,
					university: data.university1,
					mention: data.mentionniveau1,
				},
				level2: {
					year: `20${data.niveau21}/20${data.niveau22}`,
					semester3: `20${data.semestre31}/20${data.semestre32}`,
					semester4: `20${data.semestre41}/20${data.semestre42}`,
					university: data.university2,
					mention: data.mentionniveau2,
				},
				level3: {
					year: `20${data.niveau31}/20${data.niveau32}`,
					semester5: `20${data.semestre51}/20${data.semestre52}`,
					semester6: `20${data.semestre61}/20${data.semestre62}`,
					university: data.university3,
					mention: data.mentionniveau3,
				},
				level4: {
					year: `20${data.niveau41}/20${data.niveau42}`,
					semester7: `20${data.semestre71}/20${data.semestre72}`,
					semester8: `20${data.semestre81}/20${data.semestre82}`,
					university: data.university4,
					mention: data.mentionniveau4,
				},
			},
			generalAverage: {
				1: {
					average: data.moyenneGenerale,
				},
				2: {
					average: data.moyenneGenerale2,
				},
			},
			thesisDirectors: {
				1: {
					name: data.directeur1,
					grade: data.grade1,
				},
				2: {
					name: data.directeur2,
					grade: data.grade2,
				},
				3: {
					name: data.directeur3,
					grade: data.grade3,
				},
			},
			supervisor: {
				name: data.superviseur1,
				grade: data.gradeSuperviseur,
			},
			researchSubject: data.sujetDeRecherche,
		};

		if (chosenCycle === "Master") {
			console.log(masterStudent);
			dispatch(onSubmitRegistrationForm(masterStudent));
			setOpen(true);
			setTimeout(() => {
				window.print();
			}, 4000);
		} else {
			dispatch(onSubmitRegistrationForm(doctorateStudent));

			setTimeout(() => {
				window.print();
			}, 4000);
			setOpen(true);
		}
	};

	const cycle = useSelector((state) => state.studentRegistration.cycle);

	const dispatch = useDispatch();

	// Choosing form according to choosen cycle
	var form;
	if (cycle === "null" || !cycle) {
		form = "";
	} else if (cycle === "Master") {
		form = <AdmissionMasterForm register={register} />;
	} else {
		form = <AdmissionDoctorateForm register={register} />;
	}

	// Material ui alert state
	const [open, setOpen] = React.useState(false);

	// Handle the close on click away or close button
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<FormProvider {...methods}>
			{statusMessage.successMessage ? (
				<Snackbar
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="success">
						{statusMessage.successMessage}
					</Alert>
				</Snackbar>
			) : (
				<Snackbar
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="error">
						{statusMessage.errorMessage}
					</Alert>
				</Snackbar>
			)}
			<form
				id="hook-form"
				onSubmit={handleSubmit(onSubmitForm)}
				className="form"
			>
				{form}
			</form>
		</FormProvider>
	);
}
