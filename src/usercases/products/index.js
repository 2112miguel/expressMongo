const elFaker= require("@faker-js/faker")
const Product= require("../../models/products").model

const get = async()=>{
    return await Product.find({}).exec()
}


const getById= async (id)=>{
   // console.log("En la f ",id)
    return await Product.findById(id).exec()
}

const create = async (productData)=>{
    
    const { name,price, description,img, categories}=productData
    console.log("Aqui entra indexProduc",productData)
    const newProduct = new Product({
        name,price, description,img,categories
    })
    const saveProduct= await newProduct.save()
    return saveProduct
}

const update= async(id,productData)=>{
    const { name,price, descrip,img} = productData
    const updateProduct = await Product.findByIdAndUpdate(id,{ name,price, descrip,img}).exec()
    return updateProduct
}

const patch = async(id,productData)=>{
    return await Product.findByIdAndUpdate(id, {...productData},{new :true}).exec()
    
}

const del = async(id)=>{
    return await Product.findByIdAndDelete(id).exec()
}

module.exports={
    get,
    getById,
    create,
    update,
    del,
    patch
}