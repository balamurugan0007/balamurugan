import React from 'react'
import profile from '../assets/profile1.jpeg'
import {BiLogoLinkedin,BiLogoBehance,BiLogoGithub,BiLogoYoutube} from 'react-icons/bi'
const Banner = () => {
  return (
    <div className='w-full bg-slate-900 lg:py-20 py-10' id='Home'>

        <div className='banner lg:flex block lg:px-28 px-2'>
             <div className='lg:w-1/2 justify-center'>
                 <div className='justify-center px-10 lg:px-28 '>
                       <img src={profile} alt='pic' className='w-60 lg:w-96 h-60 lg:h-96 rounded-full object-cover '/>
                 </div>
             </div>

             <div className='lg:w-1/2'>
                <p className='font-bold font-inter text-md text-center lg:text-start uppercase text-yellow-400'>Balamurugan.k</p>
                <h3 className='font-lora font-bold text-2xl text-center lg:text-start text-slate-100 mt-3'>Fullstack & Cross plateform Developer</h3>

                <p className='font-poppins text-center lg:text-start font-thin text-sm mt-3  text-slate-400'>
                As a Developer, my ultimate goal is to create innovative, efficient, and user-friendly mobile application and web application that meet the specific needs of the clients and provide a delightful experience for the end-users.I stay updated with the latest trends and advancements in the both mobile apps and website development industry to continually enhance my skills and deliver cutting-edge solutions.
                </p>

                <div className='icons mt-5 justify-center '>
                     <div className='flex'>
                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-blue-700 hover:border-0 ml-3'>
                            <a href='https://www.linkedin.com/in/bala-murugan-20794b252/' >
                                <BiLogoLinkedin className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-sky-700 hover:border-0 ml-3'>
                            <a href='https://www.behance.net/murugank4' >
                                <BiLogoBehance className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-purple-600 hover:border-0 ml-3'>
                            <a href='https://github.com/balamurugan0007' >
                                <BiLogoGithub className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-300 rounded-full p-2 hover:bg-red-800 hover:border-0 ml-3'>
                            <a href='https://www.youtube.com/@CodemaxTamil/featured' >
                                <BiLogoYoutube className='text-slate-200 w-full h-full'/>
                            </a>
                         </div>
                     </div>

                </div>




             </div>
        </div>
      
    </div>
  )
}

export default Banner
