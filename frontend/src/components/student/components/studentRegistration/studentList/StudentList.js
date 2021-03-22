import React, { useEffect, useMemo } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/studentlist.scss";
import {
	getSingleStudent,
	selectedElements,
} from "../../../../../redux/actions/studentListActions";
import { getStudents } from "../../../../../redux/actions/studentRegistrationAction";
import DateSelect from "../forms/DateSelect";

export default function StudentList({ cycle }) {
	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 70,
		},
		{
			field: "id_hidden",
			hide: true,
		},
		{
			field: "cycle",
			hide: true,
		},

		{
			field: "name",
			headerName: "Nom et prenom",
			width: 170,
			disableClickEventBubbling: true,
			renderCell: (params) => {
				const onClick = () => {
					const api = params.api;
					const fields = api
						.getAllColumns()
						.map((c) => c.field)
						.filter((c) => c !== "__check__" && !!c);
					const thisRow = {};

					fields.forEach((f) => {
						thisRow[f] = params.getValue(f);
					});

					dispatch(getSingleStudent(thisRow));

					return;
				};

				return (
					<Link onClick={onClick} to="/dashboard/etudiant/single">
						{params.row.name}
					</Link>
				);
			},
		},
		// alert(JSON.stringify(thisRow, null, 4));
		{
			field: "specialite",
			headerName: "Spécialité",
			width: 150,
			hide: true,
		},
		{ field: "academicYear", headerName: "Année", width: 100, hide: true },
		{ field: "sex", headerName: "Genre", width: 100, hide: true },
		{ field: "matricule", headerName: "Matricule", width: 100, hide: true },
		{
			field: "nationalite",
			headerName: "Nationalité",
			width: 150,
			hide: true,
		},
		{
			field: "subject",
			headerName: "Sujet de recherche",
			width: 150,
			hide: true,
		},
		{
			field: "supervisor",
			headerName: "Superviseur",
			width: 150,
			hide: true,
		},
		{
			field: "accessDiploma",
			headerName: "Diplome d'accès /UN",
			width: 150,
			hide: true,
		},
		{
			field: "birthDate",
			headerName: "Date de Naissance",
			width: 150,
			hide: true,
		},
		{
			field: "average",
			headerName: "Moyenne /20",
			width: 150,
			hide: true,
		},
		{
			field: "authorization",
			headerName: "Autorisation",
			width: 150,
		},
		{
			field: "encadreur",
			headerName: "Encadreur",
			width: 150,
		},
		{
			field: "soutenance",
			headerName: "A soutenu",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 130,
			// valueGetter: (params) =>
			// 	`${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
		},
		{
			field: "versionfinale",
			headerName: "Version finale",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 150,
			// valueGetter: (params) =>
			// 	`${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
		},
	];

	// Retrieving students from the store

	const students = useSelector((state) => state.studentRegistration.students);

	// Retrieving date from the store for filtering

	const date = useSelector((state) => state.studentList.date);

	const dispatch = useDispatch();

	// Api call for fetching students

	useEffect(() => {
		dispatch(getStudents());
		return () => {};
	}, []);
	// Getting values and filtering according to cycle

	const masterStudentsTemp = students.filter(
		(student) => student.cycle === "Master"
	);

	const doctorateStudentsTemp = students.filter(
		(student) => student.cycle === "Doctorate"
	);

	// Storing students from the database to the datagrid rows
	let i = 1;
	const rowsMaster = [];
	masterStudentsTemp.map((student) => {
		rowsMaster.push({
			id: i,
			id_hidden: student._id,
			name: student.name,
			cycle: student.cycle,
			academicYear: student.academicYear[0],
			sex: student.gender,
			matricule: student.matricule,
			nationalite: student.nationality.country,
			encadreur: `${student.thesisDirectors[1].name}-${student.thesisDirectors[1].grade}`,
			subject: student.researchSubject,
			birthDate: `${student.birth.dateDeNaissance} à ${student.birth.lieuDeNaissance}`,
			accessDiploma: `${student.universityInfo.accessDiploma} - ${student.universityInfo.universityOfOrigin} - ${student.universityInfo.obtentionYear}`,
			average: student.generalAverage,
			specialite: student.fieldOfStudy.specialite,
			authorization: student.autorisation ? "Oui" : "Non",
			soutenance: student.aSoutenu ? "Oui" : "Non",
			versionfinale: student.versionfinale ? "Oui" : "Non",
		});
		i = i + 1;
	});

	let j = 1;
	const rowsDoctorate = [];
	doctorateStudentsTemp.map((student) => {
		rowsDoctorate.push({
			id: j,
			id_hidden: student._id,
			name: student.name,
			cycle: student.cycle,
			academicYear: student.academicYear[0],
			sex: student.gender,
			matricule: student.matricule,
			nationalite: student.nationality.country,
			encadreur: `${student.thesisDirectors[1].name}-${student.thesisDirectors[1].grade}`,
			subject: student.researchSubject,
			birthDate: `${student.birth.dateDeNaissance} à ${student.birth.lieuDeNaissance}`,
			accessDiploma: `${student.universityInfo.accessDiploma} - ${student.universityInfo.universityOfOrigin} - ${student.universityInfo.obtentionYear}`,
			average: student.generalAverage,
			specialite: student.fieldOfStudy.specialite,
			authorization: student.autorisation ? "Oui" : "Non",
			soutenance: student.aSoutenu ? "Oui" : "Non",
			versionfinale: student.versionfinale ? "Oui" : "Non",
		});
		j = j + 1;
	});

	// Students filtered by date

	const filteredMasterStudentsByDate = rowsMaster.filter(
		(student) => student.academicYear === date
	);

	const filteredDoctorateStudentsByDate = rowsMaster.filter(
		(student) => student.academicYear === date
	);

	// TODO: https://github.com/mui-org/material-ui-x/issues/246
	const [idSelected, setSelection] = React.useState([]);
	// const [idDoctorate, setSelection] = React.useState([]);

	// Retrieving original id for performing CRUD

	const selectedStudentMaster = rowsMaster.filter((student) =>
		idSelected.includes(student.id.toString())
	);
	const selectedStudentDoctorate = rowsDoctorate.filter((student) =>
		idSelected.includes(student.id.toString())
	);

	const numberMaster = selectedStudentMaster.length;
	const numberDoctorate = selectedStudentDoctorate.length;

	const idDB = rowsMaster
		.concat(rowsDoctorate)
		.filter((student) => student.id == idSelected[0]);

	const id = idDB.length != 0 ? console.log(idDB[0].id_hidden) : "";

	useEffect(() => {
		if (cycle == "Master") {
			dispatch(selectedElements(numberMaster));
		} else {
			dispatch(selectedElements(numberDoctorate));
		}
		return () => {};
	}, [numberMaster, numberDoctorate]);

	return (
		<div style={{ height: 350, width: "100%" }}>
			<div className="filter">
				<DateSelect />
			</div>

			{cycle === "Master" ? (
				<DataGrid
					rows={rowsMaster}
					columns={columns}
					pageSize={5}
					checkboxSelection
					onSelectionChange={(newSelection) => {
						setSelection(newSelection.rowIds);
					}}
				/>
			) : (
				<DataGrid
					rows={rowsDoctorate}
					columns={columns}
					pageSize={5}
					checkboxSelection
					onSelectionChange={(newSelection) => {
						setSelection(newSelection.rowIds);
					}}
				/>
			)}
		</div>
	);
}
