'use client'

import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const AppContext: any = createContext({})

const Context = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [formobj, setformobj]: any = useState({

        personal: {},
        job: [],
        intro: '',
        acadmeic: []

    })

    const [tempindex, settempindex]: any = useState(-1)
    const [editelement, seteditelement]: any = useState(null)
    const [editeduindex, setediteduindex]: any = useState(-1)
    const [editeduelement, setediteduelement]: any = useState(null)
    const [dataobj, setdataobj]: any = useState(null)
    const [objectId, setobjectId]: any = useState(localStorage.getItem('objectId') || '')
    console.log(objectId, 'obje');
    

    useEffect(() => {
        
        const getexisitngcv = async ()=>{
            
            let res = await axios.get(`http://localhost:2006/api/get-cv-data/${objectId}`)

            if(res.data.success){

                setformobj(res.data.cv)

            }
            
        }

        if(objectId!=''){

            getexisitngcv()

        }

    }, [objectId])
    
    

    const sendpersonalinfo = (personalobj:any)=>{

        setformobj({...formobj, personal: personalobj})    
        // storeinDatabase()   

    }

    const sendcareerinfo = (careerobj:any)=>{

        if(tempindex==-1){

            setformobj({...formobj, job: [...formobj.job, careerobj]})

        }
        else{

            let newarr = formobj.job
            newarr[tempindex] = careerobj
            setformobj({...formobj, job: newarr})
            settempindex(-1)

        }
 
    }

    const delexperience = (i:any)=>{

        setformobj({...formobj, job: formobj.job.filter((e:any,index:any)=>{

            return i!=index

        })})

    }

    const sendsummaryinfo = (summary:any)=>{

        setformobj({...formobj, intro: summary})
        
    }
    
    useEffect(()=>{
        
        if(formobj.intro!=''){
            
            updateintro()
            console.log('hello');
            

        }

    }, [formobj?.intro])

    useEffect(()=>{ 
            
        if(formobj?.personal?.firstname)
            updatepersonal()

        console.log('hello');

    }, [formobj?.personal])

    const storeinDatabase = async ()=>{

        console.log(formobj, 'formobj in storeinDatabase');
        
        try {
            let res = await axios.post('http://localhost:2006/api/cv-data', formobj)
            if(res.data.success){

                console.log(res.data.obj, 'obj'); 
                localStorage.setItem('objectId', res.data.obj._id)

            }
            else{
                alert('error')
            }
        } catch (error) {
            console.error('Error posting data:', error);
            alert('An error occurred while saving data.');
        }

    } 

    const updatepersonal:any = async()=>{

        let res = await axios.patch(`http://localhost:2006/api/update-personal/${localStorage.getItem('objectId')}`, formobj.personal)

    }

    const updatejob:any = async()=>{

        let res = await axios.patch(`http://localhost:2006/api/update-job/${localStorage.getItem('objectId')}`, formobj.job)

    }

    const updateacademic:any = async()=>{

        let res = await axios.patch(`http://localhost:2006/api/update-academic/${localStorage.getItem('objectId')}`, formobj.acadmeic)

    }

    const updateintro:any = async()=>{

        let res = await axios.patch(`http://localhost:2006/api/update-intro/${localStorage.getItem('objectId')}`, formobj.intro)
        if(res.data.success){
            setdataobj(res.data.returnuser)
        }

    }
    
    const sendacademicinfo = (academicobj:any)=>{

        if(editeduindex==-1){

            setformobj({...formobj, acadmeic: [...formobj.acadmeic, academicobj]})

        }
        else{

            let newarr = formobj.acadmeic
            newarr[editeduindex] = academicobj
            setformobj({...formobj, acadmeic: newarr})
            setediteduindex(-1)

        }

    }

    const editelefunc = (e:any, i:any)=>{

        settempindex(i)
        seteditelement(e)

    }

    const editedufunc = (e:any, i:any)=>{

        setediteduindex(i)
        setediteduelement(e)

    }
    
    const [temp, settemp]:any = useState(null)

    const [acadmeicinfo, setacadmeicinfo] = useState(["school", 'college', 'university'])
    const [count, setcount] = useState(0)

    const [academicobj, setAcademicobj] = useState({

        institutename: '',
        startingyear: '',
        endingyear: '',
        studies: ''

    })

    const academicfunc = (e: any) => {

        setAcademicobj({ ...academicobj, [e.target.name]: e.target.value })

    }

    const addbtn = () => {


        if (academicobj.institutename != '' && academicobj.startingyear != '' && academicobj.endingyear != '' &&
            academicobj.studies != '') {

            if(temp != null){

                let newarr = formobj.acadmeic
                newarr[temp] = academicobj
                setformobj({...formobj, acadmeic: newarr})
                settemp(null)

            }
            else{

                setformobj({...formobj, acadmeic: [...formobj.acadmeic, {...academicobj, idkey: count}]})

            }

            if (count < acadmeicinfo.length - 1) {

                // setformobj({ ...formobj, acadmeic: [...formobj.acadmeic, {...academicobj, idkey: count}] })
                setcount(prevCount => prevCount + 1)
                // temp = count + 1
                // console.log(temp, 'after');

            }

            setAcademicobj({
                institutename: '',
                startingyear: '',
                endingyear: '',
                studies: ''
            })

        }

    }

    const editrecord = (key :any) => {

        settemp(key)
        setAcademicobj(formobj.acadmeic[key])


    }

    // console.log(formobj);

    const [jobspecs, setJobspecs]: any = useState({

        'Job Title': '',
        'Starting Date': '',
        'Ending Date': '',
        'Employment City': '',
        'role': '',
        bool: false

    })

    const openreadmore = (e:any, i:any)=>{
        
        let newarr = formobj.job
        
        if(formobj.job[i].bool){
            
            newarr[i] = {...e, bool: false}
            setformobj({...formobj, job: newarr})
        }
        else{
            
            newarr[i] = {...e, bool: true}
            setformobj({...formobj, job: newarr})
        
       }

    }

    const addemployment = (e: any) => {

        e.preventDefault()

        setformobj({ ...formobj, job: [...formobj.job, jobspecs] })
        setJobspecs({...jobspecs,
            'Job Title': '',
            'Starting Date': '',
            'Ending Date': '',
            'Employment City': '',
            'role': '',
        })

    }

    // const [skillval, setskillval]: any = useState('')
    // const [languageval, setlanguageval]: any = useState('')
    // const [hobbiesval, sethobbiesval]: any = useState('')
    // const [data, setdata]: any = useState([])

    // const jobspecsfunc = (e: any) => {

    //     setJobspecs({ ...jobspecs, [e.target.name]: e.target.value })

    // }

    // const objfunc = (e: any) => {

    //     setformobj({ ...formobj, [e.target.name]: e.target.value })

    // }

    // const addskill = (e: any) => {
    //     e.preventDefault()
    //     if (skillval != '') {

    //         setformobj({ ...formobj, skills: [...formobj.skills, skillval] })
    //         setskillval('')

    //     }

    // }

    // const addlanguages = (e: any) => {
    //     e.preventDefault()

    //     if (languageval != '') {

    //         setformobj({ ...formobj, languages: [...formobj.languages, languageval] })
    //         setlanguageval('')

    //     }


    // }

    // const addhobbies = (e: any) => {
    //     e.preventDefault()

    //     if (hobbiesval != '') {

    //         setformobj({ ...formobj, hobbies: [...formobj.hobbies, hobbiesval] })
    //         sethobbiesval('')

    //     }

    // }

    // const langfunc = (e: any) => {

    //     setlanguageval(e.target.value)
        
    // }

    // const skillfunc = (e: any) => {

    //     setskillval(e.target.value)

    // }

    // const hobbyfunc = (e: any) => {

    //     sethobbiesval(e.target.value)

    // }

    // const submitfunc = async (e: any) => {
    //     e.preventDefault()

    //     // let res = await axios.post('http://localhost:2001/receivedata', { ...formobj, id: uuidv4() })
    //     // console.log(res.data);
    //     getdata()

    // }

    // const getdata = async () => {

    //     // let resp = await axios.get('http://localhost:2001/sendarr')
    //     // setdata(resp.data);

    // }

    // useEffect(() => {
    //     getdata()
    // }, [])

    // const setimage = (e:any)=>{

    //     setformobj({...formobj, user_img: e.target.value})

    // }


    return (

        <AppContext.Provider value={{ sendpersonalinfo, sendcareerinfo,
            sendacademicinfo, sendsummaryinfo, editelefunc, dataobj,
            tempindex, editelement, delexperience, editedufunc, editeduelement, editeduindex,
            formobj, jobspecs, acadmeicinfo, count,
            academicobj, academicfunc, addbtn, addemployment, editrecord, openreadmore, updatejob,
            updateacademic, storeinDatabase
        }}>
            {children}
        </AppContext.Provider>

    )
}

export default Context