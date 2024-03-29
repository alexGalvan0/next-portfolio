"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { projects } from '../projects'
import Contact from '../components/Contact'



type Projects = {
  Project: {
    title: string
    liveDemo: string
    imagePath: string
    description: string
    repoLink? :string
  }
}

export default function Home() {

  console.log(projects)

  const [theme, setTheme] = useState<string>('luxury');

  useEffect(() => {
    document.querySelector<HTMLHtmlElement>('html')!.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="relative">

      <NavBar />
      <Hero />
      <About />

      <div className="flex justify-center mt-10 p-10 bg-base-200">
        <div>
          <div className="divider">TECHNOLOGIES</div>
          <div className="stats stats-vertical lg:stats-horizontal shadow">

            <div className="stat">
              <div className="stat-value">JAVASCRIPT</div>
            </div>

            <div className="stat">
              <div className="stat-value">TYPESCRIPT</div>
            </div>

            <div className="stat">
              <div className="stat-value">REACT</div>
            </div>

            <div className="stat">
              <div className="stat-value">PYTHON</div>
            </div>

          </div>
        </div>
      </div>


      <div className="divider">PROJECTS</div>


      <div id='projects' className="flex flex-wrap justify-center mt-10 gap-4 align-middle md:px-50 mb-72">
        {projects.map((project:any, index) => (
          <Card key={index}
            title={project.title}
            liveDemo={project.liveDemo}
            imagePath={project.imagePath}
            description={project.description} />
        ))}
      </div>
      <div className="fixed right-10 bottom-10">
        <Contact />
      </div>


    </div>
  )
}
