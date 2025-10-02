'use client'
import React, { useContext } from 'react'
import Sidebar from '../components/sidebar'
import { AppContext } from '../Context'
import { TfiPencil } from "react-icons/tfi";
import { AiTwotoneDelete } from "react-icons/ai";
import { GiContract } from "react-icons/gi";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Experience = () => {

    const {formobj, editelefunc, delexperience, updatejob}:any = useContext(AppContext)
    console.log(formobj);

    const router = useRouter()

    const educationpage = ()=>{

        updatejob()
        router.push('/academic-info')
        
    }

    const editexperience = (e:any,i:any)=>{

        router.push('/careerinfo')
        editelefunc(e,i)

    }
    

  return (
    <div className='flex items-center h-screen overflow-hidden w-full'>
        <Sidebar screen = {"experience"}/>
        <div className='flex-1 min-h-screen overflow-y-scroll py-10 items-center flex flex-col gap-10'>
            <h2 className='text-5xl font-semibold w-160 leading-14'>Review your work history</h2>
            <p>Edit the description, change the order or add new positions</p>
            <div className='w-2/4 flex flex-col gap-5'>
            {
                formobj.job && formobj.job.map((e:any, i:any)=>{
                    
                    return(<>
                    
                        <div className='px-8 py-4 border border-gray-400'>
                            <div className='border-b border-gray-400 justify-between w-full flex pb-5'>
                                <div>
                                    <h2 className='text-lg'><span className='font-semibold '>{e.jobtitle}</span>  at {e.employer}</h2>
                                    <p className='text-sm text-gray-600'>{e.city}, {e.country} {e.startdate} - {e.enddate}</p>
                                </div>
                                <div  className='flex gap-4 items-center'>
                                    <div className='flex gap-2 border-r pr-3'>
                                        <button onClick={()=> editexperience(e,i)} className='w-10 rounded-sm flex items-center text-lg justify-center h-10 bg-black text-white'><TfiPencil/></button>
                                        <button onClick={()=>delexperience(i)} className='w-10 rounded-sm flex items-center text-lg justify-center h-10 bg-black text-white'><AiTwotoneDelete/></button>
                                    </div>
                                    <button className='w-10 rounded-sm flex items-center text-xl justify-center h-10 bg-[#FAFAFA] text-[#E0E0E0]'><GiContract/></button>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <p>{e.desc}</p>
                            </div>
                        </div>

                    </>)

                })
                }
            </div>
            <Link className='w-full flex items-center  justify-center' href={'/careerinfo'}><button  className='flex items-center text-blue-700 cursor-pointer justify-center border-2 border-dashed border-blue-700 w-1/2 h-20'><span className='text-3xl'>+</span>&nbsp;&nbsp;Add More Experience</button></Link>
            <div className='mt-10 flex w-full items-center justify-center'>
                <button onClick={educationpage} className='bg-[#F56600] text-white px-10 h-14 cursor-pointer font-semibold'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Experience