import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-gray-800 text-white">
      <ul className="flex justify-around items-end p-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="skills">Skills</a>
        </li>
        <li>
          <a href="Project">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
