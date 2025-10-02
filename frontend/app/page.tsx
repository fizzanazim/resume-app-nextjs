'use client'

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import Link from "next/link";
import Sidebar from "./components/sidebar";
import { useRouter } from "next/navigation";

export default function Home() {

 const {formobj, storeinDatabase}: any = useContext(AppContext)

    // useEffect(()=>{

    //   localStorage.setItem('resumeobj', JSON.stringify(null))
    //   // localStorage.setItem('resumeobj', null)

    // }, [])

    const router = useRouter()

    const handleCVCreation = ()=>{

      localStorage.setItem('objectId', '')
      storeinDatabase()
      router.push('/personalinfo')

    }


  return (

    <div className="w-full text-white gap-10 min-h-screen bg-[#007A84] flex flex-col py-20 items-center justify-center">
        <h2 className="text-5xl">Ready to Build Your CV?</h2>
        <button onClick={handleCVCreation} className="border px-10 h-14 text-xl cursor-pointer">START</button>
   

        {/* <div className="w-full min-h-50 px-20 flex flex-wrap justify-between gap-3">
          <div className="h-50 w-40 bg-white text-black border px-3 rounded flex flex-col items-center justify-center gap-2 py-2">
            <img className="w-30 border" src="https://easy-feedback.de/wp-content/uploads/2022/10/Employee-Journey-What-it-is-and-how-to-improve-it.jpg" alt="" />
            <h2 className="self-start">Fizza</h2>
            <h2 className="self-start">field</h2>
          </div>
        </div> */}
      {/* <Sidebar/> */}
      {/* <div className="w-full min-h-screen flex flex-col gap-2 bg-blue-100 justify-center px-20 py-14">
        <h1 className="text-black text-xl">Personal Information</h1>
        <form className="w-full flex flex-col gap-2 justify-center" action="">
          <div className="flex w-full gap-3">
              <input onChange={objfunc} value={formobj.name} name="name" placeholder="Enter full name..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={objfunc} value={formobj.profession} name="profession" placeholder="Enter your profession..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={objfunc} value={formobj.address} name="address" placeholder="Enter full address..." className="border px-2 w-1/3 h-10 rounded" type="text" />
          </div>
          <div className="flex w-full gap-3">
              <input onChange={objfunc} value={formobj["phone number"]} name="phone number" placeholder="Enter phone number..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={objfunc} value={formobj.email} name="email" placeholder="Enter email..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={objfunc} value={formobj.bithdate} name="bithdate" placeholder="Enter date of birth..." className="border px-2 w-1/3 h-10 rounded" type="text" />
          </div>
          <div className="flex w-full gap-3">
              <input onChange={objfunc} value={formobj.state} name="state" placeholder="Enter your state..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={objfunc} value={formobj.town} name="town" placeholder="Enter your town..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={objfunc} value={formobj.city} name="city" placeholder="Enter your city..." className="border px-2 w-1/3 h-10 rounded" type="text" />
          </div>
          <div className="flex w-full gap-3">
            <div className="w-1/3 flex flex-col items-end">
              <input onChange={skillfunc} value={skillval} name="skillval" placeholder="Enter your skills (one at a time)..." className="border px-2 h-10 w-full rounded" type="text" />
              <div className="w-full flex flex-wrap gap-2 py-3">

                {formobj?.skills && formobj?.skills.map((e:any,i:any)=>(

                  <div className="border bg-yellow-100 px-2">{e}</div> 

                )) }
              </div>
              <button onClick={addskill} className="text-blue-700 pr-5 cursor-pointer">Add</button>
            </div>
            <div className="w-1/3 flex flex-col items-end">
              <input onChange={langfunc} value={languageval} name="languageval" placeholder="Enter languages..." className="border px-2 h-10 w-full rounded" type="text" />
              <div className="w-full flex flex-wrap gap-2 py-3">
                {formobj?.languages && formobj?.languages.map((e:any,i:any)=>(

                  <div className="border bg-yellow-100 px-2">{e}</div> 

                )) }
              </div>
              <button onClick={addlanguages} className="text-blue-700 pr-5 cursor-pointer">Add</button>
            </div>
            <div className="w-1/3 flex flex-col items-end">
              <input onChange={hobbyfunc} value={hobbiesval} name="hobbiesval" placeholder="Enter your Hobbies..." className="border px-2 h-10 w-full rounded" type="text" />
              <div className="w-full flex flex-wrap gap-2 py-3">
                {formobj?.hobbies && formobj?.hobbies.map((e:any,i:any)=>(

                  <div className="border bg-yellow-100 px-2">{e}</div> 

                )) }
              </div>
              <button onClick={addhobbies} className="text-blue-700 pr-5 cursor-pointer">Add</button>
            </div>
          </div> 
        </form>

        <h1 className="text-black text-xl mt-5">Employment History</h1>
        <div className="flex w-full gap-3">
          <form className="w-full flex flex-col gap-2 justify-center items-end" action="">
            <div className="flex w-full gap-3">
              <input onChange={jobspecsfunc} value={jobspecs["Job Title"]} name="Job Title" placeholder="Enter Job Title..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={jobspecsfunc} value={jobspecs["Starting Date"]} name="Starting Date" placeholder="Enter Starting Date..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={jobspecsfunc} value={jobspecs["Ending Date"]} name="Ending Date" placeholder="Enter Ending Date..." className="border px-2 w-1/3 h-10 rounded" type="text" />
            </div>
            <div className="flex w-full gap-3">
              <input onChange={jobspecsfunc} value={jobspecs["Employment City"]} name="Employment City" placeholder="Enter Employment City..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <textarea onChange={jobspecsfunc} value={jobspecs.role} name="role" rows={6} placeholder="Define your role in points..." className="border px-2 w-1/3 rounded" id=""></textarea>
            </div>
            <button onClick={addemployment} className="text-blue-700 w-13 cursor-pointer">Add</button>
          </form>
        </div>

        <div className="w-full">
            {
              formobj?.job && formobj?.job.map((e:any,i:any)=>(

                <div className="flex justify-between px-10 items-center py-2">
                  <h2>{e['Job Title']}</h2>
                  <h2>{e["Starting Date"]} - {e["Ending Date"]}</h2>
                  <h2>{e["Employment City"]}</h2>
                  <div className="w-2/5 flex gap-1 items-center">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero culpa veniam fugit quod sed facilis, corrupti quam rem ullam? */}
                    {/* <h2 className="w-1/4 ">{e["role"]}</h2> */}
                    {/* <h2 className="">{e.bool? e["role"] : e["role"].split(' ').slice(0,8).join(' ')}...</h2>
                    <button onClick={()=>openreadmore(e,i)} className="text-blue-600 cursor-pointer">{e.bool? 'read less': 'read more'}</button>
                  </div> */}
                  {/* <button className="text-blue-500 cursor-pointer" onClick={()=>editrecord(e.idkey)}>edit</button> */}
                {/* </div>

              ))
            }
        </div>

        <h1 className="text-black text-xl mt-5">Academic History</h1>
        <div className="flex flex-col w-full gap-3">
          <form className="w-full flex flex-col gap-2 justify-center" action="">
            <h1 className="text-black text-md mt-5">{acadmeicinfo[count]} Information</h1>
            <div className="flex w-full gap-3">
              <input onChange={academicfunc} value={academicobj.institutename} name="institutename" placeholder={`Enter ${acadmeicinfo[count]} Name...`} className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={academicfunc} value={academicobj.startingyear} name="startingyear" placeholder="Enter Starting Year (month + year)..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={academicfunc} value={academicobj.endingyear} name="endingyear" placeholder="Enter Ending Year (month + year)..." className="border px-2 w-1/3 h-10 rounded" type="text" />
              <input onChange={academicfunc} value={academicobj.studies} name="studies" placeholder="Enter Studies..." className="border px-2 w-1/3 h-10 rounded" type="text" />
            </div>
          </form>
          <div className="flex w-full gap-4">
            <button onClick={addbtn} className="border h-10 px-2 cursor-pointer">Add</button>
          </div>

          <div className="w-full">
            {
              formobj?.acadmeic && formobj?.acadmeic.map((e:any,i:any)=>(

                <div className="flex justify-between px-10 items-center py-2">
                  <h2>{e.institutename}</h2>
                  <h2>{e.startingyear} - {e.endingyear}</h2>
                  <h2>{e.studies}</h2>
                  <button className="text-blue-500 cursor-pointer" onClick={()=>editrecord(e.idkey)}>edit</button>
                </div>

              ))
            }
          </div>
        </div> 


        <div className="flex w-full">
          <div className="w-1/2 px-2">
            <h2 className="text-black text-xl mt-5">Professional Summary</h2>
            <textarea onChange={objfunc} value={formobj.intro} name="intro" rows={8} placeholder="Enter Your professional summary (Max words 200px)..." className="border px-2 w-full rounded" id=""></textarea>
          </div>
          <div className="w-1/2 px-2">
            <h2 className="text-black text-xl mt-5">Your Profile Picture</h2>
            <input onChange={setimage} value={formobj.user_img} placeholder='Image URL' className="border w-full px-2 h-10 rounded" type="text" />
          </div>
        </div>

        <div className="w-full rounded flex justify-end">
          <button onClick={submitfunc} className="border w-1/9 py-2 self-center cursor-pointer">Submit</button>
        </div>
      
        <div className="flex px-3 w-full gap-2"></div>
        {

          data && 
          data.map((e :any, i:any)=>{

            return(<>
              <Link href={`/CV/${e.name}`}>
                <div className="w-30 h-32 border-2 border-black flex flex-col items-center justify-center rounded">
                  <h2 className="capitalize">{e.name}</h2>
                  <h2 className="capitalize">{e.profession}</h2>
                </div>
              </Link>

            </>)

          })

        }

      </div>*/}
    </div>
     
  );
}
