import express from "express"
import productsRouter from "../routes/products.routes.js"
import { config } from "dotenv"
config()

const app=express();
app.use(express.json());

app.use("/api/products", productsRouter)

const port=process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})