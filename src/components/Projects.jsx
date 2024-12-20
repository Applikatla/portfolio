import React from 'react'
import Navbar from './Navbar'

export const Projects = () => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-lg font-light text-white rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  return (
    <>
    <Navbar/>
    <section className='projects'>
    <div className="mt-20 text-center text-3xl mb-5">projects</div>
        <div className="px-5 flex flex-wrap gap-5 justify-center">
          <div
            className={`sm:w-[150px] flex flex-col items-center ${commonStyles}`}
          >
            Fake Signatures Detection
            <img
              className="py-5 w-1/2"
              src="/images/github-original.svg"
              alt="JSimg"
            />
          </div>
          </div>
    </section>
    </>
  )
}
