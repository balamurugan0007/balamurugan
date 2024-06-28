import React, { forwardRef } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

export const Card = forwardRef(({result},ref) => {
  return (
    <div className='p-2  group cursor-pointer mt-5' ref={ref}>
        <div className='p-4 bg-stone-800 rounded-lg'>
          <div className='img  '>
              <img src={result.projectImage.url} alt={result.name}  className='lg:h-60 h-40 w-96  object-cover rounded-md group-hover:brightness-50 ' />
          </div>
          <div className='text-content'>
             <div className=' mt-3 flex justify-between'>
              <div className=''>

              <h2 className='  font-medium font-open text-sm lg:text-xl text-stone-50 '>{result.name}</h2>
                <p className='text-green-500 text-xs lg:text-sm font-bold mt-4 font-poppins'>{result.stacks}</p>
              </div>
              <a href={result.links} target='_blank' className='flex items-center'>
                  <p className='t,lg:text-sm text-xs font-poppins font-semibold text-green-800 underline'>Link </p>
                  <FaExternalLinkAlt className='w-3 h-3 text-green-800 ml-2'/>
              </a>
             </div>

              </div>
      </div>
    </div>
  )
})
