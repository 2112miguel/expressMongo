const User= require("../../models/user").model
//const { hash } = require("bcrypt")
const encrypt = require("../../lib/encrypt")

const get= async()=>{
    return await User.find({}).exec()
}

const getById =async (id)=>{
    return await User.findById(id).exec()
}

const getByEmail = async (email)=>{
    return await User.findOne({email}).exec()
}

const authenticate = async(user,pswd)=>{
    const hash = await encrypt.hashpswd(pswd)
    return await encrypt.verifyPswd(pswd,hash)
}

const create = async(userData)=>{
    const {firstName,
        lastName,
        email,
        pswd,
        role
    }=userData
    const newUser = new User({
        firstName,
           lastName,
           email,
           pswd,
           role
    })
    console.log("Aqui esta: ",userData)
    const saveUsr= await newUser.save()
    console.log(saveUsr)
    return saveUsr
}

module.exports={
    get,
    create,
    getById,
    getByEmail,
    authenticate
}