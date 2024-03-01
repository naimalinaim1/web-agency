import img from "../../../../assets/testimonial/1.jpg";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-20">
      {/* <p className="text-5xl text-white font-semibold mb-12"> */}
      <p className="text-5xl text-[#271356] font-semibold mb-12">
        Why others choose us?
      </p>
      {/* items */}
      <div className="grid md:grid-cols-3 gap-12 text-white">
        {Array(3)
          .fill(null)
          .map((item, index) => (
            <div
              key={index}
              className="bg-[#271352] px-14 py-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Awesome tool!
              </h3>
              <p className="leading-relaxed">
                Lorem ipsum praesent ac massa at ligula reet est iaculis.
                Vivamus est mist aliquet elit ac nisl.
              </p>
              <ul className="text-yellow-500 flex gap-2 text-xl mt-4">
                <li>
                  <HiStar />
                </li>
                <li>
                  <HiStar />
                </li>
                <li>
                  <HiStar />
                </li>
                <li>
                  <HiStar />
                </li>
                <li>
                  <HiStar />
                </li>
              </ul>
              <div className="flex items-center gap-2 mt-16">
                <img className="w-16 h-16 rounded-full" src={img} alt="" />
                <div>
                  <p>Olivia Wilson</p>
                  <p className="text-[#B3AAFF]">Founder of Borcelle</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonial;
