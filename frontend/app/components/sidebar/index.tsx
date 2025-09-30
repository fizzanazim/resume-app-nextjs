'use client'

import React, { useContext, useState } from 'react'
import { IoLogoTableau } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { PiGraduationCapThin } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { PiIdentificationCardThin } from "react-icons/pi";
import { AppContext } from '@/app/Context';
import { useRouter } from 'next/navigation';


const Sidebar = ({screen}:any) => {

    let router = useRouter()

    const handlepersnalinfo = ()=>{

        if(screen=='experience' || screen=='summary' || screen=='education')
            router.push('/personalinfo')
        
    }
    
    const handleexperience = ()=>{
        
        if(screen=='education' || screen=='summary')
            router.push('/experience')

    }

    const handleeducation = ()=>{

        if(screen=='summary')
            router.push('/education-summary')

    }

    const handlesummary = ()=>{

        router.push('/summary')

    }

  return (
    <div className='w-22 text-2xl items-center py-5 min-h-screen bg-[#006370]'>
        <div className='w-full flex items-center h-14'>
            <div className='w-full h-full flex items-center justify-center'>
                <IoLogoTableau className='text-yellow-600'/>
            </div>
        </div>
        <div className='w-23 flex items-center h-14'>
            <div onClick={handlepersnalinfo} className={`w-22 h-full flex items-center justify-center ${screen=='header'? 'bg-[#007A84]': ''} `}>
                <CiUser className={`${screen=='experience' || screen=='summary' || screen=='education'? 'text-green-500 cursor-pointer': screen=='header'? 'text-yellow-400': 'text-gray-400'} `}/>
            </div>
            {screen=='header' && <div className='w-2 h-full bg-yellow-400'></div>}
        </div>
        <div className='w-23 flex items-center h-14'>
            <div onClick={handleexperience} className={`w-22 h-full flex items-center justify-center  ${screen=='experience'? 'bg-[#007A84]': ''}`}>
                <CiFileOn className={`${screen=='education' || screen=='summary'? 'text-green-500 cursor-pointer': screen=='experience'? 'text-yellow-400': 'text-gray-400'}`}/>
            </div>
            {screen=='experience'&& <div className='w-2 h-full bg-yellow-400'></div>}
        </div>
        <div className='w-23 flex items-center h-14'>
            <div onClick={handleeducation}  className={`w-22 h-full flex items-center justify-center  ${screen=='education'? 'bg-[#007A84]': ''}`}>
                <PiGraduationCapThin className={`${screen=='summary'? 'text-green-500 cursor-pointer': screen=='education'? 'text-yellow-400': 'text-gray-400'}`}/>
            </div>
            {screen=='education'&& <div className='w-2 h-full bg-yellow-400'></div>}
        </div>
        <div className='w-23 flex items-center h-14'>
            <div onClick={handlesummary} className={`w-22 h-full flex items-center justify-center  ${screen=='summary'? 'bg-[#007A84]': ''}`}>
                <LiaToolsSolid className={`${screen=='summary'? 'text-yellow-400': 'text-gray-400'}`}/>
            </div>
            {screen=='summary'&& <div className='w-2 h-full bg-yellow-400'></div>}
        </div>
    </div>
  )
}

export default Sidebar