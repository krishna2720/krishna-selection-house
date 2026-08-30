import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../utils/api";
import { openWhatsApp } from "../utils/whatsapp";
import localProducts from "../data/products";

// This ONE component renders the Ladies, Men's, and Kids sections.
// Instead of writing three almost-identical sections, we pass in
// different props (id, title, category, etc.) each time we use it
// in Home.jsx. This is a common and beginner-friendly React pattern.
function CollectionSection({ id, title, subtitle, category, bg, whatsappMessage }) {
  // "products" holds the list we'll render. It starts empty and gets
  // filled once the fetch below finishes.
  const [products, setProducts] = useState([]);
  // "isLoading" lets us show a loading message instead of a blank section.
  const [isLoading, setIsLoading] = useState(true);
  // "hasError" lets us show a friendly message if the backend is unreachable.
  const [hasError, setHasError] = useState(false);

  // useEffect runs this code once, right after the component first renders
  // (the empty [] dependency array means "only run on mount, not on every re-render").
  // This is the standard way to fetch data when a component appears on screen.
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(category);
        setProducts(data);
      } catch (error) {
        // If the backend call fails (e.g. server not running yet),
        // fall back to the local sample data so the page still looks complete,
        // and let the user know things aren't fully live.
        console.error(`Error loading ${category} products:`, error.message);
        setHasError(true);
        setProducts(localProducts.filter((product) => product.category === category));
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  return (
    <section id={id} className={`py-16 px-4 sm:px-6 ${bg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-maroon">{title}</h2>
          {subtitle && <p className="font-body text-charcoal/70 mt-2">{subtitle}</p>}
        </div>

        {isLoading && <p className="text-center font-body text-charcoal/60">Loading products…</p>}

        {hasError && (
          <p className="text-center font-body text-sm text-maroon/80 mb-6">
            Unable to load products. Please try again later.
          </p>
        )}

        {!isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* map() creates one ProductCard component for every
                product in the products array - so adding a new
                product in the database automatically shows up here,
                without editing this file. */}
            {products.map((product) => (
              <ProductCard
                key={product._id || product.name}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        )}

        {whatsappMessage && (
          <div className="text-center mt-10">
            <button
              onClick={() => openWhatsApp(whatsappMessage)}
              className="bg-teal text-ivory font-body font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-dark transition-colors"
            >
              Enquire on WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CollectionSection;
