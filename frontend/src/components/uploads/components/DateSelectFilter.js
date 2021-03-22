import React from "react";
import { filterDate } from "../../../redux/actions/filterActions";
import Select from "./Select";
import "./styles/dateselect.scss";

export default function DateSelectFilter() {
	const values = [2020, 2019, 2018, 2017, 2016];

	return <Select action={filterDate} values={values} />;
}
