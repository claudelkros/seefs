import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles/fileselect.scss";

export default function Select({ action, values }) {
	const dispatch = useDispatch();

	const [fileType, setFileType] = React.useState("");

	const handleChange = (event) => {
		event.preventDefault();
		setFileType(event.target.value);
	};

	useEffect(() => {
		dispatch(action(fileType));

		return () => {};
	}, [fileType, dispatch, action]);

	return (
		<div className="fileselect">
			<select value={fileType} onChange={(e) => handleChange(e)}>
				{values.map((value) => (
					<option value={`${value}`}>{value}</option>
				))}
			</select>
		</div>
	);
}
