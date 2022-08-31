import React from 'react';
import ProjectCard from './ProjectCard';
// import WorkImg from '../assets/workImg.jpeg';
// import realEstate from '../assets/realestate.jpg';

const Work = ({data}) => {
  return (<>
    {data.length>0 &&
      <div name='work' className='w-full md:h-screen text-black bg-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
      <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-teal-300'>
      Projects
      </p>
      <p className='py-6'>Recent Projects done by me.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {data.map((p)=> <ProjectCard Name={p.Title} Desc={p.Desc} Repo={p.Link} Demo={p.Demo}/>)}  
        </div>
        </div>
        </div>
      }
      </>
  );
};

export default Work;