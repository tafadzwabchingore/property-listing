import swaggerJSDoc from "swagger-jsdoc";
import fs from "fs";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Airbnb-Style API",
      version: "1.0.0",
      description: "API documentation for Users and Properties collections",
    },
    servers: [
      {
        url: "https://property-listing-lcak.onrender.com",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your route files with Swagger annotations
};

const swaggerSpec = swaggerJSDoc(options);

// Generate swagger.json
fs.writeFileSync("./docs/swagger.json", JSON.stringify(swaggerSpec, null, 2));

export default swaggerSpec;