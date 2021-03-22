import React from "react";
import { selectDate } from "../../../redux/actions/uploadActions";
import Select from "./Select";
import "./styles/dateselect.scss";

export default function DateSelect() {
	const values = [2020, 2019, 2018, 2017];

	return (
		<div className="dateSelect">
			<Select action={selectDate} values={values} />
		</div>
	);
}
