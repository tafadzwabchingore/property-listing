import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

dotenv.config();

// Make sure MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined! Set it in Render environment variables.");
  process.exit(1);
}

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
// Enable CORS for all domains (you can restrict later if needed)
app.use(cors());
app.use(express.json());

// Routes

// Redirect root to Swagger docs
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);

// Swagger Documentation
// Use absolute URL so Swagger UI can fetch endpoints correctly
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Use Render-assigned port or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on localhost:${PORT}. Access Swagger at /api-docs`)
);