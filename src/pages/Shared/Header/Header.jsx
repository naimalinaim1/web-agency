import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink";

const Header = () => {
  const headerLink = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <Link>Service</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
    </>
  );

  return (
    <header className="w-[94%] max-w-7xl mx-auto navbar py-4 px-0">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {headerLink}
            </ul>
          </div>
          <Link to="/">
            <p className="text-3xl font-bold">Web Agency</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 text-lg font-medium">{headerLink}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-[#2b165c] text-white py-3 px-6 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
