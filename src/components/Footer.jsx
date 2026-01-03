import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex flex-col py-4">
        <address className="flex items-center justify-center flex-col">
          <p>Ramanuj Bairagi</p>
          <p>Pipariya,Madhya Pradesh</p>
          tel:{" "}
          <a href="tel:+917898531108" className="text-blue-400 hover:underline">
            +91 7898531108
          </a>
          <br />
          email:{" "}
          <a
            href="mailto:ramanujbairagi7@gmail.com"
            className="text-blue-400 hover:underline"
          >
            ramanujbairagi7@gmail.com
          </a>
          <br />
          linkedin:{" "}
          <a
            href="http://linkedin.com/in/ramanuj-bairagi-847530198/"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/ramanuj-bairagi
          </a>
          <br />
          github:{" "}
          <a
            href="https://github.com/ramanuj-space"
            className="text-blue-400 hover:underline"
          >
            github.com/ramanuj-space
          </a>
          <br />
          <p>Copyright &copy; 2025 Ramanuj Bairagi</p>
        </address>
        {/* <p>{"\u00A9"} 2025 Company Name</p> */}
      </div>
    </div>
  );
}

export default Footer;
