import React from 'react'
import logo from '../images/logo-vezicky-color.png'   
import Navbar from './Navbar'

function Header(){
    return (
        <header className="flex flex-col md:flex-row">
            <img className="w-[265px]" src={logo} alt="Logo bytového družstva" />
            <div className='flex flex-col w-full relative'>
                <h1 className="text-center text-4xl font-bold pt-[40px] ">Bytové družstvo Porubská 552</h1>
                <h3 className="text-center text-2xl pt-[20px]">Informační portál bytového družstva</h3>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;