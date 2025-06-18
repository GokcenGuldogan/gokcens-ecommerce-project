// src/layout/PageContent.js
export default function PageContent({ children }) {
  return (
    <main className="w-full max-w-[414px] sm:max-w-md md:max-w-lg mx-auto px-4">
      {children}
    </main>
  );
}

