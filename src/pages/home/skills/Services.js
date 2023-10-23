import React from 'react'
import {LuPenTool} from 'react-icons/lu'

import {BsGlobe,BsAndroid2} from "react-icons/bs"
import {BiLogoYoutube} from "react-icons/bi"

const Services = () => {
  return (
    <div className='w-full bg-slate-700 lg:py-20 py-5 px-5  lg:px-20' id='Services'>
        <h2 className='text-2xl text-yellow-400 text-center font-lora mb-10  font-bold'>Services</h2>
         <p className='text-5xl  font-poppins font-bold text-slate-100 mt-2 text-center'>What I am Great At</p>

         <p className='text-md mb-6 font-poppins mt-2 font-medium text-slate-400  text-center'>Experience with hands on projects in various domains </p>
        <div className='services-list lg:flex lg:px-10 justify-between'>
          
            <div className='p-10 bg-slate-900 hover:bg-rose-600 w-80 h-80 mb-5'>
                 
                 <div className='justify-center '>
                   <LuPenTool className='w-20 h-20 text-slate-100 text-center'/>
                 
                   <h4 className='text-slate-100 font-poppins font-bold text-xl text-center mt-5'>Ui/Ux Designer </h4>
                   <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>15+ projects</p>
                 </div>
            </div>

            <div className='p-10 mb-5 bg-slate-900 hover:bg-blue-600 w-80 h-80'>
                 
                 <div className='justify-center'>
                   <BsGlobe className='w-20 h-20 text-slate-100 text-center'/>
                 
                   <h4 className='text-slate-100 font-poppins font-bold text-xl text-center mt-5'>Fullstack Developer </h4>
                   <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>11+ projects</p>
                 </div>
            </div>

            <div className='p-10 mb-5 bg-slate-900 hover:bg-violet-600 w-80 h-80'>
                 
                 <div className='justify-center'>
                   <BsAndroid2 className='w-20 h-20 text-slate-100 text-center'/>
                 
                   <h4 className='text-slate-100 font-poppins font-bold text-xl text-center mt-5'>Andriod & IOS </h4>
                   <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>3+ projects</p>
                 </div>
            </div>


          
            
        </div>
      
    </div>
  )
}

export default Services
