const User= require("../../models/user").model

const get = async()=>{
    const allUsers = await User.find({}).exec()
    return allUsers
}

const getById =async (id)=>{
    return await User.findById(id).exec()
}

const create = async(userData)=>{
    const {name,pswd,img}=userData
    const newUser = new User({
        name,pswd,img
    })
    const saveUsr= await newUser.save()
    return saveUsr
}

const update = async(id,userData)=>{
    const {name,pswd,img}=userData
    const updateUsr = await User.findByIdAndUpdate(id,{name,pswd,img}).exec()
    return updateUsr
}

module.exports={
    get,
    create,
    getById,
    update
}