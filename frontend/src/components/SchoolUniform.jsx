import { openWhatsApp, whatsappMessages } from "../utils/whatsapp";

// A simple array describing the 3-step ordering process.
// Using an array + .map() here (instead of writing three near-identical
// <div> blocks by hand) keeps the JSX short and easy to update.
const steps = [
  {
    number: "1",
    title: "Contact Us",
    description: "Send school details and uniform requirements.",
  },
  {
    number: "2",
    title: "Place Your Order",
    description: "Discuss the required uniform and confirm the order.",
  },
  {
    number: "3",
    title: "Get Your Uniform",
    description: "The uniform can be prepared in approximately 4 days.",
  },
];

function SchoolUniform() {
  return (
    <section id="school-uniform" className="py-16 px-4 sm:px-6 bg-blush">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-maroon">
          School Uniforms Available on Order
        </h2>
        <p className="font-body text-charcoal/80 mt-4 max-w-2xl mx-auto">
          School uniforms can be prepared on order. Please contact us at least 4 days before you
          need the uniform.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-10 text-left">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl shadow-md p-6">
              <span className="font-display text-3xl font-semibold text-marigold">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold text-maroon mt-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-charcoal/70 mt-1">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="font-body font-semibold text-maroon mt-8">
          Please contact us at least 4 days in advance for school uniform orders.
        </p>

        <button
          onClick={() => openWhatsApp(whatsappMessages.schoolUniform)}
          className="mt-6 bg-teal text-ivory font-body font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-dark transition-colors"
        >
          Order School Uniform on WhatsApp
        </button>
      </div>
    </section>
  );
}

export default SchoolUniform;
