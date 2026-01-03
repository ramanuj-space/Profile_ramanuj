import React from "react";

function Header() {
  return (
    <div className="bg-linear-to-r from-[#8a2be2] to-[#4169e1] p-6 text-white ">
      <div className=" flex justify-evenly items-center">
        <div>
          <img
            src="src/assets/1000095807.jpg"
            alt="photo"
            className="w-40 rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center my-4">My Portfolio</h1>
          <h2 className="text-4xl font-bold text-center my-4">
            Ramanuj Bairagi
          </h2>
          <p className="text-4xl font-bold text-center my-4">
            Full Stack MERN Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
