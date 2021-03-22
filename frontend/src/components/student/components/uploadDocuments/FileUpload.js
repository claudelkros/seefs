import React from "react";
import { useSelector } from "react-redux";
import BulkUploads from "./BulkUploads";
import SingleUpload from "./SingleUpload";

export default function FileUpload() {
	const open = useSelector((state) => state.utils.toggleAddFileSingle);
	const openBulk = useSelector((state) => state.utils.toggleAddFileBulk);
	return (
		<>
			{open ? (
				<>
					<SingleUpload />
				</>
			) : (
				""
			)}

			{openBulk ? (
				<>
					<BulkUploads />
				</>
			) : (
				""
			)}
		</>
	);
}
