import React, { useEffect } from 'react'
import LoginView from './LoginView'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function LoginContainer() {

    const push = useHistory()
    const user = useSelector(state => state.auth.user)

    let choice

    if (user === null) {
        choice = "Veuillez d'abord choisir un departement"
    } else {
        choice = user.department
    }

    return (
        <div>
            <LoginView department={choice} />
        </div>
    )
}
