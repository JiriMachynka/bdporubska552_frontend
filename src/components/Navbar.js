import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [opened, setOpened] = useState(false)

    const toggleMenu = () => {
        setOpened(!opened)
    }

    return (
    <nav className='main-navbar h-full mt-auto w-full bg-sand-navbar md:h-11'>
        <ul className='flex flex-row h-full items-center justify-center md:gap-[15px]'>
            <li className='nav-item'>
                <Link to='/'>Domů</Link>
            </li>
            <li className='nav-item'>
                <Link to='/about'>O nás</Link>
                {/* <ul>
                    <li><Link to={'about/sprava'}>Správa domu</Link></li>
                    <li><Link to={'about/predstavenstvo'}>Představenstvo</Link></li>
                    <li className='nav-item'><Link to='about/history'>Historie</Link></li>
                </ul> */}
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
            <div onClick={toggleMenu}>
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
                <li className='nav-item-dropped'>
                    <Link to='/documents'>Dokumenty</Link>
                </li>
                <li className='nav-item-dropped'>
                    <Link to='/fotogalery'>Fotogalerie</Link>
                </li>
                <li className='nav-item-dropped'>
                    <Link to='/contact'>Kontakt</Link>
                </li>
            </ul>
        }
    </nav>
    )    
}

export default Navbar