const jwt = require('./src/lib/jwt')
jwt.verify("")
.then((token)=>{
    console.log(token)
})
jwt.sing({sub: "123",name : "miguel"})
.then((token)=>{console.log("El token es ",token)})