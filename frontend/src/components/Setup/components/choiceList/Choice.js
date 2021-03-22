import React from 'react'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './styles/choice.scss'

export default function Choice({ value, label }) {



    return (
        <div className="choice">
            <FormControlLabel value={value} control={<Radio />} label={label} />
        </div>
    )
}
