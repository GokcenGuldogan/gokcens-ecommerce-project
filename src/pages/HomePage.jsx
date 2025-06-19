// src/pages/HomePage.js
import PageContent from "../layout/PageContent";
import headerImg from "../assets/header.jpg";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import kidsImg from "../assets/kids.jpg";
import accessoriesImg from "../assets/accessories.jpg";




export default function HomePage() {
  return (
    <PageContent>
      {/* HERO */}
      <div
        className="relative w-full h-[360px] rounded overflow-hidden text-white mt-6"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start gap-3 px-6">
          <p className="text-xs tracking-widest uppercase">Summer 2020</p>
          <h1 className="text-3xl font-bold leading-tight">NEW COLLECTION</h1>
          <p className="text-sm text-white/90">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#38CB89] text-white py-2 px-6 rounded text-sm font-medium mt-2">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* EDITOR'S PICK */}
      <section className="mt-10">
        <h2 className="text-center text-sm font-semibold text-gray-700">EDITOR'S PICK</h2>
        <p className="text-center text-xs text-gray-500 mt-1 px-6">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="relative w-[90%] h-60 rounded overflow-hidden">
            <img src={menImg} alt="Men" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-xs font-semibold px-4 py-1 rounded">
              MEN
            </div>
          </div>
          <div className="relative w-[90%] h-60 rounded overflow-hidden">
            <img src={womenImg} alt="Women" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-xs font-semibold px-4 py-1 rounded">
              WOMEN
            </div>
          </div>
          <div className="relative w-[90%] h-60 rounded overflow-hidden">
            <img src={accessoriesImg} alt="Accessories" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[10px] font-semibold px-4 py-1 rounded">
              ACCESSORIES
            </div>
          </div>
          <div className="relative w-[90%] h-60 rounded overflow-hidden">
            <img src={kidsImg} alt="Kids" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-xs font-semibold px-4 py-1 rounded">
              KIDS
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="w-full max-w-[414px] mx-auto px-6 mt-12">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Featured Products</p>
          <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
          <p className="text-sm text-gray-500 mt-2 leading-snug">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Kart 1 */}
          <div className="rounded overflow-hidden shadow-md">
            <img src="/src/assets/product1.jpg" alt="Product 1" className="w-full h-auto object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">Graphic Design</p>
              <h3 className="text-lg font-semibold">English Department</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-400 line-through">$16.48</span>
                <span className="text-sm text-green-600 font-semibold">$6.48</span>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-black"></span>
              </div>
            </div>
          </div>

          {/* Kart 2 */}
          <div className="rounded overflow-hidden shadow-md">
            <img src="/src/assets/product2.jpg" alt="Product 2" className="w-full h-auto object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">Graphic Design</p>
              <h3 className="text-lg font-semibold">English Department</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-400 line-through">$16.48</span>
                <span className="text-sm text-green-600 font-semibold">$6.48</span>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-black"></span>
              </div>
            </div>
          </div>

          {/* Kart 3 */}
          <div className="rounded overflow-hidden shadow-md">
            <img src="/src/assets/product3.jpg" alt="Product 3" className="w-full h-auto object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">Graphic Design</p>
              <h3 className="text-lg font-semibold">English Department</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-400 line-through">$16.48</span>
                <span className="text-sm text-green-600 font-semibold">$6.48</span>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                <span className="w-3 h-3 rounded-full bg-teal-400"></span>
                <span className="w-3 h-3 rounded-full bg-black"></span>
              </div>
            </div>
          </div>

          {/* Kart 4 */}
          <div className="rounded overflow-hidden shadow-md">
            <img src="/src/assets/product4.jpg" alt="Product 4" className="w-full h-auto object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">Graphic Design</p>
              <h3 className="text-lg font-semibold">English Department</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-400 line-through">$16.48</span>
                <span className="text-sm text-green-600 font-semibold">$6.48</span>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span className="w-3 h-3 rounded-full bg-black"></span>
              </div>
            </div>
          </div>



          {/* Kart 5 */}
<div className="rounded overflow-hidden shadow-md">
  <img src="/src/assets/product5.jpg" alt="Product 5" className="w-full h-auto object-cover" />
  <div className="p-4">
    <p className="text-sm text-gray-500">Graphic Design</p>
    <h3 className="text-lg font-semibold">English Department</h3>
    <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-gray-400 line-through">$16.48</span>
      <span className="text-sm text-green-600 font-semibold">$6.48</span>
    </div>
    <div className="flex gap-2 mt-3">
      <span className="w-3 h-3 rounded-full bg-blue-400" />
      <span className="w-3 h-3 rounded-full bg-green-600" />
      <span className="w-3 h-3 rounded-full bg-orange-400" />
      <span className="w-3 h-3 rounded-full bg-black" />
    </div>
  </div>
</div>

{/* Kart 6 */}
<div className="rounded overflow-hidden shadow-md">
  <img src="/src/assets/product6.jpg" alt="Product 6" className="w-full h-auto object-cover" />
  <div className="p-4">
    <p className="text-sm text-gray-500">Graphic Design</p>
    <h3 className="text-lg font-semibold">English Department</h3>
    <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-gray-400 line-through">$16.48</span>
      <span className="text-sm text-green-600 font-semibold">$6.48</span>
    </div>
    <div className="flex gap-2 mt-3">
      <span className="w-3 h-3 rounded-full bg-blue-400" />
      <span className="w-3 h-3 rounded-full bg-green-600" />
      <span className="w-3 h-3 rounded-full bg-orange-400" />
      <span className="w-3 h-3 rounded-full bg-black" />
    </div>
  </div>
</div>

{/* Kart 7 */}
<div className="rounded overflow-hidden shadow-md">
  <img src="/src/assets/product6.jpg" alt="Product 7" className="w-full h-auto object-cover" />
  <div className="p-4">
    <p className="text-sm text-gray-500">Graphic Design</p>
    <h3 className="text-lg font-semibold">English Department</h3>
    <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-gray-400 line-through">$16.48</span>
      <span className="text-sm text-green-600 font-semibold">$6.48</span>
    </div>
    <div className="flex gap-2 mt-3">
      <span className="w-3 h-3 rounded-full bg-blue-400" />
      <span className="w-3 h-3 rounded-full bg-green-600" />
      <span className="w-3 h-3 rounded-full bg-orange-400" />
      <span className="w-3 h-3 rounded-full bg-black" />
    </div>
  </div>
</div>

{/* Kart 8 */}
<div className="rounded overflow-hidden shadow-md">
  <img src="/src/assets/product8.jpg" alt="Product 8" className="w-full h-auto object-cover" />
  <div className="p-4">
    <p className="text-sm text-gray-500">Graphic Design</p>
    <h3 className="text-lg font-semibold">English Department</h3>
    <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-gray-400 line-through">$16.48</span>
      <span className="text-sm text-green-600 font-semibold">$6.48</span>
    </div>
    <div className="flex gap-2 mt-3">
      <span className="w-3 h-3 rounded-full bg-blue-400" />
      <span className="w-3 h-3 rounded-full bg-green-600" />
      <span className="w-3 h-3 rounded-full bg-orange-400" />
      <span className="w-3 h-3 rounded-full bg-black" />
    </div>
  </div>
</div>

        </div>
      </section>




{/* Vita Classic Product Section */}
<section className="w-full max-w-[414px] mx-auto px-6 mt-12">
  {/* Yeşil zeminli üst + alt alan */}
  <div className="bg-[#23856D] text-white px-6 pt-8 pb-4 rounded flex flex-col items-center text-center">
    {/* Üst metinler */}
    <p className="text-sm tracking-widest uppercase">Summer 2020</p>
    <h3 className="text-xl font-bold mt-2">Vita Classic Product</h3>
    <p className="text-sm text-white/80 leading-relaxed mt-2">
      We know how large objects will act, but things on a small scale.
    </p>
    <p className="text-lg font-semibold mt-4">$16.48</p>
    <button className="bg-[#38CB89] text-white py-2 px-6 rounded text-sm font-medium mt-3">
      ADD TO CART
    </button>

    {/* Ürün görseli */}
    <div className="w-full mt-6">
      <img
        src="/src/assets/promotion.png" 
        alt="Vita Classic Product"
        className="w-full object-cover rounded"
      />
    </div>
  </div>
</section>


{/* Neural Universe Section */}
<section className="w-full max-w-[414px] mx-auto px-6 mt-12 flex flex-col gap-8">
  {/* Üst Metin Bloğu */}
  <div className="text-center">
    <p className="text-sm text-gray-500 tracking-widest uppercase">Summer 2020</p>
    <h2 className="text-2xl font-bold mt-2 leading-tight">
      Part of the <br /> Neural Universe
    </h2>
    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
      We know how large objects will act, but things on a small scale.
    </p>

    <div className="flex flex-col gap-3 mt-6 items-center">
      <button className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-medium">
        BUY NOW
      </button>
      <button className="border border-[#23A6F0] text-[#23A6F0] px-6 py-2 rounded text-sm font-medium">
        LEARN MORE
      </button>
    </div>
  </div>

  {/* Görsel + Alt Bilgiler */}
  <div className="flex flex-col items-center text-center">
    <img
      src="/src/assets/neurel.png" // görsel yolunu kendi dosyana göre ayarla
      alt="Winter Clothing"
      className="w-full object-cover rounded mb-4"
    />

    <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">Practice Advice</p>
    <h3 className="text-xl font-bold mt-1">Featured Products</h3>
    <p className="text-sm text-gray-500 mt-2 leading-snug px-2">
      Problems trying to resolve the conflict between the two major
    </p>
  </div>
</section>



{/* Featured Products Section */}
<section className="w-full max-w-[414px] mx-auto px-6 mt-12">
  {/* Başlıklar */}
  <div className="text-center">
    <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">Practice Advice</p>
    <h2 className="text-2xl font-bold mt-1">Featured Products</h2>
    <p className="text-sm text-gray-500 mt-2 leading-snug">
      Problems trying to resolve the conflict between the two major
    </p>
  </div>

  {/* Kart */}
  <div className="mt-8 bg-white rounded shadow-sm overflow-hidden">
    {/* Görsel ve NEW etiketi */}
    <div className="relative">
      <img
        src="/src/assets/featured.jpg" 
        alt="Product"
        className="w-full h-52 object-cover"
      />
      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
        NEW
      </span>
    </div>

    {/* Kart Metinleri */}
    <div className="p-4 flex flex-col gap-2">
      {/* Etiketler */}
      <div className="text-xs text-gray-400 space-x-2">
        <span>Google</span>
        <span>Trending</span>
        <span>New</span>
      </div>

      {/* Başlık */}
      <h3 className="text-base font-semibold">
        Loudest à la Madison #1 (L’integral)
      </h3>

      {/* Açıklama */}
      <p className="text-sm text-gray-500 leading-snug">
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>

      {/* Tarih ve yorum */}
      <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
        <span>22 April 2021</span>
        <span>💬 10 comments</span>
      </div>

      {/* Learn More */}
      <div className="mt-2">
        <button className="text-[#23A6F0] text-sm font-medium flex items-center gap-1">
          Learn More <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  </div>


  {/* Featured Product Card - 2 */}
<div className="mt-6 bg-white rounded shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="/src/assets/new2.jpg" 
      alt="Colorful Abstract"
      className="w-full h-52 object-cover"
    />
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

    <h3 className="text-base font-semibold">
      Loudest à la Madison #1 (L’intégral)
    </h3>

    <p className="text-sm text-gray-500 leading-snug">
      We focus on ergonomics and meeting you where you work. It's only a keystroke away.
    </p>

    <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
      <span>22 April 2021</span>
      <span>💬 10 comments</span>
    </div>

    <div className="mt-2">
      <button className="text-[#23A6F0] text-sm font-medium flex items-center gap-1">
        Learn More <span className="text-lg">→</span>
      </button>
    </div>
  </div>
</div>


{/* Featured Product Card - 3 */}
<div className="mt-6 bg-white rounded shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="/src/assets/new3.jpg" // Bu görseli assets klasörüne ekle
      alt="Colorful Window Scene"
      className="w-full h-52 object-cover"
    />
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

    <h3 className="text-base font-semibold">
      Loudest à la Madison #1 (L’intégral)
    </h3>

    <p className="text-sm text-gray-500 leading-snug">
      We focus on ergonomics and meeting you where you work. It's only a keystroke away.
    </p>

    <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
      <span>22 April 2021</span>
      <span>💬 10 comments</span>
    </div>

    <div className="mt-2">
      <button className="text-[#23A6F0] text-sm font-medium flex items-center gap-1">
        Learn More <span className="text-lg">→</span>
      </button>
    </div>
  </div>
</div>


</section>


    </PageContent>
  );
}

