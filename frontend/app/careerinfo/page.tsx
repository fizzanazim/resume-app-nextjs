'use client'

import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { AppContext } from '../Context'
import { useRouter } from 'next/navigation'

const Careerinfo = () => {

  const {sendcareerinfo, formobj,  tempindex, editelement}:any = useContext(AppContext)
  console.log(formobj);

  const [careerobj, setcareerobj] = useState({
  
      jobtitle: '',
      employer: '',
      startdate: '',
      enddate: '',
      city: '',
      country: '',
      desc: ''
  
    })

    useEffect(()=>{

        if(tempindex!=-1){

          setcareerobj(editelement)

        }

    }, [])

    const router = useRouter()

    const sendcareerdata =(e:any)=>{

      e.preventDefault()

      if(careerobj.jobtitle!='' && careerobj.employer!='' && 
        careerobj.startdate!='' && careerobj.enddate!='' && 
        careerobj.city!='' && careerobj.country!='' && careerobj.desc!=''
      ){
      
        sendcareerinfo(careerobj)
        router.push('/experience') 

      }


    }

    const handlecareerinfo =(e:any)=>{

      setcareerobj({...careerobj, [e.target.name]: e.target.value})

    }

  return (
    <div className='flex items-center h-screen overflow-hidden w-full'>
      <Sidebar screen = {"experience"}/>
      <div className='flex-1 overflow-y-scroll h-screen py-10 items-center flex flex-col gap-10'>
        <h2 className='text-5xl font-semibold w-160 leading-14'>Add your experience</h2>
        <p>Start with your most recent job first. You can also add voluntary work, internships or extracurricular activities.</p>
        <form onSubmit={sendcareerdata} className='w-1/2 flex flex-col gap-5'>
          <div className='flex flex-col w-full items-center'>
              <div className='flex w-full gap-4'>
                <div className='flex w-1/2 flex-col gap-2'>
                  <label className='uppercase' htmlFor="jobtitle">Job Title</label>
                  <input id='jobtitle' onChange={handlecareerinfo} value={careerobj.jobtitle} name="jobtitle" placeholder="Retail Sales Assistant" className="border px-2 h-14 rounded focus:border-blue-200" type="text" />
                </div>
                <div className='flex w-1/2 flex-col gap-2'>
                  <label  className='uppercase' htmlFor="employeer">employeer</label>
                  <input id='employeer' onChange={handlecareerinfo} value={careerobj.employer} name="employer" placeholder="Sapphire" className="border px-2 h-14 rounded" type="text" />
                </div>
              </div>
          </div>
          <div className='flex flex-col gap-3'>
           <div className='flex w-full gap-4'>
            <div className='flex flex-col gap-2 w-1/2'>
              <label className='uppercase' htmlFor="startdate">start date</label>
              <input id='startdate' onChange={handlecareerinfo} value={careerobj.startdate} name="startdate" placeholder="Mention Date" className="border px-2 h-14 rounded" type="date" />
            </div>
            <div className='flex flex-col gap-2 w-1/2'>
              <label  className='uppercase' htmlFor="enddate">end date</label>
              <input id='enddate' onChange={handlecareerinfo} value={careerobj.enddate} name="enddate" placeholder="Mention Date" className="border px-2 h-14 rounded" type="date" />
            </div>
          </div>
           <div className='flex w-full gap-4'>
            <div className='flex flex-col gap-2  w-1/2'>
              <label className='uppercase' htmlFor="city">city</label>
              <input id='city' onChange={handlecareerinfo} value={careerobj.city} name="city" placeholder="Lahore" className="border px-2 h-14 rounded" type="text" />
            </div>
            <div className='flex flex-col gap-2 w-1/2'>
              <label  className='uppercase' htmlFor="country">country</label>
              <input id='country' onChange={handlecareerinfo} value={careerobj.country} name="country" placeholder="Pakistan" className="border px-2 h-14 rounded" type="text" />
            </div>
          </div>
          </div> 
          <div className=''>
            <h2>Mention about your role</h2>
            <textarea onChange={handlecareerinfo} value={careerobj.desc} className='border w-full rounded mt-4 p-5' rows={10} name="desc" id=""></textarea>
          </div>
          <div className='mt-10 flex w-full items-center justify-center'>
            <button className='bg-[#F56600] text-white px-5 h-10 cursor-pointer font-semibold'>Add Details</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Careerinfo