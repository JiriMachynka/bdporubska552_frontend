import React from 'react'
import Nadpis from '../components/Nadpis'

function Documents(props) {
    return(
    <>
    <Nadpis name={props.page} />
    
    <p>Důležité dokumenty ve formátu pdf.</p>

    <ul>
        <li>Stanovy družstva</li>
        <li>Domovní řád</li>
        <li>Informace a podmínky k provádění rekonstrukcí v bytech</li>
        <li>... a další.</li>
    </ul>

</>
    )
}

export default Documents