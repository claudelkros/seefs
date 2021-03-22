import React from "react";
import "./styles/studentmenu.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import AddFileLink from "./uploadDocuments/AddFileLink";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "./uploadDocuments/FileUpload";
import { STUDENT_REGISTRATION_FORM } from "../../../navigation/CONSTANTS";
import {
	toggleOpenAddFileBulk,
	toggleOpenAddFileSingle,
} from "../../../redux/actions/utilsActions";

export default function StudentMenu() {
	const number = useSelector((state) => state.studentList.number);
	const dispatch = useDispatch();

	return (
		<div className="studentMenu">
			{number === 1 ? (
				<>
					<AddFileLink
						title="ajouter fichier"
						handleClick={() => dispatch(toggleOpenAddFileSingle())}
					/>
					<FileUpload />
				</>
			) : number > 1 ? (
				<>
					<AddFileLink
						title="ajout Décision"
						handleClick={() => dispatch(toggleOpenAddFileBulk())}
					/>
					<FileUpload />
				</>
			) : (
				<div className="studentMenu__register">
					<Link to={STUDENT_REGISTRATION_FORM}>
						<Fab color="primary" aria-label="add">
							<AddIcon />
						</Fab>
					</Link>
				</div>
			)}
		</div>
	);
}
