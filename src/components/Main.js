import React from 'react'
import { Outlet } from 'react-router-dom' 


function Main() {
    return(
        <article className='max-w-5xl mx-auto bg-sand-article my-2 px-8 py-3'>
            <Outlet />
        </article>
    )
}

export default Main