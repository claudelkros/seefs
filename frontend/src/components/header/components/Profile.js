import React from 'react'
import { Link } from 'react-router-dom'
import './styles/profile.scss'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/authActions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { toggleCloseProfile, toggleOpenProfile } from '../../../redux/actions/utilsActions'

export default function Profile() {

    // Connecting to the store
    const toggleValue = useSelector(state => state.utils.toggleProfile)


    const dispatch = useDispatch()


    // Logout action
    const handleLogout = () => {
        dispatch(logout())
    }

    // Onclick away actions

    const handleClickAway = () => {
        dispatch(toggleCloseProfile());
    };

    // TOGGLE ACTION
    const handleClick = (e) => {
        dispatch(toggleOpenProfile())
    };



    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="profile" onClick={e => handleClick(e)}>
                {toggleValue ? <div className="profile__content">
                    <div className="content__item">
                        <div className="item__wrapper">
                            <AccountCircleIcon className="icon first" />

                            <Link to="profile" >
                                <span className="text--first">
                                    Mon compte
                        </span>
                            </Link>
                        </div>

                    </div>

                    <div className="content__item">
                        <div className="item__wrapper">
                            <ExitToAppIcon className="icon second" />
                            <span className="text--second" onClick={e => handleLogout()}>
                                Se deconnecter
                       </span>
                        </div>
                    </div>

                </div> : ''
                }            </div>
        </ClickAwayListener>
    )
}
