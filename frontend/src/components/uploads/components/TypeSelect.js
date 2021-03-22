import React from "react";
import { selectFileType } from "../../../redux/actions/uploadActions";
import Select from "./Select";
export default function TypeSelect() {
	const values = [`Décision de selection`, `Quittus de paiement`];

	return <Select values={values} action={selectFileType} />;
}
