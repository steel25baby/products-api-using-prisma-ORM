import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getProduct=async(req, res)=>{
    try {
        const product=await prisma.products.findMany();
        if(!product){
        res.status(404).json({success:true, message: "No products Found"})
        }
        res.status(200).json({success:true, message: product})
    } catch (error) {
        res.status(500).json({success:false, message: "There was a problem with the server"})
    }
}


export const getProductById= async(req, res)=>{
    try {
        const {id}=req.params
        const product=await prisma.products.findFirst({
            where:{id:id}
        });
        if(!product){
        res.status(404).json({success:true, message: "No products Found"})
        }
        res.status(200).json({success:true, message: product})
    } catch (error) {
        res.status(500).json({success:false, message: "There was a problem with the server"})
    }
}

export const addProduct=async(req, res) =>{
    try {
        const {productThumbnail,productTitle,productDescription,productCost,onOffer }=req.body;
        const product=await prisma.products.create({
            data:{
                productThumbnail,
                productTitle,
                productDescription,
                productCost,
                onOffer
            }
        })
        res.status(201).json({success:true, data: "Product added successfully"})
    } catch (error) {
        res.status(500).json({success:false, data: "There was a problem with the server"})
    }
}

export const updateProduct=async(req, res)=>{
    try {
        const {id}=req.params;
        const {productThumbnail,productTitle,productDescription,productCost,onOffer}=req.body;
        const product=await prisma.products.update({
            where:{id:id},
            data:{
                productThumbnail,
                productTitle,
                productDescription,
                productCost,
                onOffer
            }
        });
        res.status(200).json({success:true, message: "Product has been successfully updated"})
    } catch (error) {
        res.status(500).json({success:false, message: "There was a problem with the server"})
    }
}

export const deleteProduct=async(req, res)=>{
    try {
        const {id}=req.params
        const product=await prisma.products.delete({
            where:{id:id}
        });
        if(!product){
        res.status(404).json({success:true, message: "No products Found"})
        }
        res.status(200).json({success:true, message: "Product has been successfully removed"})
    } catch (error) {
        res.status(500).json({success:false, message: "There was a problem with the server"})
    }
}