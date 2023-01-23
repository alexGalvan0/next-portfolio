import React from 'react'
import Form from './Form'

function Footer() {
    return (
        <div>
            <footer className="footer grid-rows-1 p-10 bg-neutral text-neutral-content justify-center">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <Form />
            </footer>
        </div>
    )
}

export default Footer