import React from 'react'
import Image from 'next/image'
import Contact from './Contact'

function About() {
    return (
        <div id="about" className='pt-11 flex justify-center'>
            <div className="bg-base-200 rounded-md">
                <div className="hero-content flex-col lg:flex-row max-w-4xl">
                    <Image src="/images/galvan-alex.jpeg" width={300} height={200} alt="alex galvan" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='sm:text-center lg:text-start'>
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6">My name is Alex Galvan and I have been
                            developing automations, tools and applications
                            for over 3 years. I have a strong background
                            in Python and Javascript. Experience in using
                            React | Django | NextJS | React Native | and much more.
                            Feel free to reach out to see how I can contribute to your team.</p>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
