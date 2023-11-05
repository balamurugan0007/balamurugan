import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import saravana from './portflio/assets/saravanna.png'
import hertz from './portflio/assets/hertz.png'

const Freelance = () => {
  return (
    <div className='w-full px-4 py-4 lg:px-20 lg:py-20 bg-slate-900'>
    <h2 className='text-2xl text-yellow-400 text-center font-lora mb-10  font-bold'>Freelance Projects</h2>
   

   <div className='lg:flex justify-between' >
            <div className='w-1/2'>
              
              <div className=' lg:w-96 lg:h-96  w-80 h-80 p-6 lg:px-10 lg:py-10 bg-slate-700 m-5 '>
          <img src={hertz} alt='pic' className='lg:w-80 w-72 h-72 lg:h-80 object-cover'/> 

                </div>

            <div className='px-2 lg:px-10'>
                <h2 className='font-lora text-center lg:text-start text-slate-200 text-xl'>College Function Website</h2>
                <p className='text-center lg:text-start font-poppins font-medium text-md text-sky-300 '>React & Tailwindcss</p>
                <p className='text-center lg:text-start font-poppins font-thin text-md text-slate-400 lg:w-4/5'>It is a symposium website for Ece Department At CARE college of Engineering</p>
                
                
                <a href='https://hertz-23.web.app/' className='flex items-center mt-3 px-4 lg:px-0'>
                <p className='text-center lg:text-start text-md font-thin text-red-500 font-poppins'>Visit Page</p>
                <AiOutlineArrowRight className='text-center lg:text-start ml-2 text-red-500 text-xl w-10 h-6'/> </a>
            
            </div>

          </div>
   
      <div className='w-1/2'>
    
                             <div className=' lg:w-96 lg:h-96  w-80 h-80 p-6 lg:px-10 lg:py-10 bg-slate-700 m-5 '>
                          <img src={saravana} alt='pic' className='lg:w-80 w-72 h-72 lg:h-80 object-contain'/> 
                     
                                </div>

                            <div className='px-2 lg:px-10'>
                                <h2 className='font-lora text-center lg:text-start text-slate-200 text-xl'>Graphic Designer(portflio)</h2>
                                <p className='text-center lg:text-start font-poppins font-medium text-md text-sky-300 '>React & Tailwindcss</p>
                                <p className='text-center lg:text-start font-poppins font-thin text-md text-slate-400 lg:w-4/5'>It is an portfolio website</p>
                                
                               
                               <a href='https://saravanan-f8fce.web.app/'className='flex items-center mt-3 px-4 lg:px-0'>
                                <p className='text-center lg:text-start text-md font-thin text-red-500 font-poppins'>Visit Page</p>
                               <AiOutlineArrowRight className='text-center lg:text-start ml-2 text-red-500 text-xl w-10 h-6'/> </a>
                            
                            </div>
                     
      </div>
   
</div>
      
    </div>
  )
}

export default Freelance
