import React from "react";
import {
	DASHBOARD,
	ENCADREUR,
	ETUDIANT,
	ETUDIANT_SINGLE,
	FINANCE,
	LOGIN,
	SETUP,
	SOUTENANCE,
	STUDENT_REGISTRATION_FORM,
	SUPERVISEUR,
} from "../CONSTANTS";
import { Switch, Route } from "react-router-dom";
import StepperView from "../../components/Setup/components/stepper/StepperView";
import Header from "../../components/header/Header";
import PrivateRoute from "../PrivateRoute";
import RegistrationHeader from "../../components/student/components/studentRegistration/forms/RegistrationHeader";
import StudentSingleHeader from "../../components/student/components/singleStudent/StudentSingleHeader";

export default function RouterHeader() {
	return (
		<Switch>
			<Route exact path={SETUP} component={StepperView} />
			<Route exact path={LOGIN} component={StepperView} />
			<PrivateRoute exact path={DASHBOARD} component={Header} />
			<PrivateRoute exact path={ETUDIANT} component={Header} />
			<PrivateRoute exact path={ENCADREUR} component={Header} />
			<PrivateRoute exact path={SUPERVISEUR} component={Header} />
			<PrivateRoute exact path={SOUTENANCE} component={Header} />
			<PrivateRoute exact path={FINANCE} component={Header} />
			<PrivateRoute
				exact
				path={STUDENT_REGISTRATION_FORM}
				component={RegistrationHeader}
			/>
			<PrivateRoute
				exact
				path={ETUDIANT_SINGLE}
				component={StudentSingleHeader}
			/>
		</Switch>
	);
}
