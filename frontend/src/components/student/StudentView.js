import React, { useEffect } from "react";
import "./styles/student.scss";
// Tabs import

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StudentMenu from "./components/StudentMenu";
import { getUrlPath } from "../../redux/actions/utilsActions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import StudentList from "./components/studentRegistration/studentList/StudentList";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function StudentView() {
	const location = useLocation();

	const dispatch = useDispatch();

	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	useEffect(() => {
		dispatch(getUrlPath(location.pathname));
		return () => {};
	}, [getUrlPath, location, dispatch]);

	return (
		<div className="student">
			<div className="student__content">
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="Etudiants de Master" {...a11yProps(0)} />
						<Tab label="Etudiants de Doctorat" {...a11yProps(1)} />
						{/* <Tab label="Item Three" {...a11yProps(2)} /> */}
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={value}
					onChangeIndex={handleChangeIndex}
				>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<StudentList cycle="Master" />
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						<StudentList cycle="Doctorate" />
					</TabPanel>
				</SwipeableViews>
			</div>
			<div className="student__menu">
				<StudentMenu />
			</div>
		</div>
	);
}
