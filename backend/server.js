import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 8000;

if (!process.env.MONGO_URI) {
  console.error("ERROR: MONGO_URI is not defined in .env file");
  process.exit(1);
}

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
