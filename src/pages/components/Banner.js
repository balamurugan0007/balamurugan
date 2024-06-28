import React from 'react'
import profile from '../assets/profile.png'
import {BiLogoLinkedin,BiLogoBehance,BiLogoGithub,BiLogoYoutube} from 'react-icons/bi'
import { FaPython,FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BsDatabaseFillLock, BsDatabaseSlash } from "react-icons/bs";
import { motion } from 'framer-motion';
import { Donut } from 'react-awesome-shapes/dist/shapes/donut';


const Banner = () => {
  return (
    <div className='w-full bg-stone-950 lg:py-20 py-10' id='home'>

        <div className='lg:flex'>
            <div className='lg:w-1/6 flex lg:justify-center justify-between'>
                    <div>
                        <motion.div
                        initial={{ scale: 1,  }}
                        animate={{rotate:90,}}
                        transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
                        style={{ width: '4rem', height: '4rem',  }} className='bg-gradient-to-tl from-green-600 to-emerald-500'
                        />
                        
                       
                    </div>

                    <div>
                        <motion.div
                        initial={{ scale: .2,  }}
                        animate={{rotate:90,scale:.8}}
                        transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
                        style={{ width: '4rem', height: '4rem',  }} className='bg-gradient-to-t from-pink-600 to-amber-500 lg:hidden '
                        />
                        
                       
                    </div>
                 
                   
            

            </div>
            <div className='banner lg:flex block  px-2 '>
             <div className='lg:w-1/2  justify-center order-2'>
                 <div className='flex lg:block justify-center px-10 lg:px-28  lg:relative '>
                    
                       <img src={profile} alt='pic' className='w-60  lg:w-96  shadow-sm  h-60 lg:h-96 rounded-full object-cover '/>
                 

                 </div>
                
                 <div className='  absolute'>
                           <div className='python-icon relative lg:bottom-96 lg:left-20 left-60 bottom-60'>
                               <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-stone-900 flex justify-center items-center shadow-md'>
                                  <FaPython className='text-indigo-800 w-4/6 h-4/6'/>
                               </div>
                           </div>

                          <div className='flex'>
                                <div className='react-icon relative lg:bottom-40 bottom-32 left-60'>
                                    <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-stone-900 flex justify-center items-center shadow-md'>
                                        <FaReact className='text-sky-600 w-4/6 h-4/6'/>
                                    </div>
                                </div>
                                <div className='react-icon relative lg:bottom-80 bottom-60 right-10 lg:right-20'>
                                    <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-stone-900 flex justify-center items-center shadow-md'>
                                        <RiJavascriptFill className='text-amber-600 w-4/6 h-4/6'/>
                                    </div>
                                </div>
                                
                          </div>
                          <div className='python-icon relative lg:bottom-96 left-20 bottom-40 lg:left-96'>
                               <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-stone-900 flex justify-center items-center shadow-md'>
                                  <SiDjango className='text-green-500 w-4/6 h-4/6'/>
                               </div>
                           </div>
                     </div>

                     
             </div>

             <div className='lg:w-1/2 h-full order-1'>

             <div className='w-full '>
               
                 <h3 className=' font-space leading-8 font-bold text-3xl text-center lg:text-start mt-10 lg:mt-0 lg:text-6xl text-white'>
                 Turning ideas <span className='text-green-500'>into reality</span> through <span className='text-green-500'>Code.</span>
                 </h3>
             </div>
               
                <div className='icons lg:mt-5 mt-6 flex lg:block justify-center '>
                     <div className='flex'>
                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-blue-700 hover:border-0 ml-3'>
                            <a target='_blank' href='https://www.linkedin.com/in/bala-murugan-20794b252/' >
                                <BiLogoLinkedin className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-sky-700 hover:border-0 ml-3'>
                            <a target='_blank' href='https://www.behance.net/murugank4' >
                                <BiLogoBehance className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-purple-600 hover:border-0 ml-3'>
                            <a target='_blank' href='https://github.com/balamurugan0007' >
                                <BiLogoGithub className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-red-800 hover:border-0 ml-3'>
                            <a target='_blank' href='https://youtube.com/@codemaxtechnology?si=aaLZUgMW7Ufdte8a' >
                                <BiLogoYoutube className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>
                     </div>

                    <div className=' mt-20 flex justify-center '>
                        <motion.div  initial={{x:0,y:0}} animate={{y:40}} transition={{duration:1.6,repeat:Infinity,repeatType:'mirror'}}>
                             <Donut  color='#6b21a8'
                                size="60px" 
                                width={['10px', '10px', '10px', '10px']}
                                zIndex={2}  
                                className='gradient-text '
                                />
                        </motion.div>
                        <motion.div  initial={{x:0,y:20}} animate={{y:0,x:40,rotate:30}} transition={{duration:1.6,repeat:Infinity,repeatType:'mirror'}}>
                             <Donut  color='#6b21a8'
                                size="20px" 
                                width={['10px', '10px', '10px', '10px']}
                                zIndex={2}  
                                className='gradient-text '
                                />
                        </motion.div>
                    </div>

                </div>




             </div>
             </div>
            <div className='w-1/6'>
                    <div className='flex relative top-40 items-end'>
                        <motion.div
                        initial={{ scale: 1.6, borderRadius: '50%' }}
                        animate={{ scale: 0.5 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                         className=' bg-gradient-to-r from-cyan-500 to-purple-700 w-16 h-16 rounded-full lg:w-44 lg:h-44 '
                        />
                    </div>
                    
            </div>
        </div>
      
    </div>
  )
}

export default Banner
