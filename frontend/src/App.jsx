import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Home />
      {/* mode="auto" ya "production" pass karke check karein */}
      <Analytics mode={"auto"} />
    </>
  );
}

export default App;