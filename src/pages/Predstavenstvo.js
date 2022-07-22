import React from 'react'
import Nadpis from '../components/Nadpis'

function Predstavenstvo(props) {
    return(
    <>
    <Nadpis name={props.page} />
    
    <h3 className='text-center text-2xl py-8'>Členové představenstva a kontrolní komise</h3>
    <div className='grid md:grid-cols-2 grid-cols-1 pt-2 pb-4'>
        
        <div className='border-l-4'>
            <table>
                <thead>
                    <tr>
                        <th>Představenstvo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tuhovčáková Petra, ing.</td><td>Předseda</td>
                    </tr>
                    <tr>
                        <td>Studnička Martin</td><td>Místopředseda</td>
                    </tr>
                    <tr>
                        <td>Hamorníková Eva</td><td>Člen</td>
                    </tr>
                </tbody>     
            </table>
        </div>
        
        <div className='border-l-4'>
            <table>
               <thead>
                    <tr>
                        <th>Kontrolní komise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Káňová Helena, PhDr.</td><td>Předseda</td>
                    </tr>
                    <tr>
                        <td>Bravanský Oldřich</td><td>Člen</td>
                    </tr>
                    <tr>
                        <td>Duda František</td><td>Člen</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        
        
    </div>
    
    
</>
    )
}

export default Predstavenstvo