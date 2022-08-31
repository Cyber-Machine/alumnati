import React from 'react'
import { AddProject } from '../Components/AddProject/AddProject'
import { ShowProjects } from '../Components/AddProject/ShowProjects'
import { Footer } from '../Components/Footer'
import { Nav } from '../Components/Nav'
function AddProjectsPage() {
  return (
    <>
        <Nav/>
        
        <div className="container w-full flex flex-wrap">

        <AddProject/>
        <ShowProjects/>
        </div>
        <Footer/>
    </>
  )
}

export default AddProjectsPage