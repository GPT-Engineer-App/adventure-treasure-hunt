import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TreasureHunt from "./pages/TreasureHunt.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/treasure-hunt" element={<TreasureHunt />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
