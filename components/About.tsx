import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row max-w-4xl">
                    <Image src="/../public/images/galvan-alex.jpeg" width={300} height={200} alt="alex galvan" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6">My name is Alex Galvan and I have been
                            developing automations, tools and applications
                            for over 3 years. I have a strong background
                            in Python and Javascript. Experience in using
                            React | Django | NextJS | React Native | and much more.
                            Feel free to reach out to see how I can contribute to your team.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
