import React from 'react'
import AddButton from '../addButton/AddButton'
import './styles/stepper.scss'

export default function StepperView() {
    return (
        <div className="stepper">
            <div className="stepper__content">
                Stepper here
           </div>
            <div className="stepper__button">
                <AddButton />
                <div />
            </div>
        </div>
    )
}
