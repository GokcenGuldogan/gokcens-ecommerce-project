import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}



