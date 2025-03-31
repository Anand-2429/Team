// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
import cors from 'cors';
// import userRoutes from './routes/userRoutes.js';
import connectDB from './db.js';
// import shopRoutes from "./routes/shopRoutes.js";
// import productRoutes from './routes/productRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import cartRoutes from './routes/cartRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import reviewRoutes from './routes/reviewRoutes.js';






// 🔹 Load Environment Variables
dotenv.config();

// 🔹 Connect to MongoDB
connectDB();

const app = express();

// 🔹 Middleware
app.use(express.json());
// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true,
// };

app.use(cors);

// 🔹 Default Route

// app.use("/api/users", userRoutes);
// app.use("/api/shops", shopRoutes);
// app.use("/api/products", productRoutes);
// app.use('/api/order', orderRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('✅ Server is Running...');
});

// 🔹 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
