import website from "../../../../assets/service/website.jpg";
import webPortal from "../../../../assets/service/web-portal.jpg";
import eCommerce from "../../../../assets/service/ecommerce.jpg";

const ServiceItems = () => {
  return (
    <div>
      {/* title */}
      <div className="text-center mt-16">
        {/* todo */}
        {/* <h2 className="text-3xl font-bold text-white"> */}
        <h2 className="text-3xl font-bold text-[#271356]">
          What Web Solution Do You Need?
        </h2>
        {/* todo */}
        {/* <p className="mt-3 text-lg w-[70%] mx-auto"> */}
        <p className="mt-3 text-lg w-[70%] mx-auto text-[#271356]">
          Our battle-tested developers specialize in a wide range of web
          development services. Here are some of the solutions that we can
          deliver for you.
        </p>
      </div>
      {/* service items */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="bg-[#271352] text-center px-14 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={website} alt="" />
          <p className="text-2xl font-bold mt-4 mb-6">Websites</p>
          <p className="leading-relaxed text-lg">
            Since 2024, web agency works with web portals for different
            audiences: customers, business partners, ecommerce users, patients,
            vendors, interest-based communities. A well-designed website is a
            powerful marketing and communication tool that helps build trust and
            generate leads.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-14 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={webPortal} alt="" />
          <p className="text-2xl font-bold mt-4 mb-6">Web Portal</p>
          <p className="leading-relaxed text-lg">
            Since 2024, web agency works with web portals for different
            audiences: customers, business partners, ecommerce users, patients,
            vendors, interest-based communities. A well-designed website is a
            powerful marketing and communication tool that helps build trust and
            generate leads.
          </p>
        </div>
        <div className="bg-[#271352] text-center px-14 py-12 pb-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
          <img className="rounded-full w-20 mx-auto" src={eCommerce} alt="" />
          <p className="text-2xl font-bold mt-4 mb-6">E-commerce</p>
          <p className="leading-relaxed text-lg">
            Since 2024, web agency works with web portals for different
            audiences: customers, business partners, ecommerce users, patients,
            vendors, interest-based communities. A well-designed website is a
            powerful marketing and communication tool that helps build trust and
            generate leads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
