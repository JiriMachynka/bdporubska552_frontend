import { Outlet } from 'react-router-dom' 



function Main() {
    return(
        <article className='container bg-gray-400 clear-both px-2 py-3'>
            <Outlet />
        </article>
    )
}

export default Main