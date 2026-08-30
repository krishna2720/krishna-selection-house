// CONTROLLERS hold the "business logic" for a route.
// The route just says "when this URL is hit, run this function".
// The controller decides WHAT to actually do (talk to the database,
// check for errors, and send a response back to the frontend).
//
// Flow reminder:
// Route receives the request -> Controller runs the logic ->
// Model talks to MongoDB -> Controller sends the response back

import Product from "../models/Product.js";

// @desc    Get all products (optionally filtered by category)
// @route   GET /api/products
// @route   GET /api/products?category=Ladies
export const getProducts = async (req, res) => {
  try {
    // req.query.category will exist if the frontend calls
    // something like /api/products?category=Ladies
    const { category } = req.query;

    // If a category was given, only fetch products matching it.
    // Otherwise, fetch all products. This one line keeps the
    // controller flexible without needing two separate routes.
    const filter = category ? { category } : {};

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    // If anything goes wrong (e.g. MongoDB is down), we send a
    // generic 500 "server error" response instead of crashing.
    console.error("Error in getProducts:", error.message);
    res.status(500).json({ message: "Unable to fetch products." });
  }
};

// @desc    Get a single product by its MongoDB _id
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // If no product was found with that id, tell the client clearly
    // instead of returning "null" with a success status.
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error in getProductById:", error.message);
    res.status(500).json({ message: "Unable to fetch product." });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// This is mainly useful for the shop owner (via a tool like Postman)
// to add new products without touching the database directly.
export const createProduct = async (req, res) => {
  try {
    const { name, category, description, image } = req.body;

    // Basic validation: make sure the important fields were sent.
    if (!name || !category || !description || !image) {
      return res.status(400).json({ message: "Please provide name, category, description and image." });
    }

    const newProduct = await Product.create({ name, category, description, image });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error in createProduct:", error.message);
    res.status(500).json({ message: "Unable to create product." });
  }
};

// @desc    Update an existing product
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    // { new: true } tells Mongoose to return the UPDATED document,
    // not the old one that existed before the update.
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // re-checks the schema rules (like enum) on update
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error in updateProduct:", error.message);
    res.status(500).json({ message: "Unable to update product." });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error in deleteProduct:", error.message);
    res.status(500).json({ message: "Unable to delete product." });
  }
};
