
'use client'
import {gql,request} from 'graphql-request'

import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'


const API_Endpoint ='https://api-ap-south-1.hygraph.com/v2/clnrggheflkpr01ug18b028ub/master'

export const Project = () => {

    const [data,setdata]=useState()
    const [filtname,setfiltname]=useState(null)

    useEffect(()=>{
        const fecthdata = async()=>{
          const document =gql`
          query MyQuery {
          projects(first: 20) {
            id
            name
            latest
            link
            links
            description
            show
            stacks
            stage
            catogory {
              id
              name
            }
            projectImage {
              url
            }
          }
        }
        
        
        `;
          await request(API_Endpoint,document).then(res=>{
            console.log(res.projects)
            setdata(res.projects)
          })
          .catch(err=>{
            console.log(err)
            
          })
        };
        fecthdata()
    },[])
  

  
  

  return (
    <div className='w-full h-full lg:py-40 py-10 mt-32 lg:mt-0' id='project'>
        <div className='flex justify-center'>
           <div className='w-5/6 flex items-start'>
                <div className='w-1/6 flex  justify-center'>
                    <div className=''>
                            <div className='btn '>
                                <button onClick={()=>setfiltname(null)} className='w-24 h-10 text-sm rounded-lg bg-stone-800 font-poppins font-normal text-white  -rotate-90'>
                                    All
                                </button>
                                
                            </div>
                            {
                              ['Figma','Frontend','Fullstack',"Apps"].map(res=>(
                                <div className='btn mt-20'>
                                <button onClick={()=>setfiltname(res)} className='w-24 h-10 text-sm rounded-lg bg-stone-800 font-poppins font-normal text-white  -rotate-90'>
                                    {res}
                                </button>
                                
                            </div>
                              ))
                            }
                           
                           
                    </div>
                </div>
                <div className='w-5/6'>

                    {
                      filtname ? 
                      <div className='w-full h-full flex flex-wrap '>
                         {
                            data && data.filter(
                              re=> re.catogory.name === filtname 
                            ).map(res=>(
                                <Card result={res} key={res.id}/>
                            ))
                         }
                    </div> :

                          <div className='w-full h-full flex flex-wrap '>
                          {
                            data && data.filter(
                              re=> re.latest === true 
                            ).map(res=>(
                                <Card result={res} key={res.id}/>
                            ))
                          }
                          </div> 

                    }
                    
                </div>
           </div>
        </div>
    </div>
  )
}
