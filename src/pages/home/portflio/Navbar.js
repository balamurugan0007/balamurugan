import React, { useEffect, useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

import detail from './detail'

const Navbar = () => {

  const [value ,setvalue]=useState("All")
  const [data,setdata]=useState()
  useEffect(()=>{
    const correct_value = detail.filter((res)=>res.type===value)
    setdata(correct_value)
  },[value])
  return (
    <div className='w-full  mt-12 mb-10'>
       <div className='lg:px-40'>
       <div className='navbar-list lg:flex hidden justify-between lg:px-40'>
           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-b-2  border-yellow-500 border-w-10 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("All")}>
                        All
                    </h3>
           </div>

           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-b-2  border-yellow-500 text-center cursor-pointer m-5 sm:text-center ' onClick={()=>setvalue("UiUx")}>
                        Ui/Ux
                    </h3>
           </div>

           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-b-2  border-yellow-500 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("Frontend")}>
                        Frontend
                    </h3>
           </div>

           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-b-2  border-yellow-500 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("Fullstack")}>
                        Fullstack
                    </h3>
           </div>

           <div className='w-32 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-b-2  border-yellow-500 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("Apps")}>
                        Andriod & IoS
                    </h3>
           </div>
        </div>
       </div>

       <div className='navbar-list lg:hidden flex flex-wrap justify-between lg:px-40'>
           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-2 rounded-md  border-yellow-500 border-w-10 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("All")}>
                        All
                    </h3>
           </div>

           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-2 rounded-md border-yellow-500 text-center cursor-pointer m-5 sm:text-center ' onClick={()=>setvalue("UiUx")}>
                        Ui/Ux
                    </h3>
           </div>

           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-2 rounded-md border-yellow-500 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("Frontend")}>
                        Frontend
                    </h3>
           </div>

           <div className='w-28 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-2 rounded-md  border-yellow-500 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("Fullstack")}>
                        Fullstack
                    </h3>
           </div>

           <div className='w-32 overflow-hidden'>
                <h3 className='text-slate-300 text-md font-poppins font-bold hover:border-2 rounded-md  border-yellow-500 text-center cursor-pointer m-5 sm:text-center' onClick={()=>setvalue("Apps")}>
                        Andriod & IoS
                    </h3>
           </div>
        </div>

        <section className='w-full  lg:py-16'>
                <div className='w-full  lg:flex'>
                    {
                     data && data.map((res)=>(
                     <div >
                             <div className=' lg:w-96 lg:h-96  w-80 h-80 p-6 lg:px-10 lg:py-10 bg-slate-700 m-5 '>
                          <img src={res.pic} alt='pic' className='lg:w-80 w-72 h-72 lg:h-80 object-cover'/> 
                     
                                </div>

                            <div className='px-2 lg:px-10'>
                                <h2 className='font-lora text-center lg:text-start text-slate-200 text-xl'>{res.name}</h2>
                                <p className='text-center lg:text-start font-poppins font-medium text-md text-sky-300 '>{res.stacks}</p>
                                <p className='text-center lg:text-start font-poppins font-thin text-md text-slate-400 lg:w-4/5'>{res.desc}</p>
                                
                               
                               <a href={res.visit} className='flex items-center mt-3 px-4 lg:px-0'>
                                <p className='text-center lg:text-start text-md font-thin text-red-500 font-poppins'>Visit Page</p>
                               <AiOutlineArrowRight className='text-center lg:text-start ml-2 text-red-500 text-xl w-10 h-6'/> </a>
                            
                            </div>
                     </div>
                      ))
                    }
                </div>
        </section>
      
    </div>
  )
}

export default Navbar
