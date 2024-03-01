import heroImg from "../../../../assets/hero-image/hero.jpg";
import Button from "../../../../components/Button";
import HashButton from "../../../../components/HashButton";

const Hero = () => {
  return (
    <div id="gradient-color">
      <div className="grid md:grid-cols-2 items-center gap-y-10 md:gap-4 rounded px-10 py-24">
        <div className="text-white">
          <HashButton>#flexiblesolutions</HashButton>
          <div className="text-5xl space-y-3 font-semibold mt-12 mb-6">
            <h1>Flexible Solutions for</h1>
            <h2>Your Business</h2>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda
            modi voluptatibus voluptatum debitis possimus vitae veritatis quas
            repellendus sapiente!
          </p>
          <Button to="/">Start free Today</Button>
        </div>
        <div>
          <img className="rounded-full" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
