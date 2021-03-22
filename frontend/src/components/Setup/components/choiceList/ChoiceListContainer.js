import React from 'react'
import ChoiceListView from './ChoiceListView'

export default function ChoiceListContainer(props) {

    return (
        <>
            <ChoiceListView title={props.title} departments={props.departments} />
        </>
    )
}
