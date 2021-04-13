import "./styles.output.css";

function Navbar() {
  return (
    <div className="sticky top-0 grid grid-cols-3 justify-between px-20 bg-white z-50">
      <div className="cursor-pointer col-span-1">
        <img src="./head.png" />
      </div>
      <div className="col-span-2 text-gray-500">
        <ul className="flex justify-between text-center items-stretch">
          <div className="nav nav-hover">Features</div>
          <div className="nav nav-hover">Teams</div>
          <div className="nav nav-selected">Pricing</div>
          <div className="nav nav-hover">Integrations</div>
          <div className="nav nav-hover">Blog</div>
          <div className="flex mt-10 mb-4 ml-3 ">
            <div className="cursor-pointer px-3 py-1  rounded-full  text-white  bg-gradient-to-r from-violet to-blues">
              <p>Book A Demo</p>
            </div>
            <div className="cursor-pointer ml-3 px-3 py-1 border-2 rounded-full border-indigo-600 text-indigo-600">
              <p>Sign In</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
