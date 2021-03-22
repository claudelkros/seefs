import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';
import ChoiceListContainer from './components/choiceList/ChoiceListContainer';

export default function SetupView({ value, handleChange, facultes }) {

    return (
        <>
            <RadioGroup aria-label="Department" name="department" value={value} onChange={e => handleChange(e)}>
                {facultes.map(val => {
                    return (
                        <ChoiceListContainer key={val.id} title={val.title} departments={val.departments} />
                    )
                })}
            </RadioGroup>
        </>

    )
}
