import Hero from "./section/Hero/Hero";
import Service from "./section/Service/Service";
import Testimonial from "./section/Testimonial/Testimonial";
import WhyChooseUs from "./section/WhyChooseUs/WhyChooseUs";
import OurWork from "./section/OurWork/OurWork";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="w-[92%] max-w-7xl mx-auto">
        <Service />
        <OurWork />
        <WhyChooseUs />
      </section>
      <Testimonial />
    </>
  );
};

export default Home;
