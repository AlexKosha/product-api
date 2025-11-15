About

This is a simple Product API built with Node.js, TypeScript, and Prisma ORM, connected to a PostgreSQL database.

How to Run

Install dependencies:
npm install


Start the development server:
npm run dev

Sample Requests

Get all products:
curl http://localhost:3000/products


Get a product by ID:
curl http://localhost:3000/products/<product_id>


Filter products by category:
curl http://localhost:3000/products?category=sneakers


Create a new product (POST):
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"New Product","price":100,"currency":"USD","variants":["One Size"],"inStock":true,"description":"Sample product","category":"sneakers"}'
