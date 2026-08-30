// app.js sets up the Express application itself: middleware and routes.
// We keep this separate from server.js (which starts the server and
// connects to the DB) so the app configuration is easy to find and test.

import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// cors() allows our React frontend (running on a different port,
// e.g. localhost:5173) to make requests to this backend (e.g. localhost:5000).
// Without this, the browser blocks the requests for security reasons.
app.use(cors());

// express.json() lets us read JSON data sent in a request body
// (needed for POST and PUT requests, e.g. adding a new product).
app.use(express.json());

// A simple health-check route. Visiting http://localhost:5000/
// in a browser confirms the server is running.
app.get("/", (req, res) => {
  res.send("Krishna Selection House API is running.");
});

// Every route that starts with /api/products is handled by productRoutes.js
app.use("/api/products", productRoutes);

// This runs ONLY if no route above matched the request.
// It sends a clean 404 response instead of Express's default HTML error page.
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

export default app;
//krishna125766_db_user
//eaIfpougf9y290xB