import React from "react";
import Download from "./Download";

function Main() {
  return (
    <div>
      <div id="Home"></div>
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
            <h2 className="text-2xl mb-2">Project 1</h2>
            <p>Description of Project 1. Built with React and Node.js.</p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl mb-2">Project 2</h2>
            <p>Description of Project 2. Built with Express and MongoDB.</p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl mb-2">Project 3</h2>
            <p>
              Description of Project 3. Built with HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div id="contact">
        <h1 className="text-3xl text-center m-5">Contact Me</h1>
        <form className="bg-gray-200 p-10 m-5 rounded-lg max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-xl mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-400 rounded"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-400 rounded"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-400 rounded"
              id="message"
              name="message"
              rows="5"
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div id="resumeDownload">
        <h1 className="text-3xl text-center m-5">Download My Resume</h1>
        <Download />
      </div>
    </div>
  );
}

export default Main;
