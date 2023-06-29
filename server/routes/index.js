import { Router } from "express";
import { productRouter } from "./products.route.js";

const router = Router();

router.use("/productos", productRouter);

export default router;
