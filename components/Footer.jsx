import React from 'react'
import Form from './Form'

function Footer() {
    return (
        <div>
            <footer className="footer  p-10 bg-neutral text-neutral-content flex max-w-full">
                <div className='flex '>

                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer