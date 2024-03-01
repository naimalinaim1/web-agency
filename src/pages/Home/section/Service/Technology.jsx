import img from "../../../../assets/service/ecommerce.jpg";

const Technology = () => {
  return (
    <div>
      {/* title */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-white">
          Which technologies will bring maximum value to your business?
        </h2>
        <p className="mt-3 text-lg w-[70%] mx-auto">
          Solve customer problems by choosing cutting-edge technologies for your
          tech stack. Take your business to the next level with the right
          solutions tailored to your own requirements.
        </p>
      </div>
      {/* technology */}
      <div className="grid grid-cols-4 gap-6 mt-12">
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4 mb-6">Frontend Development</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like React.js that
            enable us to create the surface layer of your product.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4 mb-6">Backend Development</p>
          <p className="leading-relaxed">
            We use server-side technologies like Node.js and PHP for prototyping
            and development, producing fast and scalable web apps.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4 mb-6">Full Stack Development</p>
          <p className="leading-relaxed">
            We deliver end-to-end web development, combining frontend and
            backend solutions and other technologies necessary to make your
            product a success.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4">PSD To HTML</p>
          <p className="text-xl font-bold mt-2 mb-6">Figma To HTML</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like Tailwind css and
            Bootstrap css that enable us to create the surface layer of your
            product.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4">PSD To React</p>
          <p className="text-xl font-bold mt-2 mb-6">Figma To React</p>
          <p className="leading-relaxed">
            We use the most popular frontend frameworks like React.js that
            enable us to create the surface layer of your product.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4 mb-6">UX and UI design</p>
          <p className="leading-relaxed">
            We start designing a web app with the analysis of target audience
            and planning convenient, quick and frictionless user journeys.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4 mb-6">
            Continuous support and evolution
          </p>
          <p className="leading-relaxed">
            We advance your web-based software to keep it efficient, competitive
            on the market, and compliant with all your evolving business needs.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-4 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={img} alt="" />
          <p className="text-xl font-bold mt-4 mb-6">Help desk</p>
          <p className="leading-relaxed">
            Providing L1, L2 and L3 support services, we deliver hot-fixes
            within 24 hours to prevent or resolve any issues in usage,
            technology and code that may arise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
