import React from 'react'
import Nadpis from '../components/Nadpis'
import { Disclosure} from '@headlessui/react'
import ContactForm from '../components/ContactForm'                      

function Contact(props) {
    return(
    <>
    <Nadpis name={props.page} />
    
    <div className='grid md:grid-cols-2 mt-5 gap-2 justify-items-stretch'>
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
            
            {/*Kontaktní formulář*/}
            <Disclosure>
                <Disclosure.Button className="h-8 w-auto px-2 rounded-md bg-sand-navbar hover:bg-sand-font hover:text-white">
                    Kontaktní formulář
                </Disclosure.Button>
                <Disclosure.Panel>
                    <ContactForm />
                </Disclosure.Panel>
            </Disclosure>
        </div>
        <iframe  className="" title="mapy"  src="https://frame.mapy.cz/s/lorupedapa" width="100%" height="100%" frameborder="0"></iframe>
    </div>    
       
    </>
    )
}

export default Contact