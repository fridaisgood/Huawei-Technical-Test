const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

const barangRoutes = require("./routes/barangRoutes");

app.use(express.json());

app.use("/api-barang", barangRoutes);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("API Barang Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running di http://localhost:3000");
  console.log("Swagger docs di http://localhost:3000/api-docs");
});