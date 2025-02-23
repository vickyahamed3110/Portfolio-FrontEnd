import React from 'react'

function About() {
  return (
   <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-sky-900 font-reem flex-wrap pt-12">
       <div className="flex flex-col justify-center items-center w-6/12 max-md:w-11/12">
      <h1 className="text-white text-center font-bold text-4xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-200">About Me</h1>
      <p className="text-white text-center md:text-2xl">
        Hi, Iam a qualified full stack developer with familarity with programming utilities and languages.
        Knowledge in frontend and backend development with database management. Handles any part of the process with ease.
        Good team player with a willingness to learn and grow with the organization.
        </p>
    </div>
       
        <img className="h-96 max-md:w-11/12 mt-5 "src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"/>
    </div>
  )
}

export default About