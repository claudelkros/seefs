import React, { useEffect, useState } from "react";
import "./styles/login.scss";
import Button from "../../../button/Button";
import { useHistory } from "react-router-dom";
import { login } from "../../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./components/Input";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function LoginView({ department }) {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const errorMessage = useSelector((state) => state.errorAuth);
	// React hook form initialization
	const { push } = useHistory();
	const methods = useForm();
	const { handleSubmit } = methods;

	const dispatch = useDispatch();
	const [error, setError] = useState("");

	const onSubmitForm = (data) => {
		dispatch(login(data));
		push("/dashboard");
	};

	useEffect(() => {
		if (errorMessage.state.id === "LOGIN_FAIL") {
			setError(errorMessage.state.message.detail);
		} else {
			setError("");
		}

		if (isAuthenticated) {
			push("/");
		}
	}, [isAuthenticated, error, push]);

	const valError =
		error !== "" ? (
			<Alert severity="error" className="form__error">
				<AlertTitle>Erreur de connexion</AlertTitle>
				Vos identifiants sont incorrect
			</Alert>
		) : null;

	return (
		<div className="login">
			<div className="login__header">
				{/* <div className="header__backbtn" >
                    <Link to="/"> <BackBtntContainer /></Link>
                </div> */}
				<div className="header__text">{/* <p>{department}</p> */}</div>
			</div>
			<div className="login__form">
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmitForm)}>
						{valError}
						<div className="form__1">
							<Input
								name="email"
								label="Email"
								required={true}
								type="email"
							/>
						</div>
						<div className="form__2">
							<Input
								name="password"
								label="Mot de passe"
								required={true}
								type="password"
								autoComplete="current-password"
							/>
						</div>
						<div className="form__3">
							<Button
								title="Se connecter"
								width="300px"
								height="15px"
								buttonType="primary"
							/>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	);
}
