import React from 'react'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import './styles/titlebar.scss'


export default function TitleBarView({ title }) {
    return (
        <div className="titleBar">
            <div className="titleBar__text">
                <p className="text">{title}</p>
            </div>

            <div className="titleBar__hide">
                <p className="hide__text">cacher</p>
                <ExpandMoreOutlinedIcon className="hide__icon" />
            </div>
        </div>
    )
}
