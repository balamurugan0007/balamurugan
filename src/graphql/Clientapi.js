'use client'
import {gql,request} from 'graphql-request'

import React, { useEffect, useState } from 'react'


const API_Endpoint ='https://api-ap-south-1.hygraph.com/v2/clnrggheflkpr01ug18b028ub/master'
export const Clientapi = async() => {

  const [data,setdata]=useState()

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

  return data
  
}
