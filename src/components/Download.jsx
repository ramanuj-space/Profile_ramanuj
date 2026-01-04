import React from "react";

function Download() {
  return (
    <div>
      <div className="text-center">
        <a
          href={
            "https://docs.google.com/document/d/1_GKwjqTLK1ArYh1wprD93MKkMmzbe_mKhEweOV68NFY/edit?usp=sharing"
          }
          download="Ramanuj_Bairagi_Resume.pdf"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Download;
