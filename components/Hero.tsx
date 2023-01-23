import React from 'react'
import Link from 'next/link'
import '../components/Hero.css'



function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200 text-black splash">
            <div className="hero-content text-center">
                <div className="max-w-md opacity-100">
                    <h1 className="text-5xl font-bold">ALEX GALVAN</h1>
                    <p className="py-6">FULL STACK DEVELOPER.</p>
                    <a href='#about' className="btn btn-primary">ABOUT ME</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
