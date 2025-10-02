'use client'

import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { CiUser } from "react-icons/ci";
// import { Fira_Code } from 'next/font/google';
import { AppContext } from '../Context';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Personalinfo = () => {

  const {sendpersonalinfo, screen, formobj}:any = useContext(AppContext)

  console.log(screen, 'personal');
  
  const [personalobj, setpersonalobj] = useState({

    firstname: '',
    lastname: '',
    city: '',
    postalcode: '',
    country: '',
    phone: '',
    email: '',
    user_img: ''

  })

  useEffect(()=>{

    if(formobj.personal.firstname!=''){

      setpersonalobj(formobj.personal)

    }

  }, [formobj])

  const router = useRouter()

  const handlepersonalinfo = (e:any)=>{

    setpersonalobj({...personalobj, [e.target.name]: e.target.value})

  }

  const senddata = (e:any)=>{

    e.preventDefault()

    if(personalobj.firstname!='' && personalobj.lastname!='' && 
      personalobj.city!='' && personalobj.postalcode!='' && 
      personalobj.phone!='' && personalobj.email!='' && 
      personalobj.country!='' && personalobj.user_img!=''
    ){

      sendpersonalinfo(personalobj)
      router.push('/careerinfo') 

    }

  }

  const [file, setfile] = useState(null)

  const imagehandler=(e:any)=>{

    setfile(e.target.files[0])

  }

  useEffect(()=>{

    if(file){

      const postImage = async ()=>{

        var formData = new FormData()
        formData.append('file', file) //'file' is a key name, must remain the same
        formData.append('upload_preset', 'sample-images')

        let res = await axios.post('https://api.cloudinary.com/v1_1/drubesyba/image/upload', formData)
        setpersonalobj({...personalobj, user_img: res.data.secure_url})
        
      }

      postImage()

    }

  }, [file])

  console.log(personalobj);
  

  return (
    <div className='flex items-center h-screen overflow-hidden w-full'>
      <Sidebar screen = {"header"}/>
      <div className='flex-1 h-screen overflow-y-scroll py-10 items-center flex flex-col gap-10'>
        <h2 className='text-5xl font-semibold w-160 leading-14'>How do you want recruiters to contact you?</h2>
        <p>Include your full name and at least email or phone number</p>
        <form onSubmit={senddata} className='w-1/2'>
          <div className='flex gap-10 w-full items-center'>
            <div className='flex flex-col gap-3'>
              <div className='w-40 h-40 rounded-full bg-gray-200 border border-gray-400 flex items-center justify-center'>
                {personalobj.user_img =='' && <CiUser className='text-7xl'/>}
                {personalobj.user_img !='' && <img className='h-40 w-40 rounded-full' src={personalobj.user_img} alt="" />}
              </div>
              <label htmlFor="profile-pic" className='w-40 flex items-center justify-center h-10 border bg-black cursor-pointer text-white'>
                PHOTO UPLOAD
                {/* <button className='px-5 h-10 border bg-black cursor-pointer text-white'>PHOTO UPLOAD</button> */}
              </label>
              <input onChange={imagehandler} type="file" className='hidden' name="" id="profile-pic" />
            </div>
            <div className='flex-1'>
              <div className='flex w-full gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='uppercase' htmlFor="firstname">first name</label>
                  <input id='firstname' onChange={handlepersonalinfo} value={personalobj.firstname} name="firstname" placeholder="Ali" className="border px-2 h-10 rounded focus:border-blue-200" type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                  <label  className='uppercase' htmlFor="lastname">last name</label>
                  <input id='lastname' onChange={handlepersonalinfo} value={personalobj.lastname} name="lastname" placeholder="Usman" className="border px-2 h-10 rounded" type="text" />
                </div>
              </div>
              <div className='mt-3 w-full flex flex-col gap-2 pr-22'>
                <label  className='uppercase' htmlFor="city">city</label>
                <input id='city' onChange={handlepersonalinfo} value={personalobj.city} name="city" placeholder="Lahore" className="border px-2  h-10 rounded" type="text" />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 mt-10'>
           <div className='flex w-full gap-4'>
            <div className='flex flex-col gap-2 w-1/2'>
              <label className='uppercase' htmlFor="postalcode">postal code</label>
              <input id='postalcode' onChange={handlepersonalinfo} value={personalobj.postalcode} name="postalcode" placeholder="53700" className="border px-2 h-10 rounded" type="number" />
            </div>
            <div className='flex flex-col gap-2 w-1/2'>
              <label  className='uppercase' htmlFor="country">country</label>
              <input id='country' onChange={handlepersonalinfo} value={personalobj.country} name="country" placeholder="Pakistan" className="border px-2 h-10 rounded" type="text" />
            </div>
          </div>
           <div className='flex w-full gap-4'>
            <div className='flex flex-col gap-2  w-1/2'>
              <label className='uppercase' htmlFor="phone">phone</label>
              <input id='phone' onChange={handlepersonalinfo} value={personalobj.phone} name="phone" placeholder="03001234567" className="border px-2 h-10 rounded" type="number" />
            </div>
            <div className='flex flex-col gap-2 w-1/2'>
              <label  className='uppercase' htmlFor="email">EMAIL</label>
              <input id='email' onChange={handlepersonalinfo} value={personalobj.email} name="email" placeholder="abc@gmail.com" className="border px-2 h-10 rounded" type="email" />
            </div>
          </div>
          </div> 
          <div className='mt-10 flex w-full items-center justify-center'>
            <button className='bg-[#F56600] text-white px-5 h-10 cursor-pointer font-semibold'>Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Personalinfo