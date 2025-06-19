export default function Footer() {
  return (
    <footer className="w-full max-w-[414px] mx-auto px-6 mt-16 bg-white text-gray-700 text-sm">
      {/* Bandage ve ikonlar */}
      <div className="flex flex-col gap-2 text-left">
        <h2 className="text-xl font-bold">Bandage</h2>
        <div className="flex flex-col gap-1 pl-1">
          <a href="#" className="text-blue-600">🌐</a>
          <a href="#" className="text-blue-600">🐦</a>
          <a href="#" className="text-blue-600">📘</a>
        </div>
      </div>

      {/* Dört kolonlu bilgi bölümü */}
      <div className="mt-10 grid grid-cols-2 gap-y-8 gap-x-6 text-left">
        <div>
          <h3 className="text-sm font-semibold mb-2">Company Info</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Features</h3>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Resources</h3>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Legal</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
      </div>

      {/* Email abonelik alanı */}
      <div className="mt-10 flex flex-col items-start gap-2">
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
        <button className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-medium w-full">
          Subscribe
        </button>
        <p className="text-gray-400 text-xs mt-1">Lore imp sum dolor Amit</p>
      </div>

      {/* Alt yazı */}
      <div className="mt-10 border-t pt-4 text-center text-gray-400 text-xs">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
}





  