import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import './styles/notification.scss'

export default function Notification() {
    return (
        <div className="notification">
            <NotificationsIcon className="notification__icon" />
        </div>
    )
}
