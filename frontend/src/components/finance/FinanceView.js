import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUrlPath } from "../../redux/actions/utilsActions";

export default function FinanceView() {
	const location = useLocation();

	const dispatch = useDispatch();
	dispatch(getUrlPath(location.pathname));

	return <div>Developpement of Finance in progress ...</div>;
}
