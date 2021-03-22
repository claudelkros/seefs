import React from "react";
import Notification from "./components/Notification";
import Profile from "./components/Profile";
import Search from "./components/Search";
import "./styles/header.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
	return (
		<div className="header">
			<Search />
			<div className="header__icons">
				<Notification />
				<Profile />
			</div>
		</div>
	);
}
