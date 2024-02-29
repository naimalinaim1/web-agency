import image from "../../../../assets/about/about1.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-14">
      <div>
        <img className="max-h-[600px] w-[94%]" src={image} alt="" />
      </div>
      <div>
        <p className="text-[#FF3811] text-xl font-bold">About Us</p>
        <h2 className="text-5xl leading-snug font-bold w-[65%] mt-3">We are qualified & of in this field</h2>
        <p className="mt-16">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable.{" "}
        </p>
        <p className="mt-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable.{" "}
        </p>
        <button className="btn btn-primary mt-8">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
