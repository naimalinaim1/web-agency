import PropTypes from "prop-types";

const SectionTitle = ({ title, description }) => {
  return (
    <article className="text-[#271356] mt-40">
      <p className="text-4xl font-bold">{title}</p>
      <p className="w-[92%] md:w-[85%] lg:w-[70%] text-lg mt-6">
        {description}
      </p>
    </article>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionTitle;
