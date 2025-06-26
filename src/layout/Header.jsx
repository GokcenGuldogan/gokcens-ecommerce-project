// src/layout/Header.jsx
import { Search, User, ShoppingCart } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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

          {/* Menü */}
          <nav className="mt-4 md:mt-0 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-900 font-medium">
            <a href="#" className="text-gray-900">Home</a>
            <a href="#" className="text-gray-900">Product</a>
            <a href="#" className="text-gray-900">Pricing</a>
            <a href="#" className="text-gray-900">Contact</a>
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





  