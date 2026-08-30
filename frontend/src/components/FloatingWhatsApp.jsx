import { openWhatsApp, whatsappMessages } from "../utils/whatsapp";

// A small floating button that stays in the corner of the screen no
// matter how far the visitor scrolls. This is important on mobile,
// where most customers won't want to scroll back up to the navbar
// just to send a message.
function FloatingWhatsApp() {
  return (
    <button
      onClick={() => openWhatsApp(whatsappMessages.general)}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-teal hover:bg-teal-dark text-ivory rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
    >
      {/* A simple inline SVG icon avoids adding an icon-library dependency
          just for one icon. */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.699 4.607 1.905 6.472L4 29l7.727-1.865A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.212-4.586 1.107 1.127-4.47-.233-.367A9.78 9.78 0 0 1 6.182 15c0-5.418 4.4-9.818 9.819-9.818S25.818 9.582 25.818 15 21.42 24.818 16.001 24.818zm5.373-7.34c-.294-.147-1.74-.858-2.01-.956-.27-.098-.467-.147-.663.147-.196.294-.76.956-.932 1.152-.171.196-.343.22-.637.073-.294-.147-1.24-.457-2.363-1.457-.874-.78-1.464-1.744-1.636-2.038-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.367-.024-.514-.073-.147-.663-1.6-.909-2.192-.24-.577-.484-.5-.663-.51l-.564-.01c-.196 0-.514.073-.784.367-.27.294-1.03 1.007-1.03 2.456 0 1.449 1.055 2.85 1.202 3.046.147.196 2.077 3.17 5.033 4.444.703.303 1.251.484 1.679.62.705.224 1.347.192 1.855.117.566-.085 1.74-.712 1.985-1.4.245-.688.245-1.278.171-1.4-.073-.122-.27-.196-.564-.343z" />
      </svg>
    </button>
  );
}

export default FloatingWhatsApp;
