import { Menu, Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md">
      {/* Üst bar */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">BrandName</div>
        <div className="flex gap-4">
          <Search className="w-5 h-5" />
          <User className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
        </div>
      </div>

      {/* Menü - Mobil menü olarak gösteriyoruz */}
      <nav className="mt-6 flex flex-col items-center text-center gap-4">
        <a href="#" className="text-gray-800 text-lg">Home</a>
        <a href="#" className="text-gray-800 text-lg">Product</a>
        <a href="#" className="text-gray-800 text-lg">Pricing</a>
        <a href="#" className="text-gray-800 text-lg">Contact</a>
      </nav>
    </header>
  );
}


  