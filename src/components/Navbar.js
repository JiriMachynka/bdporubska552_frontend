import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
    <nav className='mt-5 h-11'>
        <ul className='flex flex-row h-full items-center justify-center bg-slate-200 gap-[10px]'>
            <li>
                <Link to='/'>Domů</Link>
            </li>
            <li>
                <Link to='/about'>O nás</Link>
            </li>
            <li>
                <Link to='/history'>Historie</Link>
            </li>
            <li>
                <Link to='/documents'>Dokumenty</Link>
            </li>
            <li>
                <Link to='/fotogalery'>Fotogalerie</Link>
            </li>
            <li>
                <Link to='/contact'>Kontakt</Link>
            </li>
        </ul>    
    </nav>
    )    
}

export default Navbar