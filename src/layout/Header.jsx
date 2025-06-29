// src/layout/Header.jsx
import { Search, User, ShoppingCart } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* ÜST BAR - SADECE DESKTOP GÖRÜNÜR */}
      <div className="hidden md:grid grid-cols-3 items-center bg-[#1e293b] text-white text-xs px-4 py-2">

        <div className="text-left space-x-4">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="text-center">
          <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="flex items-center justify-end gap-2 text-white text-xs">
  <span className="whitespace-nowrap">Follow Us:</span>
  <Facebook className="w-4 h-4 cursor-pointer" />
  <Instagram className="w-4 h-4 cursor-pointer" />
  <Twitter className="w-4 h-4 cursor-pointer" />
  <Youtube className="w-4 h-4 cursor-pointer" />
</div>
      </div>

      {/* ALT BAR */}
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        {/* Logo + Menü + İkonlar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-center md:text-left">BrandName</div>

          
          {/* MENÜLER */}

{/* Desktop Menüsü */}
<nav className="hidden md:flex flex-row justify-center items-center gap-4 text-sm font-medium">
  <Link to="/HomePage" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Home</Link>
  <div className="relative group">
  <Link
    to="/shop"
    className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition"
  >
    Shop
  </Link>

  {/* Açılır kutu */}
  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px] bg-white shadow-xl rounded-lg hidden group-hover:flex p-6 gap-6 z-30">
    {/* Sütun 1 */}
    <div className="flex flex-col gap-2 text-sm text-gray-800">
      <span className="font-semibold">Kadin</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Bags</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Belts</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Cosmetic</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Bags</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Hats</span>
    </div>
    {/* Sütun 2 */}
    <div className="flex flex-col gap-2 text-sm text-gray-800">
      <span className="font-semibold">Erkek</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Bags</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Belts</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Cosmetics</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Bags</span>
      <span className="hover:text-[#38CB89] cursor-pointer">Hats</span>
    </div>
  </div>
</div>


  <Link to="/about" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">About</Link>
  <Link to="/blog" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Blog</Link>
  <Link to="/contact" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Contact</Link>
  <Link to="/pages" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Pages</Link>
</nav>


{/* Mobile Menüsü */}
<nav className="flex flex-col md:hidden justify-center items-center gap-2 text-sm font-medium mt-4">
  <Link to="/home" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Home</Link>
  <Link to="/product" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Product</Link>
  <Link to="/pricing" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Pricing</Link>
  <Link to="/contact" className="text-gray-900 visited:text-gray-900 hover:text-[#38CB89] transition">Contact</Link>
</nav>



          {/* İkonlar */}
          <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}





  