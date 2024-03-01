import Hero from "./section/Hero/Hero";
import Service from "./section/Service/Service";
import Testimonial from "./section/Testimonial/Testimonial";
import WhyChooseUs from "./section/WhyChooseUs/WhyChooseUs";
import OurWork from "./section/OurWork/OurWork";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Hero />
      <Service />
      <OurWork />
      <WhyChooseUs />
      <Testimonial />
    </section>
  );
};

export default Home;
