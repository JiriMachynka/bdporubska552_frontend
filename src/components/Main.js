import { Outlet } from 'react-router-dom' 



function Main() {
    return(
        <article className='container bg-gray-400'>
            <Outlet />
        </article>
    )
}

export default Main