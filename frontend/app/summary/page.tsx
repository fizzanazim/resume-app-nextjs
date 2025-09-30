'use client'

import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { AppContext } from '../Context'
import { useRouter } from 'next/navigation'

const Summary = () => {

    const {sendsummaryinfo, dataobj}:any = useContext(AppContext) 

    const router = useRouter()
    
    const [summary, setSummary] = useState('')
    
    const sendsummarydata =(e:any)=>{
        
        e.preventDefault()
        
        if(summary!=''){
            
            sendsummaryinfo(summary)
            
        }
        else{
            
            alert('missing')
            
        }
        
    }
    
    useEffect(()=>{
        
        if(dataobj){
            
            console.log(dataobj, 'dataobj'); 
            router.push(`/final-CV/${dataobj._id}`) 

        }
        

    }, [dataobj])

  return (
    <div  className='flex items-center h-screen overflow-hidden w-full'>
        <Sidebar screen = {"summary"}/>
        <div className='flex-1 h-screen overflow-y-scroll p-10 flex flex-col gap-10'>
            <h2 className='text-5xl font-semibold capitalize w-160 leading-14'>Add your <span className='text-[#F56600]'>summary</span></h2>
            <textarea onChange={(e:any)=>setSummary(e.target.value)} rows={12} className='p-5 border w-1/2' name="" id="" placeholder='Type here...'></textarea>
            <button onClick={sendsummarydata} className='bg-[#F56600] text-white px-10 h-14 w-40 cursor-pointer font-semibold'>Continue</button>

        </div>
    </div>
  )
}

export default Summary