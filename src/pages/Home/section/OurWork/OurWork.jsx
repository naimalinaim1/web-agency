import ClientWorkList from "./ClientWorkList";
import OurProject from "./OurProject";

const OurWork = () => {
  return (
    <section>
      <div className="mt-40 text-white">
        {/* service description */}
        <article>
          <h2 className="text-4xl font-bold text-white">
            Our Web-Related Projects
          </h2>
          <p className="w-[70%] text-lg  mt-6">
            We recognize that the most complex projects demand that our web
            development team pay attention to every detail in the process of
            creating web-based solutions. we{"'"}ve delivered over 100 projects,
            so we know what it takes to execute a seamless and optimized
            web-based software development process.
          </p>
        </article>
      </div>
      <ClientWorkList />
      <OurProject />
    </section>
  );
};

export default OurWork;
