import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  return (
    <div className='w-full bg-slate-800'>

        <div className='lg:px-20 lg:py-6'>
             <div className='flex justify-between'>
                  <h2 className='text-2xl text-slate-100 font-lora font-bold'>Developer</h2>
                  <div className='lg:flex hidden '>
                    <AnchorLink href='#Home'>
                      <h4 className='text-md font-poppins ml-4 font-md text-slate-300'>Home</h4>
                    </AnchorLink>
                    <AnchorLink href='#Services'>
                      <h4 className='text-md font-poppins ml-4 font-md text-slate-300'>Services</h4>
                    </AnchorLink>
                    <AnchorLink href='#Projects'>
                      <h4 className='text-md font-poppins ml-4 font-md text-slate-300'>Projects</h4>
                    </AnchorLink>
                    <AnchorLink href='#Contact'>
                      <h4 className='text-md font-poppins ml-4 font-md text-slate-300'>Contact</h4>
                    </AnchorLink>
                  

                  </div>
             </div>
        </div>
      
    </div>
  )
}

export default Navbar
