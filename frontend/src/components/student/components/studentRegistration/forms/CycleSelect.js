import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cycleSelect } from "../../../../../redux/actions/studentRegistrationAction";

export default function CycleSelect() {
	const dispatch = useDispatch();

	const [cycle, setCycle] = React.useState("");

	const handleChange = (event) => {
		event.preventDefault();
		setCycle(event.target.value);
	};

	useEffect(() => {
		dispatch(cycleSelect(cycle));

		return () => {};
	}, [cycle, dispatch, cycleSelect]);

	return (
		<div className="cycleselect">
			<select value={cycle} onChange={(e) => handleChange(e)}>
				<option label=" " value="null">
					-------- --------
				</option>
				<option value="Master">Master</option>

				<option value="Doctorat">Doctorat/PhD </option>
			</select>
		</div>
	);
}
