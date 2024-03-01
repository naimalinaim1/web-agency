import HashButton from "../../../../components/HashButton";
const data = [
  {
    id: 1,
    buttonName: "#one",
    title: "Reliability",
    description:
      "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
  },
  {
    id: 2,
    buttonName: "#two",
    title: "Transparency",
    description:
      "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. ",
  },
  {
    id: 3,
    buttonName: "#three",
    title: "Simplicity",
    description:
      "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="mt-20">
      {/* todo */}
      {/* <article className="text-white"> */}
      <article className="text-[#271356]">
        <h2 className="text-4xl font-bold">
          Reasons to choose Web Agency Inc.
        </h2>
        <p className="w-[70%] text-lg  mt-6">
          We recognize that the most complex projects demand that our web
          development team pay attention to every detail in the process of
          creating web-based solutions. we{"'"}ve delivered over 100 projects,
          so we know what it takes to execute a seamless and optimized web-based
          software development process.
        </p>
      </article>
      {/* items */}
      <div className="grid md:grid-cols-3 gap-12 text-white mt-24">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-[#271352] p-2 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md"
          >
            <HashButton>{item.buttonName}</HashButton>
            <div className="px-14 py-20">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
