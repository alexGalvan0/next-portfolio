"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function NavBar() {
    const [theme, setTheme] = useState<string>('dark')

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(theme)
    };
    useEffect(() => {
        document.querySelector<any>('html').setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown fluid">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href={'#'}>Homepage</a></li>
                            <li><a href={'#about'}>About</a></li>
                            <li><a href={'#projects'}>Projects</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <input onChange={toggleTheme} type="checkbox" className="toggle toggle-primary  rounded-xl" />
                    <a data-theme={theme} className="btn btn-ghost normal-case text-xl" href='#'>AG</a>
                </div>

            </div>
        </div>
    )
}

export default NavBar