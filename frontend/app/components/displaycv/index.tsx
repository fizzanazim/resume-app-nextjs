'use client'

import React, { useEffect, useState } from 'react'
import { HiTemplate } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiUserLocationLine } from "react-icons/ri";

const Displaycv = ({resume}:any) => {
    
    
    console.log(resume, "resume");
  return (
     <div className='w-1/2 m-auto mt-10 border flex px-7 py-10'>
        <div className='w-1/3 flex flex-col gap-4 pr-3 border-r'>
            <div>
                <img className='h-40 w-40 rounded-full' src={resume?.personal?.user_img} alt="" />
            </div>
            <div className='border-y border-y-3 py-5 flex flex-col gap-3 border-[#4685DD]'>
                <div>             
                    <h2 className='font-bold'>Contact</h2>
                    <h2 className='capitalize mt-4'>{resume?.personal?.firstname} {resume?.personal?.lastname}</h2>
                    <h2 className='flex gap-2 items-center'><CiLocationOn/> {resume?.personal?.city}, {resume?.personal?.postalcode}, {resume?.personal?.country}</h2>
                </div>
                <div>
                    <h2>{resume?.email}</h2>
                    <h2>{resume?.personal?.phone}</h2>
                </div>
            </div>

        </div>
        <div className='w-2/3 flex flex-col gap-5 pl-3'>
                <div className='flex flex-col gap-4 border-b-3 border-[#4685DD] pb-5'>
                    <h2 className='font-semibold flex gap-1 items-center uppercase text-xl'><RiUserLocationLine className='text-2xl text-blue-600'/> Professional Summary</h2>
                    <h2>{resume?.intro} </h2>
                </div>
    
                <div className='flex flex-col gap-4 border-b-3 border-[#4685DD] pb-5'>
                    <h2 className='font-semibold flex gap-1 items-center uppercase text-xl'><HiTemplate className='text-2xl text-blue-600'/>Experience</h2>
                    <div className='flex flex-col gap-10'>
                        {resume?.job && resume?.job.map((e: any, i: any) => (
                            <div className='flex pl-8 pr-2'> 
                                <div className='pr-5 relative'>
                                    <h2 className='capitalize'>{e.jobtitle}</h2>
                                    <h2 className='capitalize'>{e.employer}- {e.city}, {e.country}</h2>
                                    <h2 className='capitalize absolute left-0 -rotate-90 -translate-x-18 -translate-y-3 text-[9px]'>{e.startdate} - {e.enddate}</h2>
                                    <h2>{e.desc}</h2> 
                                </div>             
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold flex gap-1 items-center uppercase text-xl'><FaGraduationCap className='text-2xl text-blue-600'/>education</h2>
                    <div className='flex flex-col gap-2'>
                        {resume?.acadmeic && resume?.acadmeic.map((e: any, i: any) => (
                            <div className='pr-5'>
                                <h2>{e.startyear} - {e.graduationdate}</h2>
                                <h2 className='capitalize'>{e.qualification} in {e.fieldofstudy}</h2>
                                <h2>{e.schoolname} - {e.schoollocation}</h2> 
                                <h2>GPA: {e.grade}</h2> 
                            </div>             
                        ))}
                    </div>
                </div>
                    {/* {resume?.acadmeic && resume?.acadmeic.map((e: any, i: any) => (
    
                        (<>
                            <h2>{e['institutename']}</h2>
                            <h2>{e['studies']}</h2>
                            <h2>{e['startingyear']} - {e['endingyear']}</h2>
                        </>)
                    ))} */}
                
            </div>
        </div>
  )
}

export default Displaycv