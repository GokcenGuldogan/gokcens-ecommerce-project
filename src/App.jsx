// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen w-full">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* İleride başka sayfalar eklersen buraya yeni Route ekleyebilirsin */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}



