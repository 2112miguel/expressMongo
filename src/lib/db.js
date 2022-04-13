const mongoose= require("mongoose")
const config = require("./config")

const connect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(`${config.db.host}`,
        {useNewUrlParser:true}
        )
        const db= mongoose.connection
        db.on("open",()=>{
            console.log("Connection successful")
            resolve(mongoose)
        })

        db.on("error",(err)=>{
            console.log("Connection failed ",err)
            reject(err)
    })
    })

    
}

module.exports= {connect}