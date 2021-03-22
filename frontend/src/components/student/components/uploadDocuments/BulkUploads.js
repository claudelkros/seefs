import React from "react";
import { selectFile } from "../../../../redux/actions/uploadActions";
import { toggleCloseAddFileBulk } from "../../../../redux/actions/utilsActions";
import UploadLayout from "../../../../utils/UploadLayout";
import FileInput from "../../../uploads/components/FileInput";

export default function BulkUploads() {
	return (
		<UploadLayout
			title="Ajout décision"
			// DateSelect={<DateSelect />}
			// TypeSelect={<TypeSelect />}
			FileInput={<FileInput name="file" action={selectFile} />}
			actionUpload={""}
			closeAction={toggleCloseAddFileBulk}
		/>
	);
}
