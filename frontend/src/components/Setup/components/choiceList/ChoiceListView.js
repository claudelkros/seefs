import React from 'react'
import TitleBarView from '../titleBar/TitleBarView'
import Choice from './Choice'
import './styles/choicelist.scss'

export default function ChoiceListView(props) {
    // console.log(props.departments)

    return (
        <div className="choiceList">
            <div className="choiceList__title">
                <TitleBarView title={props.title} />
            </div>
            <div className="choiceList__content">
                {props.departments.map((val, index) => {
                    return <Choice key={index} value={val} label={val} />
                })}

            </div>
        </div>
    )
}
