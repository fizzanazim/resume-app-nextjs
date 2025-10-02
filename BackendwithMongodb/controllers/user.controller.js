import userSchema from "../models/user.schema.js";

const PostCvData = async (req, res)=>{

    let obj = req.body
    console.log(obj, 'obj');
    
    let returnobj = await userSchema.create(obj) 
    console.log(returnobj, 'return');
      
    res.send({message: 'object submitted successfully!', obj: returnobj, success: true}) 

}

const GetCvData = async(req, res)=>{

    let cv = await userSchema.findOne({_id: req.params.objectId})
    res.send({cv:cv, success:true})

}

const UpdateJob = async(req, res)=>{

    await userSchema.findOneAndUpdate(
        {_id: req.params.userid},
        {$set: {job: req.body}},
        {new: true}
    )

    res.send({success: true})

}

const UpdateAcademic = async(req, res)=>{

    await userSchema.findOneAndUpdate(
        {_id: req.params.userid},
        {$set: {acadmeic: req.body}},
        {new: true}
    )

    res.send({success: true})

}

const UpdateIntro = async(req, res)=>{

    await userSchema.findOneAndUpdate(
        {_id: req.params.userid},
        {$set: {intro: req.body}},
        {new: true}
    )

    res.send({success: true})

}

const UpdatePersonal = async(req, res)=>{

    await userSchema.findOneAndUpdate(
        {_id: req.params.userid},
        {$set: {personal: req.body}},
        {new: true}
    )

    res.send({success: true})

}

export { PostCvData, GetCvData, UpdateJob, UpdateAcademic, 
    UpdateIntro, UpdatePersonal };