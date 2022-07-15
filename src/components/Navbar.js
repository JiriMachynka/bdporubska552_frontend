import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
//import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

function Navbar() {
    const [opened, setOpened] = useState(false)

    return (
    <Disclosure as='nav' className='bg-sand-navbar'>
        {({open}) => (
        <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                    </div>
        
        <ul className=''>
            <li className=''><Link to='/'>Domů</Link></li>
            <li className=''>
                O nás
                <ul>
                    <li><Link to={'/historie'}>Historie</Link></li>
                    <li><Link to={'/sprava'}>Správa domu</Link></li>
                    <li><Link to={'/predstavenstvo'}>Představenstvo</Link></li>
                </ul>
            </li>
            <li className='nav-item'><Link to='/documenty'>Dokumenty</Link></li>
            <li className='nav-item'><Link to='/formulare'>Formuláře</Link></li>
            <li className='nav-item'><Link to='/fotogalerie'>Fotogalerie</Link></li>
            <li className='nav-item'><Link to='/kontakt'>Kontakt</Link></li>
            <div onClick={() => setOpened(prev => !prev)}>
                {opened ?
                    <CloseIcon className='hamburger-menu' style={{
                        marginRight: "12px",
                        display: "block",
                        cursor: "pointer",
                    }} />
                    :
                    <MenuIcon className='hamburger-menu' style={{
                        marginRight: "12px",
                        display: "block",
                        cursor: "pointer",
                    }} />
                }
            </div>
        </ul>  
            {opened &&
                <ul className='dropdown'>
                    <li className='nav-item-dropped'>
                        <Link to='/about'>O nás</Link>
                        {/* <ul>
                            <li><Link to={'about/sprava'}>Správa domu</Link></li>
                            <li><Link to={'about/predstavenstvo'}>Představenstvo</Link></li>
                            <li className='nav-item'><Link to='about/history'>Historie</Link></li>
                        </ul> */}
                    </li>
                    <li className=''>
                        <Link to='/documents'>Dokumenty</Link>
                    </li>
                    <li className=''>
                        <Link to='/fotogalery'>Fotogalerie</Link>
                    </li>
                    <li className=''>
                        <Link to='/contact'>Kontakt</Link>
                    </li>
                </ul>
            }
                </div>
            </div>
            <Disclosure.Panel>

            </Disclosure.Panel>
            </>    
        )}
    </Disclosure>
    )    
}

export default Navbar