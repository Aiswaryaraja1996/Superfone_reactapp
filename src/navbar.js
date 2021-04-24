import "./styles.output.css";
import { useState } from "react";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const sldHidden = () => {
    if (window.innerWidth > 768) return false;
    return isNavCollapsed;
  };

  return (
    <div className="sticky top-0 md:grid md:grid-cols-3 md:justify-between md:px-20 bg-white z-50 ">
      <div className="flex cursor-pointer col-span-1">
        <img src="./head.png" />
        <div className="pt-12 md:hidden">
          <i
            class="text-gray-500 fa fa-2x fa-bars"
            onClick={handleNavCollapse}
          ></i>
        </div>
      </div>

      <div
        className={`md:col-span-2 text-gray-500" ${
          sldHidden() ? "hidden" : ""
        }`}
      >
        <ul className="block px-2 py-1 md:flex justify-between md:text-center md:items-stretch ">
          <div className="nav nav-hover ">Features</div>
          <div className="nav nav-hover">Teams</div>
          <div className="nav nav-selected">Pricing</div>
          <div className="nav nav-hover">Integrations</div>
          <div className="nav nav-hover">Blog</div>
          <div className="md:flex md:mt-10 md:mb-4 md:ml-3 ">
            <div className="cursor-pointer my-2 text-center md:my-0 px-3 py-1  rounded-full  text-white  bg-gradient-to-r from-violet to-blues">
              <p>Book A Demo</p>
            </div>
            <div className="cursor-pointer text-center md:ml-3 px-3 py-1 border-2 rounded-full border-indigo-600 text-indigo-600">
              <p>Sign In</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
