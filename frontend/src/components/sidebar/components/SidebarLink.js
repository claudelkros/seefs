import React from 'react'
import './styles/sidebarlink.scss'


export default function SidebarLink({ icon, text }) {
    return (
        <div className="sidebarlink">
            <div className="sidebarlink__content">
                <div className="content__icon" >
                    {icon}
                </div>

                <div className="content__text" >
                    {text}
                </div>
            </div>
        </div>
    )
}
