// A short, honest "About" section.
// Note: per the project brief, we never invent details like years of
// experience, awards, or customer counts - only the facts we were given.
function AboutShop() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 bg-ivory">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-maroon">
          About Krishna Selection House
        </h2>
        <p className="font-body text-charcoal/80 mt-4 leading-relaxed">
          Krishna Selection House is a local clothing shop in Khari Kuan, Dhampur, run by Neeraj
          Agarwal. We mainly specialise in ladies&apos; clothing, while also offering a range of
          men&apos;s and children&apos;s clothing. Visit us in person to see the full collection
          and get a feel for the fabric and fit.
        </p>
      </div>
    </section>
  );
}

export default AboutShop;
