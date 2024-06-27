import { Router } from "express";
const router=Router();

import { addProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controller/products.controller.js";

router.get("/", getProduct);

router.get("/:id", getProductById);


router.post("/", addProduct);


router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;