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
      <p className="text-5xl text-white font-semibold mb-12">
        Reasons to choose Web Agency Inc.
      </p>
      {/* items */}
      <div className="grid md:grid-cols-3 gap-12 text-white">
        {data.map((item) => (
          <div key={item.id} className="bg-[#271352] p-2 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
            <HashButton>{item.buttonName}</HashButton>
            <div className="px-14 py-20">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{item.title}</h3>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
