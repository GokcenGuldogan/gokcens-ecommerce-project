import { useState } from "react";
import { List, Grid2x2, Filter } from "lucide-react";

import shoppage1 from "../assets/shoppage1.jpg";
import shoppage2 from "../assets/shoppage2.jpg";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import partners from "../assets/container.jpg";


export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid");

  const productImages = [item1, item2, item3, item1, item2, item3];

  return (
    <section className="w-full max-w-[414px] mx-auto px-6 py-6">
      <h2 className="text-xl font-bold text-center mb-6">Shop</h2>

      {/* Kategori görselleri */}
      <div className="flex flex-col gap-4 mb-8">
        <img src={shoppage1} alt="Shop Category 1" className="w-full rounded" />
        <img src={shoppage2} alt="Shop Category 2" className="w-full rounded" />
      </div>

      {/* Ürün sayısı, görünüm butonları ve filtre */}
      <div className="text-sm text-center mb-4 text-gray-600">
        Showing all 12 results
      </div>

      <div className="flex justify-between items-center mb-6">
        {/* Görünüm butonları */}
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${viewMode === "grid" ? "bg-black text-white" : "bg-white border"}`}
          >
            <Grid2x2 size={16} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${viewMode === "list" ? "bg-black text-white" : "bg-white border"}`}
          >
            <List size={16} />
          </button>
        </div>

        {/* Dropdown ve filtre */}
        <div className="flex gap-2">
          <select className="border text-sm px-2 py-1 rounded">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded flex items-center gap-1">
            <Filter size={14} />
            Filter
          </button>
        </div>
      </div>

      {/* Ürünler - sadece görsel gösteriliyor, açıklamalar yok */}
      <div className={`${viewMode === "grid" ? "grid grid-cols-1 gap-6" : "flex flex-col gap-4"}`}>
        {productImages.map((img, index) => (
          <div key={index} className="border rounded overflow-hidden">
            <img src={img} alt={`Product ${index}`} className="w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Sayfalama */}
      <div className="flex justify-center mt-10 gap-2 text-sm">
        <button className="px-3 py-1 border rounded text-gray-400">First</button>
        <button className="px-3 py-1 border rounded">1</button>
        <button className="px-3 py-1 border rounded bg-blue-500 text-white">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <button className="px-3 py-1 border rounded text-blue-500">Next</button>
      </div>


 {/* PARTNER LOGOLARI */}
      <div className="mt-12 flex justify-center">
  <img src={partners} alt="Partner Logos" className="w-full max-w-[250px] object-contain" />
</div>

    </section>
  );
}








  