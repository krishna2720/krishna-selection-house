import { openWhatsApp, callShop, openDirections, whatsappMessages } from "../utils/whatsapp";

// The hero is the first thing a visitor sees.
// Its only job is to say who the shop is and give three clear
// actions: message, call, or get directions.
function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 px-4 sm:px-6 bg-blush overflow-hidden">
      {/* Two soft decorative circles in the background, purely visual. */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-marigold/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-teal/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-body text-sm sm:text-base tracking-widest uppercase text-teal-dark mb-3">
          Khari Kuan &middot; Dhampur &middot; Bijnor
        </p>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-maroon leading-tight">
          Krishna Selection House
        </h1>

        <p className="font-display text-xl sm:text-2xl text-charcoal mt-4">
          Ladies Fashion, Men&apos;s Wear &amp; Kids Collection — All Under One Roof
        </p>

        <p className="font-body text-base sm:text-lg text-charcoal/80 mt-4 max-w-xl mx-auto">
          Trendy clothing for women, men and kids in Khari Kuan, Dhampur.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button
            onClick={() => openWhatsApp(whatsappMessages.general)}
            className="bg-teal text-ivory font-body font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-dark transition-colors"
          >
            WhatsApp Us
          </button>
          <button
            onClick={callShop}
            className="bg-maroon text-ivory font-body font-semibold px-6 py-3 rounded-full shadow-md hover:bg-maroon-dark transition-colors"
          >
            Call Now
          </button>
          <button
            onClick={openDirections}
            className="bg-ivory text-maroon border-2 border-maroon font-body font-semibold px-6 py-3 rounded-full hover:bg-maroon hover:text-ivory transition-colors"
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
