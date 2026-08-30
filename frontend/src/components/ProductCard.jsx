// A single product/category card.
// Kept as its own component so CollectionSection can create one of
// these for every item in a products array using .map().
function ProductCard({ name, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <img
        src={image}
        alt={name}
        // loading="lazy" tells the browser to only load the image when
        // it's about to scroll into view, which keeps the page fast.
        loading="lazy"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-maroon">{name}</h3>
        <p className="font-body text-sm text-charcoal/70 mt-1">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
