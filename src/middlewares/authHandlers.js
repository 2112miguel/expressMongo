//const req = require("express/lib/request")
const jwt = require("../lib/jwt")

const authHandler = async (req, res, next)=>{
    try {
        const {token} = req.headers
        //console.log(token)
        const verifiedToken= await jwt.verify(token)
        req.params.tokenPayload = verifiedToken
       // console.log(req.params.tokenPayload)
        next()
    } catch (error) {
        res.status(401).json({
            success:false,
            message: "Invalid token"
        })
    }
}

module.exports={authHandler}