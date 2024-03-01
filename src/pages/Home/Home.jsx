import Hero from "./section/Hero/Hero";
import Testimonial from "./section/Testimonial/Testimonial";
import WhyChooseUs from "./section/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Hero />
      <WhyChooseUs />
      <Testimonial />
    </section>
  );
};

export default Home;
