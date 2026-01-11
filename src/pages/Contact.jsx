import React from "react";

function Contact() {
  return (
    <div>
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
    </div>
  );
}

export default Contact;
