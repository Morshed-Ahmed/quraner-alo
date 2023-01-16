import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-stone-900 text-white">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl font-second"
        >
          QURANER ALO
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link to={"/"}>Item 1</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
