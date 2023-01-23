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

    </div>
  )
}
