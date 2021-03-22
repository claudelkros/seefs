import React from "react";
import File from "../../../uploads/components/File";
import "./styles/studentfiles.scss";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function StudentFiles() {
	return (
		<div className="studentFiles">
			<div className="studentFiles__header">Fichiers</div>
			<div className="studentFiles__body">
				<a
					href="/uploads/anum-td4.pdf-1611977607172.pdf"
					download={""}
					target="_self"
				>
					<File
						name="fichier"
						icon={<GetAppIcon className="download" />}
					/>{" "}
				</a>
			</div>
		</div>
	);
}
