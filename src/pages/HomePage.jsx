// src/pages/HomePage.js
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import headerImg from "../assets/header.jpg";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import kidsImg from "../assets/kids.jpg";
import accessoriesImg from "../assets/accessories.jpg";






export default function HomePage() {
  return (
    <>
      {/* HERO */}
<section
  className="w-full h-[550px] bg-cover bg-center flex items-center"
  style={{
    backgroundImage: `url(${headerImg})`,
  }}
>
  <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-white">
    <div className="max-w-[500px] space-y-4">
      <p className="text-sm tracking-widest uppercase text-gray-100">Summer 2020</p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        NEW COLLECTION
      </h1>
      <p className="text-base text-gray-100">
        We know how large objects will act, but things on a small scale.
      </p>
      <button className="bg-green-500 text-white px-6 py-3 text-sm font-semibold rounded shadow w-fit">
        SHOP NOW
      </button>
    </div>
  </div>
</section>





<section className="mt-10">
  <h2 className="text-center text-sm font-semibold text-gray-700">EDITOR'S PICK</h2>
  <p className="text-center text-xs text-gray-500 mt-1 px-6">
    Problems trying to resolve the conflict between
  </p>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 px-4">
    {/* MEN - geniş kart */}
    <div className="relative h-60 md:h-[340px] md:col-span-2 rounded overflow-hidden">
      <img src={menImg} alt="Men" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4 bg-white text-xs font-semibold px-4 py-1 rounded">
        MEN
      </div>
    </div>

    {/* WOMEN - geniş kart */}
    <div className="relative h-60 md:h-[340px] md:col-span-2 rounded overflow-hidden">
      <img src={womenImg} alt="Women" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4 bg-white text-xs font-semibold px-4 py-1 rounded">
        WOMEN
      </div>
    </div>

    {/* Sağda iki küçük kart */}
    <div className="flex flex-col gap-4 md:col-span-1">
      <div className="relative h-[160px] rounded overflow-hidden">
        <img src={accessoriesImg} alt="Accessories" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 bg-white text-[10px] font-semibold px-4 py-1 rounded">
          ACCESSORIES
        </div>
      </div>
      <div className="relative h-[160px] rounded overflow-hidden">
        <img src={kidsImg} alt="Kids" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 bg-white text-xs font-semibold px-4 py-1 rounded">
          KIDS
        </div>
      </div>
    </div>
  </div>
</section>

{/* SLIDER */}

<Slider />


{/* BESTSELLER */}

<section className="w-full max-w-[1200px] mx-auto px-6 mt-12">
  <div className="text-center mb-6">
    <p className="text-sm text-gray-500 uppercase tracking-wider">Featured Products</p>
    <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
    <p className="text-sm text-gray-500 mt-2 leading-snug">
      Problems trying to resolve the conflict between
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        image: "/src/assets/product1.jpg",
        colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"],
      },
      {
        image: "/src/assets/product2.jpg",
        colors: ["bg-blue-500", "bg-orange-500", "bg-red-500", "bg-black"],
      },
      {
        image: "/src/assets/product3.jpg",
        colors: ["bg-cyan-500", "bg-orange-400", "bg-teal-400", "bg-black"],
      },
      {
        image: "/src/assets/product4.jpg",
        colors: ["bg-blue-400", "bg-pink-500", "bg-orange-500", "bg-black"],
      },
      {
        image: "/src/assets/product5.jpg",
        colors: ["bg-blue-400", "bg-green-600", "bg-orange-400", "bg-black"],
      },
      {
        image: "/src/assets/product6.jpg",
        colors: ["bg-blue-400", "bg-green-600", "bg-orange-400", "bg-black"],
      },
      {
        image: "/src/assets/product6.jpg",
        colors: ["bg-blue-400", "bg-green-600", "bg-orange-400", "bg-black"],
      },
      {
        image: "/src/assets/product8.jpg",
        colors: ["bg-blue-400", "bg-green-600", "bg-orange-400", "bg-black"],
      },
    ].map((item, index) => (
      <ProductCard
        key={index}
        image={item.image}
        category="Graphic Design"
        title="English Department"
        oldPrice="$16.48"
        newPrice="$6.48"
        colors={item.colors}
      />
    ))}
  </div>
