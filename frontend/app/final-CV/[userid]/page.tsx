'use client'

import React, { useContext, useEffect, useState } from 'react'
import Displaycv from '../../components/displaycv'
import axios from 'axios'
import { AppContext } from '../../Context'
import { Router } from 'next/router'
import { useParams } from 'next/navigation'

const FinalCV = () => {

    const {userid} = useParams()
    const [resumeobj, setresumeobj]:any = useState(null)

    useEffect(()=>{

      getdata()
      
    }, [])
    
    const getdata = async ()=>{
      
      let res = await axios.get(`http://localhost:2006/api/getobjdata/${userid}`)
      if(res.data.success){

        setresumeobj(res.data.data)

      }

    }

    console.log(resumeobj, 'resume');
    

  return (
    <div>
        {resumeobj&& <Displaycv resume = {resumeobj}/>}
    </div>
  )
}

export default FinalCV