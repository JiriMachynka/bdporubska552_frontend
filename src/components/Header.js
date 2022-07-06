import React from 'react'
import logo from '../images/logo-vezicky-color.png'   
import Navbar from './Navbar'

function Header(){
    return (
        <header className="flex flex-col md:flex-row">
            <img className="w-[265px] mx-auto" src={logo} alt="Logo bytového družstva" />
            <div className='flex flex-col w-full relative gap-3 md:gap-[20px]'>
                <h1 className="text-center text-4xl font-bold md:mt-4">Bytové družstvo Porubská 552</h1>
                <h3 className="text-center text-2xl">Informační portál bytového družstva</h3>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;