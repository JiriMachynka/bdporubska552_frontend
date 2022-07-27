import React from 'react'
import Nadpis from '../components/Nadpis'

function Sprava(props) {
    return(
    <>
    <Nadpis name={props.page} />
    
    <div className='grid grid-cols-1 pt-2 pb-4'>
        <div className=' grid md:grid-rows border-b-4'>
            <table>
                <thead>
                    <tr><th colSpan='4'><span>OWLET REALITY s.r.o</span><span> , Spojů 835/2A, Ostrava – Poruba, 708 00</span></th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan='2' className='text-start'>Úřední hodiny:</td>
                        <td>Pondělí</td>
                        <td>8 – 12 hod.</td>
                        <td>13 – 17 hod.</td>
                    </tr>
                    <tr>
                        <td>Středa</td>
                        <td>8 – 12 hod.</td>
                        <td>13 – 14 hod.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='grid md:grid-cols-2 pt-8'>
            <div className='md:border-l-4 md:border-r-2 px-3'>
                <table id='contacts'>
                    <thead>
                        <tr><th>Kontakty</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b-2 border-black'>Rychlý kontakt</td>
                            <td className='border-b-2 border-black'>592 750 017</td>
                        </tr>
                        <tr>
                            <td className='border-b-2 border-black'>E-mail</td>
                            <td className='border-b-2 border-black'>owletreality@owletreality.cz</td>
                        </tr>
                        <tr>
                            <td className='border-b-2 border-black'>Účetní oddělení:</td>
                            <td className='border-b-2 border-black'>724 036 434</td>
                        </tr>
                        <tr>
                            <td className='border-b-2 border-black'>Technické oddělení</td>
                            <td className='border-b-2 border-black'>728 933 060</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='md:border-l-2 md:border-r-4'>
                <table>
                    <thead>
                        <tr><th colSpan='2'>Havarijní a poruchová služba</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>HAVARIJNÍ SLUŽBA</p>
                                <p>(voda, topení, plyn)</p>
                                <p>Nepřetržitě</p>
                                <p>Šimek gass s.r.o.</p>
                                <p>tel: 602 718 503</p>
                                <p>e-mail: simek@gass.cz</p>
                            </td>
                            <td>
                                <p>EV-servis s. r. o.</p>
                                <p>Středisko výtahy</p>
                                <p>tel.: 596 919 554</p>
                                <br />
                                <p>NONSTOP SERVIS</p>
                                <p>602 744 427</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
    </div>


    
    
    
</>
    )
}

export default Sprava