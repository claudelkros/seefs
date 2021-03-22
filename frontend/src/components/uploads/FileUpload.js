import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/fileupload.scss";
import AddIcon from "@material-ui/icons/Add";
import File from "./components/File";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddFile from "./components/AddFile";
import { toggleOpenAddFileSingle } from "../../redux/actions/utilsActions";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { getFiles } from "../../redux/actions/uploadActions";
import DateSelectFilter from "./components/DateSelectFilter";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FileUpload() {
	// Connecting to the store

	// toggle state
	const toggleAddFile = useSelector((state) => state.utils.toggleAddFile);

	// Uploaded success state

	const uploadSucess = useSelector((state) => state.upload.uploadSuccess);

	// Retrieving files

	const files = useSelector((state) => state.upload.files);

	// Retrieving date value for filtering

	const date = useSelector((state) => state.filter.date);

	const dispatch = useDispatch();

	//  Handle open add_file dialog
	const handleOpenAddFile = () => {
		dispatch(toggleOpenAddFileSingle());
	};

	// Material ui alert state
	const [open, setOpen] = React.useState(false);

	// Handle the close on click away or close button
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	// Check if the file was successfully uploaded

	useEffect(() => {
		dispatch(getFiles());
		uploadSucess ? setOpen(true) : setOpen("false");
		return () => {};
	}, [uploadSucess, setOpen, getFiles]);

	// filtering files according to date

	if (files[0]) {
		var filteredByDate;

		var filteredFiles = files[0].filter((val) => val.year === date);

		const emptyFiles = (
			<p style={{ marginTop: "100 %" }}>Pas de fichiers correspondant</p>
		);

		if (filteredFiles.length != 0) {
			filteredByDate = filteredFiles.map((file) => (
				<a
					href="/uploads/anum-td4.pdf-1611977607172.pdf"
					download={file.filePath}
					target="_self"
				>
					<File
						name={file.type}
						icon={<GetAppIcon className="download" />}
					/>{" "}
				</a>
			));
		} else {
			filteredByDate = emptyFiles;
		}
	}

	// Empty files list message

	return (
		<div className="fileUpload">
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Opération réussie
				</Alert>
			</Snackbar>
			<div className="fileUpload__header">
				<div className="header__text">Fichiers</div>
				<div className="header__date">
					<DateSelectFilter />
				</div>
			</div>
			<div className="fileUpload__content">
				<div className="content__list">{filteredByDate}</div>
				<div className="content__add" onClick={handleOpenAddFile}>
					<AddIcon className="addIcon" /> <span>Ajouter</span>
				</div>
			</div>
			<div className="fileUpload__more">Voir plus</div>
			{toggleAddFile ? <AddFile /> : ""}
		</div>
	);
}
