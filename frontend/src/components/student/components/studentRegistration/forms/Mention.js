import React from "react";
import InputField from "./InputField";
import "./styles/mention.scss";

export default function Mention({ mentionNiveau5, register }) {
	return (
		<div className="mention">
			<div className="mention__bloc1">
				<div className="mention1">
					<p>
						<b>Moyenne générale obtenue au niveau IV</b>
						<em>(General average obtained in level IV):</em>{" "}
						<InputField
							reg={register}
							name="moyenneGenerale"
							width="20px"
						/>
						/20 - <b>Mention</b>
						<em>(Grade)</em>
					</p>
				</div>
				<div className="mention1">{mentionNiveau5}</div>
				<div className="mention1">
					<p>
						J'atteste que tous les renseignements fournis ci-dessus
						sont complets et exacts
					</p>
					<p>
						<em>
							I certify that above information are complete and
							exact
						</em>
					</p>
				</div>
			</div>
			<div className="mention__bloc2">
				<div className="mention1">
					<b>
						Date et signature de l'étudiant précédé de la mention
						"lu et approuvé"
					</b>
					<br />
					<em>
						Date and signature of student preceded by{" "}
						<b>
							"read and approved". (tournez SVP/
							<em>Please turn</em>)
						</b>
					</em>
				</div>
			</div>
		</div>
	);
}
