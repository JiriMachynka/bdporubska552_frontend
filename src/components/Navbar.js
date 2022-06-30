import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
    <nav className='h-11 absolute bottom-0 inset-x-0 bg-sand-navbar'>
        <ul className='flex flex-row h-full items-center justify-center gap-[15px]'>
            <li className='nav-item'>
                <Link to='/'>Domů</Link>
            </li>
            <li className='nav-item'>
                <Link to='/about'>O nás</Link>
            </li>
            <li className='nav-item'>
                <Link to='/history'>Historie</Link>
            </li>
            <li className='nav-item'>
                <Link to='/documents'>Dokumenty</Link>
            </li>
            <li className='nav-item'>
                <Link to='/fotogalery'>Fotogalerie</Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact'>Kontakt</Link>
            </li>
        </ul>    
    </nav>
    )    
}

export default Navbar