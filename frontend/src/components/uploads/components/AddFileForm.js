import React from "react";
import { selectFile } from "../../../redux/actions/uploadActions";
import UploadLayout from "../../../utils/UploadLayout";
import DateSelect from "./DateSelect";
import FileInput from "./FileInput";
import "./styles/addfileform.scss";
import TypeSelect from "./TypeSelect";

export default function AddFileForm() {
	return (
		<UploadLayout
			DateSelect={<DateSelect />}
			TypeSelect={<TypeSelect />}
			FileInput={<FileInput name="file" action={selectFile} />}
		/>
	);
}
