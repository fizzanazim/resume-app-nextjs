'use client'

import React, { useContext } from 'react'
import { AppContext } from '../Context';
import Sidebar from '../components/sidebar';
import Link from 'next/link';
import { TfiPencil } from "react-icons/tfi";
import { AiTwotoneDelete } from "react-icons/ai";
import { GiContract } from "react-icons/gi";
import { useRouter } from 'next/navigation';

const EducationSummary = () => {

    const {formobj, editedufunc, updateacademic}:any = useContext(AppContext)
    console.log(formobj);

    const router = useRouter()

    const summarypage = ()=>{

        updateacademic()
        router.push('/summary')

    }

    const editeducation = (e:any,i:any)=>{

        router.push('/academic-info')
        editedufunc(e,i)
        
    }

  return (
    <div className='flex items-center max-h-screen overflow-hidden w-full'>
        <Sidebar screen = {"education"}/>
        <div className='flex-1 h-screen overflow-y-scroll py-10 items-center flex flex-col gap-10'>
            <h2 className='text-5xl font-semibold w-160 leading-14'>Education Summary</h2>
            <div className='w-2/4 flex flex-col gap-5'>
            {
                formobj.acadmeic && formobj.acadmeic.map((e:any, i:any)=>{
                    
                    return(<>
                    
                        <div className='p-4 border border-gray-400 flex'>    
                                <div className='w-3/4'>
                                    <h2 className='text-lg'><span className='font-semibold '>{e.qualification}</span></h2>
                                    <h3>{e.schoolname}</h3>
                                    <h3>{e.fieldofstudy}</h3>
                                    <h3>Grade: {e.grade}</h3>
                                    <div className='mt-3'>
                                        <h3>{e.schoollocation}</h3>
                                        <p className='text-sm text-gray-600'>{e.startyear} - {e.graduationdate}</p>
                                    </div>
                                </div>
                                <div className='flex items-end gap-4 flex-1 items-center'>  
                                    <button onClick={()=> editeducation(e,i)} className='w-10 cursor-pointer rounded-sm flex items-center text-lg justify-center h-10 bg-black text-white'><TfiPencil/></button>
                                    <button className='w-10 cursor-pointer rounded-sm flex items-center text-lg justify-center h-10 bg-black text-white'><AiTwotoneDelete/></button>
                                    <button className='w-10 cursor-pointer rounded-sm flex items-center text-xl justify-center h-10 bg-[#FAFAFA] text-[#E0E0E0]'><GiContract/></button>
                                </div>
                        </div>

                    </>)

                })
                }
            </div>
            <Link className='w-full flex items-center  justify-center' href={'/academic-info'}><button  className='flex items-center text-blue-700 cursor-pointer justify-center border-2 border-dashed border-blue-700 w-1/2 h-20'><span className='text-3xl'>+</span>&nbsp;&nbsp;Add More Education</button></Link>
            <div className='mt-10 flex w-full items-center justify-center'>
                <button onClick={summarypage} className='bg-[#F56600] text-white px-10 h-14 cursor-pointer font-semibold'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default EducationSummary