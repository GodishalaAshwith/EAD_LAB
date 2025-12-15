const express = require("express");
const app = express();

// Import route modules
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

// Middleware
app.use(express.json());

// Mount routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
