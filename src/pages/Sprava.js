import React from 'react'
import Nadpis from '../components/Nadpis'

function Sprava(props) {
    return(
    <>
    <Nadpis name={props.page} />
    
    <ol className='flex flex-wrap p-0 mb-4 list-none '>
        <li className='pr-2'><a href="/">Home</a></li>
        <li className='pr-2'> | </li>
        <li>Správa domu</li>
    </ol>
    
    
</>
    )
}

export default Sprava