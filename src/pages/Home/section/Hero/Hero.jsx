import heroImage from "../../../../assets/hero-image/hero.jpg";
const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:py-44 md:py-32">
      <div>
        <h1 className="text-5xl font-bold">Web Design &</h1>
        <h1 className="text-5xl font-bold mt-4">Web Development</h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
          et aperiam ab qui, aliquam sunt est ipsa alias temporibus obcaecati
          fuga officia deserunt laboriosam mollitia quibusdam aspernatur. Dicta,
          numquam.
        </p>
        <div className="mt-12">
          <button className="btn btn-outline btn-primary mr-4">About Us</button>
          <button className="btn btn-outline btn-secondary">Service</button>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
