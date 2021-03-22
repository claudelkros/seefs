import React from "react";
import { selectFile } from "../../../../redux/actions/uploadActions";
import { toggleCloseAddFileSingle } from "../../../../redux/actions/utilsActions";
import UploadLayout from "../../../../utils/UploadLayout";
import DateSelect from "../../../uploads/components/DateSelect";
import FileInput from "../../../uploads/components/FileInput";
import TypeSelect from "../../../uploads/components/TypeSelect";
export default function SingleUpload() {
	return (
		<UploadLayout
			title="Ajout d'un fichier"
			DateSelect={<DateSelect />}
			TypeSelect={<TypeSelect />}
			FileInput={<FileInput name="file" action={selectFile} />}
			actionUpload={""}
			closeAction={toggleCloseAddFileSingle}
		/>
	);
}
