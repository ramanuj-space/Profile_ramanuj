import React from "react";
import Download from "./Download";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <div id="Home">
        <div className="bg-linear-to-r from-[#8a2be2] to-[#4169e1] p-6 text-white ">
          <div className=" flex justify-evenly items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/35096936/pexels-photo-35096936.jpeg"
                alt="photo"
                className="w-40 rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-center my-4">
                My Portfolio
              </h1>
              <h2 className="text-4xl font-bold text-center my-4">
                Ramanuj Bairagi
              </h2>
              <p className="text-4xl font-bold text-center my-4">
                Full Stack MERN Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className=" bg-gray-600 text-white text-xl text-center p-10 m-5 rounded-lg"
      >
        <h1>About Me</h1>
        <p>
          Hello! I'm [Ramanuj Bairagi], a [Full Stack MERN Developer] with a
          passion for [building reusable components]. I specialize in [React
          ,Java Script , HTML , CSS, Express, MongoBD] and love to create
          innovative solutions to complex problems.
        </p>
      </div>
      <div id="skills">
        <h1 className="text-3xl text-center m-5">Skills</h1>
        <ul className="grid grid-cols-3 gap-4 text-center text-xl bg-gray-200 p-10 m-5 rounded-lg">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>RESTful APIs</li>
        </ul>
      </div>
      <div id="Project">
        <h1 className="text-3xl text-center m-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 m-5">
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl mb-2">
              <NavLink to={"/project01"} activeClassName="active">
                Password Generator
              </NavLink>
            </h2>
            <p>
              Description of Project 1. Built with React and Node.js, This
              Generate Passwords with various options. like numbers, symbols,
              etc. and Length as you want.
            </p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl mb-2">
              <NavLink to={"/project02"} activeClassName="active">
                Background Changer
              </NavLink>
            </h2>
            <p>Description of Project 2. Built with Express and MongoDB.</p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl mb-2">
              <NavLink to={"/project03"} activeClassName="active">
                Currency Converter
              </NavLink>
            </h2>
            <p>
              Description of Project 3. Built with HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://drive.google.com/file/d/14XSEuHMfFrzibyhzBW6UC9hnKOD1fx5h/view?usp=sharing"
          alt="image"
        />
      </div>
      <div id="resumeDownload">
        <h1 className="text-3xl text-center m-5">Download My Resume</h1>
        <Download />
      </div>
    </div>
  );
}

export default Main;
