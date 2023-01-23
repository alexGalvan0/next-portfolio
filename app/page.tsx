"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { projects } from '../projects'
import Contact from '../components/Contact'
type projectt = {
  imagePath: string
  title: string
  description: string
  liveDemo: string
  repoLink: string
}

export default function Home() {

  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    document.querySelector<any>('html').setAttribute('data-theme', theme)
  }, [theme])


  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <About />
      {/* <div className="flex
                      md:flex-row md:justify-evenly 
                      sm:gap-10 sm:justify-center sm:flex-col sm:pl-10
                      pt-10 bg-base-200 rounded-md 
                      py-10 mx-20 mt-10">
                        
        <div className="badge badge-lg">React</div>
        <div className="badge badge-lg badge-primary">NextJs</div>
        <div className="badge badge-lg badge-secondary">Typescript</div>
        <div className="badge badge-lg badge-accent">Python</div>
        <div className="badge badge-lg badge-info">Django</div>
      </div> */}

      <div className="flex justify-center mt-10 p-10 bg-base-200">
        <div>
          <div className="divider">TEHCNOLOGIES</div>
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
        {projects?.map((project) => (
          <Card key={project.title}
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
