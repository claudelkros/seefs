import React from "react";
import { Switch } from "react-router-dom";
import EncadreurView from "../components/encadreur/EncadreurView";
import FinanceView from "../components/finance/FinanceView";
import HomeContainer from "../components/home/HomeContainer";
import LoginContainer from "../components/Setup/components/login/LoginContainer";
import SoutenanceView from "../components/soutenance/SoutenanceView";
import StudentSingle from "../components/student/components/singleStudent/StudentSingle";
import StudentDescription from "../components/student/components/singleStudent/StudentSingle";
import AdmissionForm from "../components/student/components/studentRegistration/forms/AdmissionForm";
import StudentView from "../components/student/StudentView";
import SupervisorView from "../components/supervisor/SupervisorView";
import {
	DASHBOARD,
	ENCADREUR,
	ETUDIANT,
	FINANCE,
	LOGIN,
	SETUP,
	SOUTENANCE,
	STUDENT_REGISTRATION_FORM,
	SUPERVISEUR,
	ETUDIANT_SINGLE,
} from "./CONSTANTS";
import NonPrivateRoute from "./NonPrivateRoute";
import PrivateRoute from "./PrivateRoute";

export default function RouterContent() {
	return (
		<Switch>
			{/* <Route exact path={SETUP} component={SetupContainer} /> */}
			<NonPrivateRoute exact path={LOGIN} component={LoginContainer} />
			<PrivateRoute exact path={DASHBOARD} component={HomeContainer} />
			<PrivateRoute exact path={ETUDIANT} component={StudentView} />
			<PrivateRoute exact path={ENCADREUR} component={EncadreurView} />
			<PrivateRoute exact path={SUPERVISEUR} component={SupervisorView} />
			<PrivateRoute exact path={SOUTENANCE} component={SoutenanceView} />
			<PrivateRoute exact path={FINANCE} component={FinanceView} />
			<PrivateRoute
				exact
				path={STUDENT_REGISTRATION_FORM}
				component={AdmissionForm}
			/>
			<PrivateRoute
				exact
				path={ETUDIANT_SINGLE}
				component={StudentSingle}
			/>
		</Switch>
	);
}
