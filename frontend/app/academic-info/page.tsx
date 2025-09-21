'use client'

import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/sidebar';
import { AppContext } from '../Context';

const Academicinfo = () => {
  const {sendacademicinfo, editeduelement, editeduindex}:any = useContext(AppContext)
  
    const [academicobj, setacademicobj] = useState({
    
        schoolname: '',
        schoollocation: '',
        fieldofstudy: '',
        qualification: '',
        startyear: '',
        graduationdate: '',
        grade: '',
        honors: '',
    
      })

      useEffect(()=>{
      
            if(editeduindex!=-1){
    
              setacademicobj(editeduelement)
    
            }
    
        }, [])
  
      const router = useRouter()
  
      const sendacademicdata =(e:any)=>{
  
         e.preventDefault()
  
        if(academicobj.schoolname!='' && academicobj.schoollocation!='' && 
          academicobj.fieldofstudy!='' && academicobj.qualification!='' && 
          academicobj.startyear!='' && academicobj.graduationdate!='' 
          && academicobj.grade!=''
        ){
    
          sendacademicinfo(academicobj)
          router.push('/education-summary') 
    
        }
        else{

          alert('missing')

        }
  
  
      }
  
      const handleacademicinfo =(e:any)=>{
  
        setacademicobj({...academicobj, [e.target.name]: e.target.value})
  
      }
  
    return (
      <div className='flex items-center h-screen overflow-hidden w-full'>
        <Sidebar screen = {"education"}/>
        <div className='flex-1 h-screen overflow-y-scroll py-10 items-center flex flex-col gap-10'>
          <h2 className='text-5xl font-semibold capitalize w-160 leading-14'>Add your <span className='text-[#F56600]'>education</span></h2>
          <p className='w-1/2'>Tell us about any colleges, vocational programs, or training courses you took. 
            Even if you didn’t finish, it’s important top list them.</p>
          <form onSubmit={sendacademicdata} className='w-1/2 flex flex-col gap-5'>
            <div className='flex flex-col w-full items-center'>
                <div className='flex w-full gap-4'>
                  <div className='flex w-1/2 flex-col gap-2'>
                    <label className='uppercase' htmlFor="schoolname">school name</label>
                    <input id='schoolname' onChange={handleacademicinfo} value={academicobj.schoolname} name="schoolname" placeholder="e.g. UET" className="border px-2 h-14 rounded focus:border-blue-200" type="text" />
                  </div>
                  <div className='flex w-1/2 flex-col gap-2'>
                    <label  className='uppercase' htmlFor="schoollocation">school location</label>
                    <input id='schoollocation' onChange={handleacademicinfo} value={academicobj.schoollocation} name="schoollocation" placeholder="e.g. Lahore, Pakistan" className="border px-2 h-14 rounded" type="text" />
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
             <div className='flex w-full gap-4'>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='uppercase' htmlFor="fieldofstudy">field of study</label>
                <input id='fieldofstudy' onChange={handleacademicinfo} value={academicobj.fieldofstudy} name="fieldofstudy" placeholder="e.g. BSCS" className="border px-2 h-14 rounded" type="text" />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
                <label  className='uppercase' htmlFor="qualification">qualification</label>
                <input id='qualification' onChange={handleacademicinfo} value={academicobj.qualification} name="qualification" placeholder="Enter Qualification" className="border px-2 h-14 rounded" type="text" />
              </div>
            </div>
             <div className='flex w-full gap-4'>
              <div className='flex flex-col gap-2  w-1/2'>
                <label className='uppercase' htmlFor="startyear">start year</label>
                <input id='startyear' onChange={handleacademicinfo} value={academicobj.startyear} name="startyear" placeholder="2024" className="border px-2 h-14 rounded" type="text" />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
                <label  className='uppercase' htmlFor="graduationdate">graduation date</label>
                <input id='graduationdate' onChange={handleacademicinfo} value={academicobj.graduationdate} name="graduationdate" placeholder="Pakistan" className="border px-2 h-14 rounded" type="text" />
              </div>
            </div>
            </div> 
            <div className='flex w-full gap-4'>
              <div className='flex flex-col gap-2  w-1/2'>
                <label className='uppercase' htmlFor="grade">grade</label>
                <input id='grade' onChange={handleacademicinfo} value={academicobj.grade} name="grade" placeholder="5.0" className="border px-2 h-14 rounded" type="text" />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
                <label  className='uppercase' htmlFor="honors">honors</label>
                <input id='honors' onChange={handleacademicinfo} value={academicobj.honors} name="honors" placeholder="e.g. Merit Distinction" className="border px-2 h-14 rounded" type="text" />
              </div>
            </div>
            <div className='mt-10 flex w-full items-center justify-center'>
              <button className='bg-[#F56600] text-white px-5 h-10 cursor-pointer font-semibold'>Add Details</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Academicinfo