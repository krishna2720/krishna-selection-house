import { openWhatsApp, callShop, openDirections, whatsappMessages } from "../utils/whatsapp";

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-blush">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-maroon">
          Krishna Selection House
        </h2>

        <div className="mt-6 font-body text-charcoal space-y-2">
          <p>
            <span className="font-semibold">Address:</span> Khari Kuan, Dhampur, Bijnor, Uttar
            Pradesh, India
          </p>
          <p>
            <span className="font-semibold">Phone / WhatsApp:</span> 7455990282
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button
            onClick={callShop}
            className="bg-maroon text-ivory font-body font-semibold px-6 py-3 rounded-full shadow-md hover:bg-maroon-dark transition-colors"
          >
            Call Now
          </button>
          <button
            onClick={() => openWhatsApp(whatsappMessages.general)}
            className="bg-teal text-ivory font-body font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-dark transition-colors"
          >
            WhatsApp
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

export default Contact;
