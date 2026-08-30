import Home from "./pages/Home";

// This site is a single page (no routing library needed), so App.jsx
// simply renders the Home page. Keeping this file tiny makes it obvious
// where to look if the project ever grows to need more pages.
function App() {
  return <Home />;
}

export default App;
