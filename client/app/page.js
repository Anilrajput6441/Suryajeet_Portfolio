import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/marquee";
import Myspecialization from "@/components/Myspecialization";
import WorkingProcess from "@/components/WorkingProcess";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Myspecialization />
      <WorkingProcess />
      <Brands />
      <Footer />
    </div>
  );
}
