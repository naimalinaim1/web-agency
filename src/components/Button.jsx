import PropTypes from "prop-types";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <button className="flex items-center mt-10 text-[#13072E] bg-white py-1 pl-6 rounded-full">
        <span>{children}</span>{" "}
        <span className="ml-6 mr-2 block border bg-[#13072E] text-3xl text-white p-2.5 rounded-full">
          <HiArrowSmRight />
        </span>
      </button>
    </Link>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
