const elFaker= require("@faker-js/faker")
const Product= require("../../models/products").model

const get = async()=>{
    const allProducts= await Product.find({}).exec()
    return allProducts
}

const getById= async (id)=>{

}

const create = async (productData)=>{
    const { name,price, descrip,img}=productData
    const newProduct = new Product({
        name,price, descrip,img
    })
    const saveProduct= await newProduct.save()
    return saveProduct
}

const update= async(id,productData)=>{

}

const del = async(id)=>{

}

module.exports={
    get,
    getById,
    create,
    update,
    del
}