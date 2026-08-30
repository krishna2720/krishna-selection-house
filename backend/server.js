// server.js is the ENTRY POINT of our backend.
// Its only job is to: load environment variables, connect to MongoDB,
// and then start the Express app listening on a port.

import dotenv from "dotenv";
dotenv.config(); // reads the .env file and loads it into process.env

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// We connect to the database FIRST, and only start listening for
// requests once that succeeds. This avoids the server accepting
// requests before it can actually talk to MongoDB.
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
