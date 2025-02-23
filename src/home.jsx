import React from 'react'
import { useNavigate } from 'react-router-dom'
import resume from './assets/vignesh fsd.pdf'
import image from './assets/myphoto.jpg'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-b from-blue-900 to-sky-900 font-reem max-sm:pt-16 flex max-sm:flex-col h-screen md:items-center'>
      <div className='flex justify-center md:w-1/2 items-center'>
      <img className="h-96 w-11/12 object-cover md:w-80" src = {image}/>
      </div>
      <div className='mt-5 flex flex-col items-center gap-2 md:items-start'>
        <h1 className="text-sky-500 font-bold text-5xl max-sm:text-3xl">VIGNESH BL</h1>
        <p className="text-white font-bold text-2xl"> Mern Stack developer</p>
        <p className="text-white opacity-70 w-4/5 max-sm:text-center">As a dedicated and passionate MERN Stack Developer, My
          expertise lies in developing full-stack applications using MongoDB,
          Express.js, React.js, and Node.js.</p>
          <div className="flex gap-2 mt-2 ">
            <button className="p-2 border rounded hover:bg-sky-700 hover:border-none text-white w-32" onClick={()=> navigate("/about")}>About Me</button>
            <button className="p-2 border rounded hover:bg-sky-700 hover:border-none text-white w-32"><a href={resume} target="_blank">Check Resume</a></button>
            </div>
            </div>
    </div>
  )
}

export default Home