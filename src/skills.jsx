import React from 'react'

const Skills = () => {
  let skills = [{
    tech:'HTML',
    icon:"fa-brands fa-html5 fa-xl"
  }, {
    tech:"CSS",
    icon:"fa-brands fa-css3-alt fa-xl"
  },{
    tech:"BOOTSTRAP",
    icon:"fa-brands fa-bootstrap fa-xl"
  },{
    tech:'JAVASCRIPT',
    icon:"fa-brands fa-js fa-xl"
  },{
    tech:"TAILWIND CSS",
    icon:"fa-solid fa-feather"
  },{
    tech:"REACT JS",
    icon:"fa-brands fa-react"
  },{
    tech:"MYSQL",
    icon:"fa-solid fa-database"
  },{
    tech:"MONGO DB",
    icon:"fa-solid fa-leaf"
  },{
    tech:"NODE JS",
    icon:"fa-brands fa-node"
  },{
    tech:"EXPRESS JS",
    icon:"fa-brands fa-node-js"
  },{
    tech:"RESTFUL API",
    icon:"fa-solid fa-code-pull-request"
  }]
  return (
    <div className="h-screen flex bg-gradient-to-b from-blue-900 to-sky-900 font-reem max-sm:flex-col justify-center items-center max-sm:h-full pt-12">
      <div className="flex flex-col gap-2  items-center justify-center w-8/12">
        <h1 className="text-white md:text-4xl font-bold text-3xl">SKILLS</h1>
        <ul className="flex gap-5 flex-wrap w-11/12 justify-center max-sm:w-full">
        {skills.map((list)=>(
          <li className="text-white bg-gradient-to-r from-sky-400 to-sky-600 p-3 px-5 rounded-full flex gap-2 items-center 
          hover:scale-75 duration-200 text-sm">
            <i className={list.icon}></i><p className="font-bold text-xl">{list.tech}</p></li>
))}
        </ul>
        </div>
        <img className="h-96 max-sm:hidden"src="https://img.pikbest.com/png-images/20241210/productive-web-developer-workspace-with-laptop-and-inspirational-desk-accessories_11235388.png!w700wp"/>
      </div>
    
  )
}

export default Skills