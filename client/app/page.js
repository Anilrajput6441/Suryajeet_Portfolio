import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Marquee from "@/components/marquee";
import Myspecialization from "@/components/Myspecialization";
import WorkingProcess from "@/components/WorkingProcess";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <section id="hero">
        <Hero />
      </section>
      <Marquee />
      <section id="services">
        <Myspecialization />
      </section>
      <section id="about">
        <WorkingProcess />
      </section>
      <Brands />
      <Testimonials />
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
