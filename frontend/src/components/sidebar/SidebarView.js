import React from 'react'
import SidebarLink from './components/SidebarLink';
import './styles/sidebar.scss';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TuneIcon from '@material-ui/icons/Tune';
import { Link, NavLink } from 'react-router-dom'

export default function SidebarView() {

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                logo
            </div>

            <div className="sidebar__content">
                <NavLink exact to="/dashboard/" activeClassName="selected" > <SidebarLink icon={<HomeIcon />} text="Accueil" /></NavLink>
                <NavLink exact to="/dashboard/etudiant/" activeClassName="selected" ><SidebarLink icon={<SchoolIcon />} text="Etudiants" /></NavLink>
                <NavLink exact to="/dashboard/encadreur/" activeClassName="selected" ><SidebarLink icon={<WorkIcon />} text="Enseignant" /></NavLink>
                <NavLink exact to="/dashboard/superviseur/" activeClassName="selected"><SidebarLink icon={<BusinessCenterIcon />} text="Superviseur" /></NavLink>
                <NavLink exact to="/dashboard/soutenance/" activeClassName="selected"><SidebarLink icon={<TuneIcon />} text="Soutenance" /></NavLink>
                <NavLink exact to="/dashboard/finance/" activeClassName="selected"><SidebarLink icon={<AccountBalanceWalletIcon />} text="Finance" /></NavLink>

            </div>
        </div >
    )
}
