// Small helper so we don't repeat the backend's base URL everywhere.
// VITE_API_URL comes from the .env file (see .env.example).
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// fetchProducts(category) asks the backend for products.
// Receives: category (optional string, e.g. "Ladies") to filter results
// Returns: an array of product objects, or throws an error if the
//          request fails (the calling component decides how to handle it).
export const fetchProducts = async (category) => {
  const url = category ? `${API_URL}/products?category=${category}` : `${API_URL}/products`;

  const response = await fetch(url);

  if (!response.ok) {
    // We throw here so components can catch this in a try/catch
    // and show a friendly error message to the user.
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
