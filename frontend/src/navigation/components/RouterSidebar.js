import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SidebarView from '../../components/sidebar/SidebarView'
import { DASHBOARD, ENCADREUR, ETUDIANT, FINANCE, LOGIN, SETUP, SOUTENANCE, SUPERVISEUR } from '../CONSTANTS'
import PrivateRoute from '../PrivateRoute'

// This component handles the routes of the sidebar

export default function RouterSidebar() {
    return (
        <Switch>
            <Route exact path={DASHBOARD} component={SidebarView} />
            <Route exact path={ETUDIANT} component={SidebarView} />
            <Route exact path={ENCADREUR} component={SidebarView} />
            <Route exact path={SUPERVISEUR} component={SidebarView} />
            <Route exact path={SOUTENANCE} component={SidebarView} />
            <Route exact path={FINANCE} component={SidebarView} />
        </Switch>
    )
}
