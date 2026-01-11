import React from "react";

function Download() {
  return (
    <div>
      <div className="text-center">
        <a
          href={"./public/ramanuj_resume.pdf"}
          download="ramanuj_resume.pdf"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Download;
