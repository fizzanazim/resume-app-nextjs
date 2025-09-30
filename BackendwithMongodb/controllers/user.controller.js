import userSchema from "../models/user.schema.js";

const PostCvData = async (req, res)=>{

    let obj = req.body
    console.log(obj, 'obj');
    
    let returnobj = await userSchema.create(obj) 
    console.log(returnobj, 'return');
      
    res.send({message: 'object submitted successfully!', obj: returnobj, success: true}) 

}

const GetCvData = async(_, res)=>{

    let data = await userSchema.find()
    res.send(data)

}

const GetObjDataFunc = async(req, res)=>{

    let userid  = req.params.id
    let data = await userSchema.findOne({_id:userid})
    res.send({data: data, success: true})

}

export { PostCvData, GetCvData, GetObjDataFunc };