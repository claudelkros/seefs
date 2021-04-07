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
import NonPrivateRoute from "../NonPrivateRoute";

export default function RouterHeader() {
	return (
		<Switch>
			<PrivateRoute exact path={SETUP} component={StepperView} />
			<NonPrivateRoute exact path={LOGIN} component={StepperView} />
			<Route exact path={DASHBOARD} component={Header} />
			<Route exact path={ETUDIANT} component={Header} />
			<Route exact path={ENCADREUR} component={Header} />
			<Route exact path={SUPERVISEUR} component={Header} />
			<Route exact path={SOUTENANCE} component={Header} />
			<Route exact path={FINANCE} component={Header} />
			<Route
				exact
				path={STUDENT_REGISTRATION_FORM}
				component={RegistrationHeader}
			/>
			<Route
				exact
				path={ETUDIANT_SINGLE}
				component={StudentSingleHeader}
			/>
		</Switch>
	);
}
