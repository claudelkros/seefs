import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectFile } from "../../../redux/actions/uploadActions";

export default function FileInput({ name, action }) {
	const [file, setFile] = useState(null);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(action(file));

		return () => {};
	}, [file, dispatch, selectFile]);
	return (
		<input
			type="file"
			name={name}
			onChange={(e) => setFile(e.target.files[0])}
		/>
	);
}
