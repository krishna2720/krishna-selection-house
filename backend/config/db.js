// This file is responsible for ONE thing only: connecting to MongoDB.
// Keeping this logic in its own file makes server.js easier to read,
// and means we only have to change one place if the connection logic changes.

import mongoose from "mongoose";

// connectDB() tries to connect to MongoDB using the URI from our .env file.
// It receives: nothing (it reads MONGODB_URI from process.env)
// It returns: a Promise (we "await" it in server.js before starting the server)
const connectDB = async () => {
  try {
    // mongoose.connect() opens the connection to our MongoDB database.
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // If the connection fails (wrong URI, no internet, MongoDB not running, etc.)
    // we log a clear error message and stop the app, because the app is
    // useless without a database connection.
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1); // 1 means "exit with an error"
  }
};

export default connectDB;
