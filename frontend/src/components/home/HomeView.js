import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUrlPath } from "../../redux/actions/utilsActions";
import FileUpload from "../uploads/FileUpload";
import "./styles/home.scss";

export default function HomeView() {
	const location = useLocation();

	const dispatch = useDispatch();
	dispatch(getUrlPath(location.pathname));

	return (
		<div className="home">
			Home
			<div className="home__content"></div>
			<div className="home__upload">
				<FileUpload />
			</div>
		</div>
	);
}
