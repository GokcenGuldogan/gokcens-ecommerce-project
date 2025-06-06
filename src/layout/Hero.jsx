export default function Hero() {
    return (
      <section className="bg-gray-100 py-10 px-4 flex flex-col items-center text-center">
        <p className="text-sm tracking-widest text-gray-500 mb-2">NEW COLLECTION</p>
        <h2 className="text-3xl font-bold mb-4">Shop the Latest Trends</h2>
        <p className="text-base text-gray-600 mb-6 max-w-md">
          Discover stylish essentials for every season. Make your wardrobe shine.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          SHOP NOW
        </button>
      </section>
    );
  }
  