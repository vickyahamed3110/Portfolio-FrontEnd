import React from 'react'

const Projects = () => {
  let projects = [
    {
      name:"RBAC",
      description:"RBAC (Role-Based Access Control) in a web application manages user permissions by assigning roles to users, ensuring they can only access resources and perform actions specific to their role. This approach enhances security by enforcing least privilege and simplifying user management.",
      githuburlfrontend:"https://github.com/vickyahamed3110/RBAC-Frontend.git",
      githuburlbackend:"https://github.com/vickyahamed3110/RBAC-Backend.git",
      deployurl:"https://splendid-empanada-e910f9.netlify.app/",
    },
    {
      name:"SHOPPING CART",
      description:"A shopping cart using Redux manages the state of items added to the cart across different components. It utilizes Redux actions and reducers to handle adding, removing, and updating items in the cart, ensuring consistent state management.",
      githuburlfrontend:"https://github.com/vickyahamed3110/Assignment-18-React-Redux.git",
      githuburlbackend:"",
      deployurl:"https://thriving-twilight-281de1.netlify.app/",
    },
  ]
  return (
    <div className="h-screen flex bg-gradient-to-b from-blue-900 to-sky-900 font-reem flex-col justify-center items-center max-sm:pt-16 max-sm:h-full">
        <h1 className="text-white font-bold text-3xl mb-5">MY PROJECTS</h1>
        <div className="flex max-sm:flex-col justify-center items-center gap-5">
           {projects.map((list)=>(
            <div className="text-white border rounded h-96 max-sm:w-11/12 w-96 flex items-center justify-center flex-col gap-4">
              <h1>{list.name}</h1>
              <p className="text-center">{list.description}</p>
              <div className="flex gap-2 flex-col">
              <button className ="text-white bg-gradient-to-r from-blue-400 to-sky-600 p-1 px-5 rounded hover:scale-75 duration-200"><a href={list.githuburlfrontend} target="_blank">Front-End Source Code</a></button>
              <button className ="text-white bg-gradient-to-r from-blue-400 to-sky-600 p-1 px-5 rounded hover:scale-75 duration-200"><a href={list.deployurl} target="_blank">Live Site</a></button>
              {list.githuburlbackend && <button className ="text-white bg-gradient-to-r from-blue-400 to-sky-600 p-1 px-5 rounded hover:scale-75 duration-200"><a href={list.githuburlbackend} target="_blank">Back-End Source Code</a></button>}
              </div>
              </div>

           ))} 
        </div>
    </div>
  )
}

export default Projects