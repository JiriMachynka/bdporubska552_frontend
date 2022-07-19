import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo-bd552.png'

function Navbar() {
    return (
    <Disclosure as='nav' className='bg-sand-navbar'>
    {({open}) => (
    <>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className="flex items-center">
                    <div className='flex-shrink-0'>
                        <img 
                            className='h-8 w-auto' 
                            src={logo}
                            alt="bd 522"
                        />
                    </div>        
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4 text-lg'>
                            {/*Hlavní menu - velké monitory*/}
                            <Link to='/' className='nav-link'>Domů</Link>

                            {/* Dropdown menu 'O nás' */}
                            <Menu>
                            {({open}) => (
                            <>
                                <Menu.Button className='nav-link flex items-center'>
                                    <span className='pr-2'>O nás</span>
                                    {open ? 
                                        <ChevronDownIcon className='h-5 w-5' />
                                        :
                                        <ChevronUpIcon className='h-5 w-5' />    
                                    }
                                </Menu.Button>
                            
                                <Transition
                                    
                                >
                                    <Menu.Items>
                                        <Menu.Item>

                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                                </>
                            )}    
                            </Menu>

                            <Link to='/documenty' className='nav-link'>Dokumenty</Link>
                            <Link to='/formulare' className='nav-link'>Formuláře</Link>
                            <Link to='/fotogalerie' className='nav-link'>Fotogalerie</Link>
                            <Link to='/kontakt' className='nav-link'>Kontakt</Link>
                        </div>
                    </div>
                </div>
                
                <div>
                        {/* Tady by mohlo být tlačítko pro vstup do administrace - ???? */}
                </div>

                <div>
                    {/* Menu pro mobilní telefony*/}
                </div>
                
                
                
                
                
                
                
                
                
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                         
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>
                                
                                {/*Dropdown menu*/}
                                <Menu as='div' className='relative inline-block text-left'>
                                    <Menu.Button className='nav-link inline-flex'>
                                        O nás
                                        <ChevronDownIcon 
                                            className='h-4 w-4 ml-1 mt-1'
                                            aria-hidden='true'
                                        />  
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-0 mt-2 w-48 rounded-md shadow-lg px-2 py-1 bg-sand-navbar ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item className='flex w-full nav-link'>
                                                <Link to={'/historie'}>Historie</Link>
                                            </Menu.Item>
                                            <Menu.Item className='flex w-full nav-link'>
                                                <Link to={'/sprava'}>Správa domu</Link>
                                            </Menu.Item>
                                            <Menu.Item className='flex w-full nav-link'>
                                                <Link to={'/predstavenstvo'}>Představenstvo</Link>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                
                            </div>
                       </div>
                </div>
                
                <div>

                </div>                

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