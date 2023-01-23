import React from 'react'
import Link from 'next/link'



function Hero() {
    return (
        <div className="hero min-h-screen mb- bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">ALEX GALVAN</h1>
                    <p className="py-6">FULL STACK DEVELOPER.</p>
                    <Link href='/about' className="btn btn-primary">ABOUT ME</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
