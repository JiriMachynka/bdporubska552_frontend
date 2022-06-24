import React from 'react'
import logo from '../images/logo-vezicky-color.png'   
import Navbar from './Navbar'

function Header(){
    return (
        <header className="flex  flex-row h-auto">
            <img className="w-auto" src={logo} alt="Logo bytového družstva" />
            <div className='w-full mt-3'>
                <h1 className="text-center text-4xl font-bold p-3">Bytové družstvo Porubská 552</h1>
                <h3 className="text-center text-2xl p-3">Informační portál bytového družstva</h3>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;