import React from 'react'

function Contact() {
    return(
    <>
    <h2 className="text-2xl font-bold">Kontakt</h2>
    
    <div className='flex flex-row justify-center'>
        <address className='basis-1/3'>
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

            <button className='btn btn-sand mt-10 font-bold'>Napište nám</button>
            

        </address>

        <iframe  className="basis-1/3 rounded-lg" title="mapy"  src="https://frame.mapy.cz/s/lorupedapa" width="400" height="280" frameborder="0"></iframe>
    </div>    
       
    </>
    )
}

export default Contact