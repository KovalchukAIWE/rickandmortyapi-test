import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CardsDetails from './components/Profile/Profile';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
