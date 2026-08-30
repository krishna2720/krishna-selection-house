// This is a ONE-TIME-USE script (run with "npm run seed").
// It fills your MongoDB database with the shop's starting catalogue,
// so you don't have to add every product by hand using Postman.
//
// It is safe to run more than once - it clears old products first
// so you don't end up with duplicates.

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";

// Placeholder images use loremflickr.com, which returns a real photo
// matching the given keywords. Replace these URLs any time with real
// photos of Krishna Selection House's products (see README).
const products = [
  // ---------- Ladies ----------
  { name: "Ladies Jeans", category: "Ladies", description: "Comfortable and stylish jeans for everyday wear.", image: "https://loremflickr.com/500/600/women,jeans" },
  { name: "Ladies T-Shirts", category: "Ladies", description: "Casual cotton t-shirts in everyday colours.", image: "https://loremflickr.com/500/600/women,tshirt" },
  { name: "Ladies Tops", category: "Ladies", description: "Trendy tops for casual and semi-formal wear.", image: "https://loremflickr.com/500/600/women,top,fashion" },
  { name: "Ladies Shirts", category: "Ladies", description: "Smart shirts for a neat, everyday look.", image: "https://loremflickr.com/500/600/women,shirt" },
  { name: "Ladies Lowers", category: "Ladies", description: "Comfortable lowers for daily and home wear.", image: "https://loremflickr.com/500/600/women,leggings" },
  { name: "Kurtis", category: "Ladies", description: "Traditional and modern kurtis for every occasion.", image: "https://loremflickr.com/500/600/kurti,indian,dress" },
  { name: "Baba Suits", category: "Ladies", description: "Comfortable baba suit sets.", image: "https://loremflickr.com/500/600/indian,suit,women" },
  { name: "Fancy Tops", category: "Ladies", description: "Party-wear fancy tops for special occasions.", image: "https://loremflickr.com/500/600/women,party,top" },

  // ---------- Men ----------
  { name: "Men's Shirts", category: "Men", description: "Formal and casual shirts for men.", image: "https://loremflickr.com/500/600/men,shirt" },
  { name: "Men's Jeans", category: "Men", description: "Durable and stylish jeans for men.", image: "https://loremflickr.com/500/600/men,jeans" },
  { name: "Men's T-Shirts", category: "Men", description: "Everyday casual t-shirts for men.", image: "https://loremflickr.com/500/600/men,tshirt" },
  { name: "Men's Lowers", category: "Men", description: "Comfortable lowers for daily wear.", image: "https://loremflickr.com/500/600/men,trackpants" },

  // ---------- Kids ----------
  { name: "Kids Dresses", category: "Kids", description: "Everyday dresses for kids.", image: "https://loremflickr.com/500/600/kids,dress" },
  { name: "Fancy Dresses", category: "Kids", description: "Festive and party-wear dresses for kids.", image: "https://loremflickr.com/500/600/kids,party,dress" },
  { name: "Girls' Jeans", category: "Kids", description: "Comfortable jeans for young girls.", image: "https://loremflickr.com/500/600/girl,jeans" },
  { name: "Fancy Tops for Little Girls", category: "Kids", description: "Cute fancy tops for little girls.", image: "https://loremflickr.com/500/600/girl,top,fashion" },

  // ---------- Fancy Showcase (used on the homepage showcase section) ----------
  { name: "Fancy Ladies Tops", category: "Fancy", description: "Trendy fancy tops for special occasions.", image: "https://loremflickr.com/700/500/women,fancy,top" },
  { name: "Trendy Kurtis", category: "Fancy", description: "Stylish kurtis for festive occasions.", image: "https://loremflickr.com/700/500/kurti,fashion" },
  { name: "Girls' Fancy Dresses", category: "Fancy", description: "Beautiful fancy dresses for girls.", image: "https://loremflickr.com/700/500/girl,fancy,dress" },
  { name: "Fancy Tops for Little Girls", category: "Fancy", description: "Adorable party tops for little girls.", image: "https://loremflickr.com/700/500/kids,party,top" },
];

const seedDatabase = async () => {
  await connectDB();

  try {
    // Remove existing products so re-running this script doesn't create duplicates.
    await Product.deleteMany();
    console.log("Old products removed.");

    await Product.insertMany(products);
    console.log(`${products.length} products added successfully.`);
  } catch (error) {
    console.error("Error seeding database:", error.message);
  } finally {
    // Close the connection so the script exits cleanly instead of hanging.
    mongoose.connection.close();
  }
};

seedDatabase();
