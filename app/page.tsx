import Header from "@/components/layouts/pages/sections/navigation/Header";
import Footer from "@/components/layouts/pages/sections/navigation/Footer";
import Hero from "@/components/layouts/pages/home/Hero";
import HowItWorks from "@/components/layouts/pages/home/HowItWorks";
import Pricing from "@/components/layouts/pages/home/Pricing";
import ValueProposition from "@/components/layouts/pages/home/ValueProposition";
import CTA from "@/components/layouts/pages/home/CTA";
import ResultsInAction from "@/components/layouts/pages/home/ResultInAction";
import Testimonial from "@/components/layouts/pages/home/Testimonial";
import How from "@/components/layouts/pages/home/How";


export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <How />
        <Pricing />
        <ValueProposition />
        <ResultsInAction />
        {/* <Testimonial /> */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
