import React from 'react'

function ProjectCard({Name , Desc , Demo , Repo}) {
  return (
    <>
    

    <div className='shadow-lg h-60  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className=''>
              <span className='text-md font-bold text-black tracking-wider text-center'>
                {Name}
              </span>
              <div className='text-sm tracking-wide text-center italic'>
                {Desc}
              </div>
              <div className='pt-8 text-center'>
                <a href={Demo}>
                  <button className='text-center rounded-lg px-2 py-2 m-2 bg-blue-500 text-white font-bold text-md'>
                    Demo
                  </button>
                </a>
                <a href={Repo}>
                  <button className='text-center rounded-lg px-2 py-2 m-2 bg-blue-500 text-white font-bold text-md'>
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProjectCard