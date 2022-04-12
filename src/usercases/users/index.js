const User= require("../../models/user").model

const get = async()=>{
    const allUsers = await User.find({}).exec()
    return allUsers
}

const create = async(userData)=>{
    const {name,pswd,img}=userData
    const newUser = new User({
        name,pswd,img
    })
    const saveUsr= await newUser.save()
    return saveUsr
}

module.exports={
    get,
    create
}