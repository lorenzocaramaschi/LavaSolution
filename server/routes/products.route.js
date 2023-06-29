import { Router } from "express";
import { productsController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(productsController.findAllProducts)
  .post(productsController.createProducts);

router
  .route("/:id")
  .get(productsController.findProductsById)
  .delete(productsController.deleteProducts)
  .patch(productsController.updateProducts);

export const productRouter = router;
