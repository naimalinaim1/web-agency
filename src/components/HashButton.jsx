import PropTypes from "prop-types";

const HashButton = ({ children }) => {
  return (
    <button className="bg-[#8B3DFF] text-[#13072E] font-bold text-lg py-2 px-6 rounded-full">
      {children}
    </button>
  );
};

HashButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HashButton;
