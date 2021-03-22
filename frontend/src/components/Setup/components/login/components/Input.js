import { TextField } from '@material-ui/core'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export default function Input(props) {

    const { control } = useFormContext()

    const errorMessage = "Error"
    const helperText = "Helper"

    const { name, label } = props
    return (
        <Controller
            as={TextField}
            name={name}
            control={control}
            defaultValue=""
            label={label}
            // InputLabelProps={{
            //     className: required ? "required-label" : "",
            //     required: required || false,
            // }}
            // error={errorMessage}
            // helperText={helperText}
            variant="outlined"
            {...props}
        />
    )
}