</section>






{/* Vita Classic Product Section */}
<section className="w-full bg-[#23856D] text-white mt-12">
  <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center px-6 md:px-12 py-10 gap-6">
    
    {/* Sol taraf: metinler */}
    <div className="text-center md:text-left">
      <p className="text-sm tracking-widest uppercase">Summer 2020</p>
      <h3 className="text-3xl font-bold mt-2">Vita Classic Product</h3>
      <p className="text-sm text-white/80 leading-relaxed mt-4 max-w-md mx-auto md:mx-0">
        We know how large objects will act, but things on a small scale.
      </p>
      <p className="text-lg font-semibold mt-6">$16.48</p>
      <button className="bg-[#38CB89] text-white py-2 px-6 rounded text-sm font-medium mt-3">
        ADD TO CART
      </button>
    </div>

    {/* Sağ taraf: ürün görseli */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/src/assets/promotion.png"
        alt="Vita Classic Product"
        className="w-full max-w-sm object-contain"
      />
    </div>

  </div>
</section>



{/* Neural Universe Section */}
<section className="w-full bg-white mt-12 px-6">
  <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Görsel */}
    <div className="flex justify-center">
      <img
        src="/src/assets/neurel.png"
        alt="Winter Clothing"
        className="w-full max-w-sm object-cover rounded"
      />
    </div>

    {/* Metinler */}
    <div className="text-center md:text-left">
      <p className="text-sm text-gray-500 tracking-widest uppercase">Summer 2020</p>
      <h2 className="text-3xl font-bold mt-2 leading-tight">
        Part of the <br className="hidden md:block" /> Neural Universe
      </h2>
      <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-md mx-auto md:mx-0">
        We know how large objects will act, but things on a small scale.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mt-6 justify-center md:justify-start">
        <button className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-medium">
          BUY NOW
        </button>
        <button className="border border-[#23A6F0] text-[#23A6F0] px-6 py-2 rounded text-sm font-medium">
          LEARN MORE
        </button>
      </div>
    </div>

  </div>
</section>



{/* Featured Posts Section */}
<section className="w-full bg-white mt-16 px-6">
  <div className="max-w-[1200px] mx-auto">
    {/* Başlıklar */}
    <div className="text-center mb-10">
      <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">Practice Advice</p>
      <h2 className="text-3xl font-bold mt-1">Featured Posts</h2>
      <p className="text-sm text-gray-500 mt-2 leading-snug">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
    </div>

    {/* Kartlar Wrapper */}
    <div className="grid gap-6 md:grid-cols-3">
      
      {/* Kart 1 */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="relative">
          <img src="/src/assets/featured.jpg" alt="Post 1" className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="text-xs text-gray-400 space-x-2">
            <span>Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>
          <h3 className="text-base font-semibold">Loudest à la Madison #1 (L’integral)</h3>
          <p className="text-sm text-gray-500 leading-snug">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
            <span>22 April 2021</span>
            <span>💬 10 comments</span>
          </div>
          <button className="text-[#23A6F0] text-sm font-medium flex items-center gap-1 mt-2">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Kart 2 */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="relative">
          <img src="/src/assets/new2.jpg" alt="Post 2" className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="text-xs text-gray-400 space-x-2">
            <span>Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>
          <h3 className="text-base font-semibold">Loudest à la Madison #1 (L’integral)</h3>
          <p className="text-sm text-gray-500 leading-snug">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
            <span>22 April 2021</span>
            <span>💬 10 comments</span>
          </div>
          <button className="text-[#23A6F0] text-sm font-medium flex items-center gap-1 mt-2">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Kart 3 */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="relative">
          <img src="/src/assets/new3.jpg" alt="Post 3" className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="text-xs text-gray-400 space-x-2">
            <span>Google</span>
            <span>Trending</span>
            <span>New</span>
          </div>
          <h3 className="text-base font-semibold">Loudest à la Madison #1 (L’integral)</h3>
          <p className="text-sm text-gray-500 leading-snug">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
            <span>22 April 2021</span>
            <span>💬 10 comments</span>
          </div>
          <button className="text-[#23A6F0] text-sm font-medium flex items-center gap-1 mt-2">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
</>
  );
}

