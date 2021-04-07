import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const NonPrivateRoute = ({ component, auth, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth.isAuthenticated) {
					return <Redirect to="/dashboard" />;
				}
				return <component {...props} />;
			}}
		/>
	);
};

const mapStatetoProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStatetoProps)(NonPrivateRoute);
