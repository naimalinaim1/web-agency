import About from "./section/About/About";
import Hero from "./section/Hero/Hero";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Hero />
      <About />
    </section>
  );
};

export default Home;
