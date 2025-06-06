import Header from "./Header";
import Footer from "./Footer";



export default function PageContent({ children }) {
  return (
    <div className="min-h-screen px-4 md:px-8">
      {children}
    </div>
  );
}