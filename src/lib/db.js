const mongoose= require("mongoose")

const connect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect("mongodb+srv://adminjs:IyluFlWXFchK8Xfy@cluster0.dv4df.mongodb.net/KodemiaStore?retryWrites=true&w=majority",
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