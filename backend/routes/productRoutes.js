// ROUTES simply map a URL + HTTP method to a controller function.
// They should stay "thin" - no real logic here, just wiring.

import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// GET    /api/products       -> get all products (or filter by ?category=)
// POST   /api/products       -> create a new product
router.route("/").get(getProducts).post(createProduct);

// GET    /api/products/:id   -> get one product
// PUT    /api/products/:id   -> update one product
// DELETE /api/products/:id   -> delete one product
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

export default router;
