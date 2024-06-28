import React from 'react'
import {LuPenTool} from 'react-icons/lu'

import {BsGlobe,BsAndroid2} from "react-icons/bs"
import {BiLogoYoutube} from "react-icons/bi"
import { animate, motion } from 'framer-motion'
import { Cross ,} from 'react-awesome-shapes/dist/shapes/cross'
import { SquareDonut } from 'react-awesome-shapes/dist/shapes/squareDonut'
import { Diamond } from 'react-awesome-shapes/dist/shapes/diamond'

const Services = () => {
  return (
    <div className='w-full bg-stone-900 lg:py-20 py-5 px-5  lg:px-20 ' id='service'>
        
         <p className='text-5xl  font-poppins font-bold text-slate-100 mt-2 text-center'>What I am Great At</p>

         <p className='text-md mb-6 font-poppins mt-2 font-medium text-slate-400  text-center'>Experience with hands on projects in various domains </p>
     <div className='lg:flex mt-10'>
         <div className='lg:w-1/6 hidden lg:block'>

          <div className='relative bg-gradient-to-tl from-green-600 to-emerald-500 w-10 h-10  rounded-full'></div>
          <div className='relative bg-gradient-to-tl from-green-600 to-emerald-500 w-20 h-20 left-3  rounded-full'></div>

        
        
         </div>
         <div className='lg:w-4/6 services-list lg:flex justify-between'>
          
          <div className='p-10 bg-stone-950 hover:bg-rose-600 w-80 h-80 mb-5'>
               
               <div className='justify-center '>
                 <LuPenTool className='w-20 h-20 text-slate-100 text-center'/>
               
                 <h4 className='text-slate-100 font-poppins font-bold text-xl text-center mt-5'>Ui/Ux Designer </h4>
                 <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>15+ projects</p>
               </div>
          </div>

          <div className='p-10 mb-5 bg-stone-950 hover:bg-blue-600 w-80 h-80'>
               
               <div className='justify-center'>
                 <BsGlobe className='w-20 h-20 text-slate-100 text-center'/>
               
                 <h4 className='text-slate-100 font-poppins font-bold text-xl text-center mt-5'>Fullstack Developer </h4>
                 <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>11+ projects</p>
               </div>
          </div>

          <div className='p-10 mb-5 bg-stone-950 hover:bg-violet-600 w-80 h-80'>
               
               <div className='justify-center'>
                 <BsAndroid2 className='w-20 h-20 text-slate-100 text-center'/>
               
                 <h4 className='text-slate-100 font-poppins font-bold text-xl text-center mt-5'>Andriod & IOS </h4>
                 <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>3+ projects</p>
               </div>
          </div>


        
          
      </div>
      <div className='lg:w-1/6'>

       
         <div className='lg:mt-60 '>
                        <motion.div
                        initial={{ scale: 1,  }}
                        animate={{rotate:60,}}
                        transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
                        
                        >
                             <Cross
                                size="30px"
                                zIndex={2}
                                color="#0ea5e9"
                            />
                        </motion.div>

                        <motion.div
                        initial={{ x:0  }}
                        animate={{ x:40 ,animation:'linear'}}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                        
                       >
                         <SquareDonut
                              size="50px"
                              zIndex={2}
                              color="#ef4444"
                          />
                        </motion.div>

                       
                        
                       
                    </div>
      
      </div>
     </div>
      
    </div>
  )
}

export default Services
