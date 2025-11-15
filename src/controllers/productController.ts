import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { productSchema } from "../utils/validation";

const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  const products = await prisma.product.findMany({ where: { category } });
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = productSchema.parse(req.body);
    const product = await prisma.product.create({ data });
    res.status(201).json(product);
  } catch (err: any) {
    res.status(400).json({ error: err.errors || err.message });
  }
};
