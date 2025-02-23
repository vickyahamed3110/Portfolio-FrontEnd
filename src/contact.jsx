import React from 'react'
import { useState } from 'react'
import sendMailApi from './api'
const Contact = () => {
    const[name, setName] = useState("")
    const[mail, setMail] = useState("")
    const[message, setMessage] = useState("")
    const handleSubmit = async(e)=> {
      e.preventDefault()
      await sendMailApi({name, mail, message})
      setName("")
      setMail("")
      setMessage("")
    }
    
  return (
    <div className="h-screen flex bg-gradient-to-b from-blue-900 to-sky-900 font-reem flex flex-col w-full justify-center items-center">
      <form className="flex flex-col gap-3 h-96 w-96 items-center justify-center" onSubmit={handleSubmit}>
      <h1 className="text-white font-bold text-3xl mb-5">CONTACT</h1> 
        <input type="text"className="p-2 rounded w-full max-sm:w-9/12" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/>
        <input type="text" className="p-2 rounded w-full max-sm:w-9/12" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder='Enter Your EMail'/>
        <textarea value={message} className="w-full max-sm:w-9/12" onChange={(e)=>setMessage(e.target.value)} placeholder="Ask Your Question"/>
      <button className="text-white bg-gradient-to-r from-blue-400 to-sky-600 p-1 px-5 rounded hover:scale-75 duration-200 w-3/5 h-12" type="submit">Submit</button>
      <div className="flex gap-2 mt-5 text-white">
      <a href="https://github.com/vickyahamed3110" target="_blank"><i className="fa-brands fa-github fa-xl hover:-translate-y-1 duration-200"></i></a>
      <a href="https://www.linkedin.com/in/vignesh-bl-1400a187/" target="_blank"><i className="fa-brands fa-linkedin fa-xl  hover:-translate-y-1 duration-200"></i></a>
      </div>
      </form>
      </div>
    
  )
}

export default Contact