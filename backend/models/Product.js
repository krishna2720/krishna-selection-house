// This is our Mongoose "model".
// A model describes the SHAPE of the data we store in MongoDB,
// and gives us a JavaScript object (Product) we can use to
// create, read, update, and delete documents in the "products" collection.

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // The display name of the product, e.g. "Ladies Jeans"
    name: {
      type: String,
      required: true,
    },
    // Which section the product belongs to.
    // We restrict it to a fixed list (enum) so bad data can't sneak in,
    // e.g. someone typing "ladies" instead of "Ladies" by mistake.
    category: {
      type: String,
      required: true,
      enum: ["Ladies", "Men", "Kids", "Fancy"],
    },
    // A short description shown on the product card.
    description: {
      type: String,
      required: true,
    },
    // URL of the product image.
    // For now this can point to a placeholder image; later it can be
    // replaced with a real photo of the shop's product (see README).
    image: {
      type: String,
      required: true,
    },
  },
  {
    // timestamps automatically adds "createdAt" and "updatedAt" fields.
    // This is useful later if we ever want to sort by "newest first".
    timestamps: true,
  }
);

// mongoose.model() turns our schema into a usable model.
// "Product" will be stored in MongoDB as the "products" collection
// (Mongoose automatically lowercases and pluralizes the name).
const Product = mongoose.model("Product", productSchema);

export default Product;
