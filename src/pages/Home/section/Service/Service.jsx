import SectionTitle from "../../../../components/SectionTitle";
import ServiceItems from "./ServiceItems";
import Technology from "./Technology";

const Service = () => {
  return (
    <div className="mt-24 text-[#271356]">
      {/* service description */}
      <SectionTitle
        title="What are web development services?"
        description="Web development encompasses a wide range of services, which include
          delivering websites or web apps, cybersecurity solutions, UX/UI
          design, eCommerce solutions, website architectures, QA testing,
          maintenance, consulting, and even a custom CMS."
      />
      {/* service item and technology */}
      <article className="text-white">
        <ServiceItems />
        <Technology />
      </article>
    </div>
  );
};

export default Service;
