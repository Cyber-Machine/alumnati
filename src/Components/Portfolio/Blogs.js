import React from 'react'

function Blogs({data}) {
    return (
        <>
    {
      data.length > 0 &&
    <div name='work' className='w-full md:h-screen text-black bg-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-blue-500'>
            Blogs
          </p>
          <p className='py-6'>Blogs I've written over the past months.</p>
        </div>

        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full overflow-y-auto">
        {
          data.map((blog)=>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            Medium
          </p>
          <a
            href={blog.Link}
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-blue-400"
            aria-label="Read article"
            title="Nori grape silver beet broccoli kombu beet"
            >
            {blog.Title}
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          {blog.Desc}
          </p>
          <a
            href={blog.Link}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
            >
            Read more
          </a>
        </div>)
        }
      </div>
    </div>
  </div>
  }
    </>
      );
    };


export default Blogs