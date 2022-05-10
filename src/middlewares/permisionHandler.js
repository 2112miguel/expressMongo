const adminHandler = async(req,res,next)=>{
    try {
        const {role}=req.params.tokenPayload
        //console.log(req.params.tokenPayload)
        if(role!=="admin"){
            throw new Error("No tienes persmisos")
        }
        next()

    } catch (error) {
        res.status(401).json({
            success:"Aqui false",
            message: error.message
        })
    }
}

module.exports={adminHandler}