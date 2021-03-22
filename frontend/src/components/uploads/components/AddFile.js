import React from "react";
import "./styles/addfile.scss";
import { toggleOpenAddFile } from "../../../redux/actions/utilsActions";
import { onUploadFile } from "../../../redux/actions/uploadActions";
import UploadLayout from "../../../utils/UploadLayout";

export default function AddFile() {
	return <UploadLayout actionUpload={onUploadFile} />;
}
