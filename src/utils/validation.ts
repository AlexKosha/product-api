import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  currency: z.string().default("USD"),
  imageUrl: z.string().url(),
  variants: z.array(z.string()).default([]),
  inStock: z.boolean().default(true),
  description: z.string(),
  category: z.string(),
});
