import React from 'react'
import Nadpis from '../components/Nadpis'

function Forms(props) {
    return(
    <>
    <Nadpis name={props.page} />
    <p>Zde naleznete formuláře ke stažení.</p>
    <br />
    <p>???? on-line vyplnění, tisk vyplněného nebo i odeslání ????</p>

</>
    )
}

export default Forms