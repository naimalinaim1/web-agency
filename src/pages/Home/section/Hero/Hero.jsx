import heroImg from "../../../../assets/hero-image/hero.jpg";
import "./Hero.css";
// import { HiArrowSmRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div id="hero" className="grid grid-cols-2 items-center gap-4 rounded px-10 py-24">
      <div className="text-white">
        <button className="bg-[#8B3DFF] text-[#13072E] font-bold text-lg py-2 px-6 rounded-full">
          #flexiblesolutions
        </button>
        <div className="text-5xl space-y-3 font-semibold mt-12 mb-6">
          <h1>Flexible Solutions for</h1>
          <h2>Your Business</h2>
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda
          modi voluptatibus voluptatum debitis possimus vitae veritatis quas
          repellendus sapiente!
        </p>
        <button className="mt-10 text-[#13072E] bg-white py-3 px-6 rounded-full">
          Start free today 
          {/* <HiArrowSmRight /> */}
        </button>
      </div>
      <div>
        <img className="rounded-full" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
