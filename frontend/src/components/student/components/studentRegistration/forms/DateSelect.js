import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dateSelectStudentFiltering } from "../../../../../redux/actions/studentListActions";

import "./styles/dateselect.scss";

export default function DateSelect() {
	const [date, setDate] = React.useState("");

	const dispatch = useDispatch();

	const handleChange = (event) => {
		event.preventDefault();
		setDate(event.target.value);
	};

	useEffect(() => {
		dispatch(dateSelectStudentFiltering(date));

		return () => {};
	}, [date, dispatch, dateSelectStudentFiltering]);

	return (
		<div className="dateSelect">
			<select required value={date} onChange={(e) => handleChange(e)}>
				<option value="2020">2020</option>
				<option value="2019">2019</option>
				<option value="2018">2018</option>
				<option value="2017">2017</option>
				<option value="2016">2016</option>
				<option value="2015">2015</option>
				<option value="2014">2014</option>
				<option value="2013">2013</option>
			</select>
		</div>
	);
}
