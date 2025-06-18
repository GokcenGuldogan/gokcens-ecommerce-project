// src/pages/HomePage.js
import headerImg from "../assets/header.jpg";
import PageContent from "../layout/PageContent";
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
    {/* CARD 1 */}
    <div className="relative w-[90%] h-60 rounded overflow-hidden">
    <img src={menImg} alt="Men" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-xs font-semibold px-4 py-1 rounded">
        MEN
      </div>
    </div>

    {/* CARD 2 */}
    <div className="relative w-[90%] h-60 rounded overflow-hidden">
    <img src={womenImg} alt="Women" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-xs font-semibold px-4 py-1 rounded">
        WOMEN
      </div>
    </div>

    {/* CARD 3 */}
    <div className="relative w-[90%] h-60 rounded overflow-hidden">
    <img src={accessoriesImg} alt="Accessories" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[10px] font-semibold px-4 py-1 rounded">
        ACCESSORIES
      </div>
    </div>

    {/* CARD 4 */}
    <div className="relative w-[90%] h-60 rounded overflow-hidden">
    <img src={kidsImg} alt="Kids" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-xs font-semibold px-4 py-1 rounded">
        KIDS
      </div>
    </div>
  </div>
</section>

    </PageContent>
  );
}

