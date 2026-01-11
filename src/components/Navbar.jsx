import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-gray-800 text-white">
      <ul className="flex justify-around items-end p-4">
        <li>
          <NavLink
            to={"/"}
            className={() =>
              `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            activeClassName="active"
          >
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/projects"}
            className={() =>
              `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            activeClassName="active"
          >
            All Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Contacts"}
            className={() =>
              `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Gallary"}
            className={() =>
              `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            activeClassName="active"
          >
            Gallary
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
