import heroImg from "../../../../assets/hero-image/hero.jpg";
import Button from "../../../../components/Button";
import HashButton from "../../../../components/HashButton";

const Hero = () => {
  return (
    <div id="gradient-color">
      <div className="grid md:grid-cols-12 items-center gap-y-10 md:gap-4 rounded px-8 py-24">
        <div className="text-white col-span-7">
          <HashButton>#flexiblesolutions</HashButton>
          <div className="text-5xl space-y-3 font-semibold mt-12 mb-6">
            <h1>Achieve your</h1>
            <h2>business goals with</h2>
            <h2>web development solutions</h2>
          </div>
          <p className="text-lg">
            We design and build industry-leading web-based products that bring
            value to your customers, delivered with compelling UX.
          </p>
          <Button to="/">Start free Today</Button>
        </div>
        <div className="col-span-5">
          <img className="h-[430px] rounded-full" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
