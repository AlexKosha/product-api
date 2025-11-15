import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
} from "../controllers/productController";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getProductsByCategory);
router.post("/", createProduct); // бонус

export default router;
