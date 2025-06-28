import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full text-gray-700 text-sm px-6 py-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Logo & Icons */}
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-2xl font-bold text-black">Bandage</h1>
          <div className="flex gap-4 mt-2 text-blue-600 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Link Sections + Subscribe */}
        <div className="grid gap-8 md:grid-cols-5 text-left">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-black mb-2">Company Info</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-black mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-black mb-2">Features</h3>
            <ul className="space-y-1">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-black mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-black mb-2">Get In Touch</h3>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-4 py-2 rounded text-sm w-full"
              />
              <button className="bg-blue-500 text-white py-2 rounded font-medium w-full">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Lorem impsum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-gray-400 mt-10">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
}







  