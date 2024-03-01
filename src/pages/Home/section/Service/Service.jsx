import ServiceItems from "./ServiceItems";
import Technology from "./Technology";

const Service = () => {
  return (
    // todo:
    // <div className="mt-40 text-white">
    <div className="mt-40 text-[#271356]">
      {/* service description */}
      <article>
        <h2 className="text-4xl font-bold">
          What are web development services?
        </h2>
        <p className="w-[70%] text-lg  mt-6">
          Web development encompasses a wide range of services, which include
          delivering websites or web apps, cybersecurity solutions, UX/UI
          design, eCommerce solutions, website architectures, QA testing,
          maintenance, consulting, and even a custom CMS.
        </p>
      </article>
      {/* service item and technology */}
      {/* todo */}
      {/* <article className="text-white"> */}
      <article className="text-white">
        <ServiceItems />
        <Technology />
      </article>
    </div>
  );
};

export default Service;
