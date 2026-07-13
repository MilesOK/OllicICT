import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Greencard from "./components/Greencard";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Testimonials from "./components/Testimonials";
import Secondary from "./components/Secondary";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-space">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Greencard />
      <Section4 />
      <Section5 />
      <Testimonials />
      <Secondary />
      <Footer />
    </div>
  );
}
