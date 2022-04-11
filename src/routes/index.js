const productsRouter = require("./products")
const categoriesRouters= require("./categories")
const usersRouters= require("./users")
const apiRouter = (app)=>{
    app.use("/products",productsRouter)
    app.use("/users",usersRouters)
    app.use("/categories",categoriesRouters)
}

module.exports=apiRouter