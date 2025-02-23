import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
   
  )
}

export default Portfolio