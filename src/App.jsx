import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TreasureHunt from "./pages/TreasureHunt.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/treasure-hunt" element={<TreasureHunt />} />
      </Routes>
    </Router>
  );
}

export default App;
