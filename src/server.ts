import express from "express";
import cors from "cors";
import productRoutes from "./routes/product";

const app = express();

// Дозволяємо CORS для всіх доменів (для деву)
app.use(
  cors({
    origin: "https://alexkosha.github.io", // <- твій фронтенд
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());
app.use("/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
