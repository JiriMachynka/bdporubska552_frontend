import React from 'react'
import { Outlet } from 'react-router-dom' 


function Main() {
    return(
        <article className='container bg-sand-article my-2 px-2 py-3'>
            <Outlet />
        </article>
    )
}

export default Main