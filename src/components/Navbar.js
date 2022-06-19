import { Link } from 'react-router-dom'

function Navbar() {
    return (
    <nav >
        <ul className='flex flex-row items-center justify-center bg-slate-200 gap-[10px]'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/history'>History</Link>
            </li>
            <li>
                <Link to='/documents'>Documents</Link>
            </li>
            <li>
                <Link to='/fotogalery'>Fotogalery</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>    
    </nav>
    )    
}

export default Navbar