import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/../public/images/galvan-alex.jpeg" width={500} height={200} alt="AlexGalvan" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">ALEX GALVAN</h1>
                        <p className="py-6">Full Stack Software Developer.</p>
                        <Link className="btn btn-primary" href={'/about'}>ABOUT ME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
