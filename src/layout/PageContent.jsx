// src/layout/PageContent.js
import Header from "./Header";
import Footer from "./Footer";

export default function PageContent({ children }) {
  return (
    <div className="w-full max-w-[414px] mx-auto px-4">
      <Header />
      <main className="mt-4">{children}</main>
      <Footer />
    </div>
  );
}
