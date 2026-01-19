import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Firm from "@/components/Firm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bergweiss-navy">
      <Header />
      <Hero />
      <Services />
      <Sectors />
      <Firm />
      <Contact />
      <Footer />
    </main>
  );
}
