import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import localProducts from "../data/products";

// A visually bigger, image-heavy section highlighting fancy/trendy items.
// It reuses the same data-fetching idea as CollectionSection, but with
// a different card style (large image + text overlay), so it's kept
// as its own component rather than forcing CollectionSection to do two jobs.
function FancyShowcase() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadFancyItems = async () => {
      try {
        const data = await fetchProducts("Fancy");
        setItems(data);
      } catch (error) {
        console.error("Error loading fancy showcase items:", error.message);
        setItems(localProducts.filter((product) => product.category === "Fancy"));
      }
    };

    loadFancyItems();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-maroon">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory text-center mb-10">
          Fancy Styles for Every Occasion
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item._id || item.name}
              className="relative rounded-2xl overflow-hidden shadow-lg h-64 group"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* A dark gradient overlay makes the white text readable
                  on top of any photo, regardless of how bright it is. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-display text-xl text-white font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FancyShowcase;
