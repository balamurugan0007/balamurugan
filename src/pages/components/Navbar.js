
import React, { useState } from 'react'

import { CiMenuFries } from "react-icons/ci";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Navbar = () => {

  const navlist = [
    {"id":0,"name":'Home','link':'#home'},
    {"id":1,"name":'About','link':'#about'},
    {"id":2,"name":'Services','link':'#service'},
    {"id":3,"name":'Projects','link':'#project'},
    {"id":4,"name":'Contact','link':'#contact'},
  ]
  const [mobilenav,setnav]=useState()

  function openmobilenav (){
      if(mobilenav!=null){
        setnav(null)
      }
      else{
        setnav(true)
      }
  }
  return (
    <div className='w-full h-full lg:px-20 py-10 '>


<nav className=" fixed w-full z-20 top-0 start-0 bg-stone-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <AnchorLink href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
     
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Fullstack Application Developer</span>
  </AnchorLink>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-orange-600 hidden hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-800">Resume</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <CiMenuFries className='text-slate-300 w-12 h-12' onClick={openmobilenav}/>
        <span className="sr-only">Open main menu</span>
        
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
   {
    navlist.map((res)=>(
      <li key={res.id}>
      <AnchorLink href={res.link} className="block py-2 px-3 text-white  rounded md:bg-transparent hover:text-orange-600" aria-current="page">{res.name}</AnchorLink>
    </li>
    ))
   }
    
    </ul>
  </div>
  </div>

  {
  mobilenav && 
  <div >
       {
    navlist.map((res)=>(
      <li key={res.id} className=' list-none' onClick={openmobilenav}>
      <AnchorLink href={res.link} className="block py-2 px-3 text-white  rounded md:bg-transparent hover:text-orange-600" aria-current="page">{res.name}</AnchorLink>
    </li>
    ))
   }
  </div>
}
</nav>




    </div>
  )
}