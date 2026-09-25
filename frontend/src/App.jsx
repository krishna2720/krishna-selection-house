import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";

// This site is a single page (no routing library needed), so App.jsx
// simply renders the Home page. Keeping this file tiny makes it obvious
// where to look if the project ever grows to need more pages.
function App() {
  return ( // <--- Ye 'return' yahan zaroori hai!
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;