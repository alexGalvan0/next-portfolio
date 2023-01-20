import React from 'react'
import Link from 'next/link'
function NavBar() {
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={'/'}>Homepage</Link></li>
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'#'}>Projects</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-ghost normal-case text-xl" href='/'>AG</Link>
                </div>

            </div>
        </div>
    )
}

export default NavBar