import React from 'react'
import {LuPenTool} from 'react-icons/lu'

import {BsGlobe,BsAndroid2} from "react-icons/bs"
import {BiLogoYoutube} from "react-icons/bi"

import { FaBootstrap, FaFigma, FaJsSquare, FaLaravel, FaNodeJs, FaPython,FaReact } from "react-icons/fa";
import { SiDjango, SiFramer, SiMui, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { Star } from 'react-awesome-shapes/dist/shapes/star';

export const About = () => {
  return (
   <div className='' id='about'>
     <div className='w-full h-full flex  justify-center lg:py-20 py-10'>
        <div className='lg:w-5/6 px-6 lg:px-0'>
            <div className='lg:flex  '>
                <div className='lg:w-1/2'>
                    <h3 className=' font-open font-bold text-3xl text-white mt-5'>
                        Fullstack  Developer
                    </h3>
                    <p className='text-sm font-normal font-poppins text-slate-300 mt-3 leading-6'>
                    As a developer, my ultimate goal is to create innovative, efficient, and user-friendly mobile and web applications that meet the specific needs of clients and provide a delightful experience for end-users. I stay updated with the latest trends and advancements in both mobile app and website development industries to continually enhance my skills and deliver cutting-edge solutions.
                    </p>
                </div>
                <div className='lg:w-1/2 flex justify-center mt-6 lg:mt-0'>
                        <div className='projects lg:flex '>
                              <div className='lg:w-1/3 '>
                                    <div className='p-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl '>
                    
                                        <div className=''>
                                            <FaReact className='w-12 h-12 text-blue-800 text-center'/>
                                            <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>10+ projects</p>
             
                                        </div>
                                       
                                        
                                    </div>
                                    <div className='p-5 mt-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>
                    
                                        <div className=''>
                                            <FaNodeJs className='w-12 h-12 text-emerald-600 text-center'/>
                                            <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>5+ projects</p>

                                        </div>
                                    
                                        
                                    </div>
                                    
                              </div>
                              <div className='lg:w-1/3 lg:ml-10 mt-6 lg:mt-0'>

                                    <div className='p-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>
                    
                                        <div className=''>
                                            <SiNextdotjs className='w-12 h-12 text-balck text-center'/>
                                            <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>3+ projects</p>

                                        </div>
                                    
                                        
                                    </div>
                                    <div className='p-5 mt-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>

                                        <div className=''>
                                            <FaLaravel className='w-12 h-12 text-red-600 text-center'/>
                                            <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>1+ projects</p>

                                        </div>
                                    
                                        
                                    </div>
                              
                              </div>
                              <div className='lg:w-1/3 lg:ml-10 mt-6 lg:mt-0'>

                                            <div className='p-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>

                                                <div className=''>
                                                    <SiDjango className='w-12 h-12 text-green-600 text-center'/>
                                                    <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>5+ projects</p>

                                                </div>

                                                
                                            </div>
                                            <div className='p-5 mt-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>

                                                <div className=''>
                                                    <FaFigma className='w-12 h-12 text-rose-600 text-center'/>
                                                    <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>15+ projects</p>

                                                </div>

                                                
                                            </div>

                                            </div>

                              
                        </div>
                </div>
            </div>
        </div>

      
    </div>

    <div className='w-full h-full flex  justify-center lg:py-20'>
             <motion.div className='' initial={{x:-60,y:0,rotate:0}} animate={{y:50,x:-90,rotate:50}} transition={{duration:1,repeat:Infinity,repeatType:'mirror'}}>
                            <Star
                                size="50px"
                                zIndex={2}
                                color="radial-gradient(circle, #5eead4, #14b8a6);"
                            />
                    </motion.div>
          <div className='lg:mt-10 lg:w-5/6'>
            <div className='lg:flex px-5 lg:px-0'>
                
               

                <div className='lg:w-1/2 order-2'>
                    <h3 className=' font-open font-bold text-3xl lg:text-4xl text-white mt-5'>
                        Frontend ( frameworks & Library )
                    </h3>
                    <p className='text-sm font-normal font-poppins text-slate-300 mt-3 leading-6'>
                    I am proficient in using Bootstrap, Tailwind CSS, Material-UI (MUI), and Framer Motion for animations. Having completed numerous projects, I possess strong skills in front-end development, ensuring that applications are not only functional but also engaging and user-friendly.
                    </p>
                </div>

                <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0 order-1'>

                    
                      
<div className='projects lg:flex justify-between '>
      <div className='lg:w-1/3 '>
            <div className='p-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl '>

                <div className=''>
                    <FaBootstrap className='w-12 h-12 text-violet-800 text-center'/>
                    <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>10+ projects</p>

                </div>
               
                
            </div>
            <div className='p-5 mt-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>

                <div className=''>
                    <SiTailwindcss className='w-12 h-12 text-sky-600 text-center'/>
                    <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>5+ projects</p>

                </div>
            
                
            </div>
            
      </div>
      <div className='lg:w-1/3 lg:ml-10 mt-6 lg:mt-0'>

            <div className='p-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>

                <div className=''>
                    <SiMui className='w-12 h-12 text-blue-800 text-center'/>
                    <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>3+ projects</p>

                </div>
            
                
            </div>
            <div className='p-5 mt-5  flex lg:flex-col justify-center items-center bg-stone-800 hover:bg-blue-600 lg:w-40 lg:h-40 w-48 h-44 rounded-xl'>

                <div className=''>
                    <SiFramer className='w-12 h-12 text-black text-center'/>
                    <p className='text-slate-300 font-inter font-medium text-md mt-2 text-center'>1+ projects</p>

                </div>
            
                
            </div>
      
      </div>
      

      
</div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
