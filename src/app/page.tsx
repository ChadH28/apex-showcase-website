import Amenities from "@/components/Amenities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PropertyGrid from "@/components/PropertyGrid";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="relative overflow-hidden bg-[#F7F5F0] text-slate-950 pt-[5.5rem]">
        <Hero />
        <PropertyGrid />
        <Amenities />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
