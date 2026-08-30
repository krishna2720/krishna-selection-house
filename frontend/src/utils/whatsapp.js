// This file has ONE job: build the correct WhatsApp link and open it.
// Keeping it in one place means every "WhatsApp Us" button on the site
// behaves the same way, and the phone number only needs to be changed here.

const SHOP_WHATSAPP_NUMBER = "917455990282"; // country code (91) + number, no + or spaces

// openWhatsApp(message) opens WhatsApp (app on mobile, WhatsApp Web on desktop)
// with a pre-filled message, ready for the customer to send.
// Receives: message (string) - the text to pre-fill
// Returns: nothing - it opens a new browser tab
export const openWhatsApp = (message) => {
  // encodeURIComponent() converts spaces and special characters into a
  // format that is safe to put inside a URL, e.g. spaces become "%20".
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // "_blank" opens the link in a new tab instead of navigating away
  // from the website.
  window.open(url, "_blank");
};

// callShop() simply triggers the phone's dialer with the shop's number.
export const callShop = () => {
  window.location.href = "tel:+917455990282";
};

// openDirections() opens Google Maps with a search for the shop's address.
// We use a text search (instead of exact coordinates) because we only
// have the written address, not verified GPS coordinates.
export const openDirections = () => {
  const address = encodeURIComponent(
    "Krishna Selection House, Khari Kuan, Dhampur, Bijnor, Uttar Pradesh, India"
  );
  window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
};

// Pre-written messages for each section, as specified in the project brief.
// Storing them here (instead of typing the string in every component)
// avoids typos and makes them easy to update later.
export const whatsappMessages = {
  ladies: "Hello Krishna Selection House, I would like to enquire about the ladies collection.",
  men: "Hello Krishna Selection House, I would like to enquire about the men's collection.",
  kids: "Hello Krishna Selection House, I would like to enquire about the kids collection.",
  schoolUniform: "Hello Krishna Selection House, I want to enquire about a school uniform order.",
  general: "Hello Krishna Selection House, I would like to know more about your shop.",
};
