import React from 'react'
import { Outlet } from 'react-router-dom' 


function Main() {
    return(
        <article className='container bg-gray-400 my-2 px-2 py-3'>
            <Outlet />
        </article>
    )
}

export default Main