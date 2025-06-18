import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[414px] mx-auto px-4 py-4">
        {/* Üst Satır: Logo + İkonlar */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">BrandName</div>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Menü */}
        <nav className="mt-6 flex flex-col justify-center items-center gap-2 text-sm text-gray-900 font-medium">

          <a href="#"className="text-gray-900">Home</a>
          <a href="#"className="text-gray-900">Product</a>
          <a href="#"className="text-gray-900">Pricing</a>
          <a href="#"className="text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}





  