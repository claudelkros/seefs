import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import "./styles/uploadlayout.scss";

export default function UploadLayout({
	title,
	DateSelect,
	TypeSelect,
	FileInput,
	validateAction,
	actionUpload,
	closeAction,
}) {
	const upload = useSelector((state) => state.upload);
	const file = useSelector((state) => state.upload.file);
	const dispatch = useDispatch();

	// Annuler button

	const handleClose = () => {
		dispatch(closeAction());
	};

	// Submission form
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (!file) {
			setOpen(true);
		} else {
			dispatch(actionUpload(upload));
			handleClose();
		}
	};

	// Material ui alert state
	const [open, setOpen] = React.useState(false);

	// Handle the close on click away or close button
	const handleCloseAlert = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<form onSubmit={(e) => onSubmitForm(e)}>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleCloseAlert}
			>
				<Alert onClose={handleCloseAlert} severity="error">
					Téléverser un fichier
				</Alert>
			</Snackbar>
			<div className="addfileform">
				<div className="addfileform__header">
					<div className="bloc__text">
						<p> {title}</p>
					</div>
				</div>
				{DateSelect ? (
					<div className="addfileform__bloc">
						<div className="bloc__text">Année Academique</div>
						<div className="bloc__input">{DateSelect}</div>
					</div>
				) : (
					""
				)}
				{TypeSelect ? (
					<div className="addfileform__bloc">
						<div className="bloc__text">Type du fichier</div>
						<div className="bloc__input">{TypeSelect}</div>
					</div>
				) : (
					""
				)}

				<div className="addfileform__bloc">
					<div className="bloc__text">Téléverser</div>
					<div className="bloc__input">{FileInput}</div>
				</div>
				<div className="addfileform__footer">
					<Button
						title="Annuler"
						buttonType="secondary"
						height="10px"
						onClick={handleClose}
					/>
					<Button
						title="Valider"
						buttonType="primary"
						onClick={validateAction}
					/>
				</div>
			</div>
		</form>
	);
}
