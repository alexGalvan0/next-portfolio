"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import NavBar from '../components/NavBar'

export default function Home() {

  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    document.querySelector<any>('html').setAttribute('data-theme', theme)
  }, [theme])


  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <div className="flex
                      md:flex-row md:justify-evenly 
                      sm:gap-10 sm:justify-center sm:flex-col sm:pl-10
                      pt-10 bg-base-200 rounded-md 
                      py-10 mx-20 mt-10">
        <div className="badge badge-lg">React</div>
        <div className="badge badge-lg badge-primary">NextJs</div>
        <div className="badge badge-lg badge-secondary">Typescript</div>
        <div className="badge badge-lg badge-accent">Python</div>
        <div className="badge badge-lg badge-info">Django</div>
      </div>
      <About />
    </div>
  )
}
