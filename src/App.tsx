import Footer from "components/layouts/Footer";
import Header from "components/layouts/Header";
import Features from "components/sections/Features";
import PageIntroSection from "components/sections/PageIntroSection";
import ProductSection from "components/sections/ProductSection";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl">
        <PageIntroSection />
        <ProductSection />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
