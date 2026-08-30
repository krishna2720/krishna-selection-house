import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CollectionSection from "../components/CollectionSection";
import FancyShowcase from "../components/FancyShowcase";
import SchoolUniform from "../components/SchoolUniform";
import AboutShop from "../components/AboutShop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SectionDivider from "../components/SectionDivider";
import { whatsappMessages } from "../utils/whatsapp";

// Home.jsx lays out the ENTIRE homepage by stacking section components
// in order. It doesn't contain any real logic itself - each section
// manages its own data and behaviour. This keeps the page easy to
// re-order or extend later (e.g. adding a new section is just one more line).
function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />

      <CollectionSection
        id="ladies"
        title="Ladies Collection"
        subtitle="Our main specialty - jeans, tops, kurtis, suits and more."
        category="Ladies"
        bg="bg-ivory"
        whatsappMessage={whatsappMessages.ladies}
      />
      <SectionDivider color="#7A1E3C" />

      <CollectionSection
        id="men"
        title="Men's Collection"
        subtitle="Shirts, jeans, t-shirts and lowers for everyday wear."
        category="Men"
        bg="bg-blush"
        whatsappMessage={whatsappMessages.men}
      />
      <SectionDivider color="#7A1E3C" />

      <CollectionSection
        id="kids"
        title="Kids Collection"
        subtitle="Cute and comfortable clothing for children."
        category="Kids"
        bg="bg-ivory"
        whatsappMessage={whatsappMessages.kids}
      />

      <FancyShowcase />
      <SchoolUniform />
      <AboutShop />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Home;
