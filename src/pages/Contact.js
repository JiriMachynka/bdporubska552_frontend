import React from 'react'
import Nadpis from '../components/Nadpis'

function Contact(props) {
    return(
    <>
    <Nadpis name={props.page} />
    
    <div className='grid grid-cols-2 mt-5 justify-items-stretch'>
        <div className='pl-5 pt-3'>
            <address >
                <table>
                    <tr className='text-left'>
                        <th>Obchodní název:</th>
                        <td className='px-3'>Bytové družstvo Porubská 552</td>
                    </tr>
                    <tr className='text-left'>
                        <th>Sídlo:</th>
                        <td className='px-3'>Porubská 552/24</td>
                    </tr>
                    <tr className='text-left'>
                        <th></th>
                        <td className='px-3'>708 00 Ostrava</td>
                    </tr>
                    <tr className='text-left'>
                        <th>IČO:</th>
                        <td className='px-3'>25363123</td>
                    </tr>
                    <tr className='text-left'>
                        <th>E-mail:</th>
                        <td className='px-3'>bd552@centrum.cz</td>
                    </tr>
                    <tr className='text-left'>
                        <th colSpan={2}></th>
                    </tr>
                </table>
            </address>
            <p className='mt-8'>Můžete nás kontaktovat pomocí <button className='font-bold'>formuláře.</button></p>
        </div>
        <iframe  className="" title="mapy"  src="https://frame.mapy.cz/s/lorupedapa" width="480" height="310" frameborder="0"></iframe>
    </div>    
       
    </>
    )
}

export default Contact