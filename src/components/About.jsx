import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Fotter } from "./Footer";

export const About = () => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-lg font-light text-white rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";

  const navigate = useNavigate();

  const handle = () => {
    navigate("/projects");
  };

  const handleClick = () => {
    navigate("/contact");
  }

  return (
    <>
      <Navbar />
      <section className="About mt-20">
        <div className="text-left py-5 px-20 font-bold text-lg">
          <p>
            Hi, I'm Keshavardhan! I'm currently pursuing Computer Science and
            Engineering at Vellore Institute of Technology, Vellore.
          </p>
          <br />
          <p>
            I have a strong foundation in programming languages like Python,
            JavaScript, and Solidity.
          </p>
          <br />
          <p>
            My proficiency includes web technologies like HTML, CSS, JavaScript,
            Node.js, React.js, Express.js, PostgreSQL, and MongoDB.
          </p>
          <br />
          <p>
            I have hands-on experience with blockchain technologies, such as
            Ethereum, Bitcoin Blockchain, Smart Contracts, Truffle, Hardhat, and
            Ganache.
          </p>
          <br />
          <p>
            I am experienced with tools like npm, Git, GitHub, Visual Studio
            Code, Postman, Hardhat, Truffle, and Ganache.
          </p>
          <br />
          <button>
            <a
              href="/files/keshavardhan_appikatla.pdf"
              download="keshavardhan_appikatla"
            >
              -- Download Resume{" "}
              <button>
                <a
                  href="https://drive.google.com/file/d/177WhlC4r2H-_ypjiKZzKoRWFIFsghu5S/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/preview-svgrepo-com.svg"
                    alt="preview"
                    className="preview"
                  />
                </a>
              </button>
            </a>
          </button>
          <br />
          <br />
          <button onClick={handle}>-- Know More About My Projects</button>
          <br />
          <br />
          <button onClick={handleClick}>-- let's connect</button>
        </div>
      </section>
      <section className="Skills">
        <div className="text-center text-3xl mb-5">Skills</div>
        <div className="px-5 flex flex-wrap gap-5 justify-center">
          <div
            className={`sm:w-[150px] flex flex-col items-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/javascript-original.svg"
              alt="JSimg"
            />
            JavaScript
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/html5-original.svg"
              alt="HTMLimg"
            />
            HTML5
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/css3-original.svg"
              alt="CSSimg"
            />
            CSS3
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/python-original.svg"
              alt="PyImg"
            />
            Python
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2 bg-gray-400"
              src="/images/solidity-original.svg"
              alt="SolImg"
            />
            Solidity
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/react-original.svg"
              alt="reactImg"
            />
            React
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/postgresql-original.svg"
              alt="reactImg"
            />
            PostgreSQL
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/nodejs-original.svg"
              alt="nodeImg"
            />
            Node
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2 bg-gray-600"
              src="/images/express-original.svg"
              alt="nodeImg"
            />
            Express
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/postman-original.svg"
              alt="postmanImg"
            />
            Postman
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/git-original.svg"
              alt="gitImg"
            />
            Git
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/github-original.svg"
              alt="reactImg"
            />
            GitHub
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2 bg-gray-600"
              src="/images/blockchain-svgrepo-com.svg"
              alt="reactImg"
            />
            Blockchain
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/ethereum-foundation-seeklogo.svg"
              alt="reactImg"
            />
            Ethereum
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/truffle-seeklogo.svg"
              alt="reactImg"
            />
            Truffle
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/hardhat-seeklogo.svg"
              alt="reactImg"
            />
            Hardhat
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/ganache-seeklogo.svg"
              alt="reactImg"
            />
            Ganache
          </div>
          <div
            className={`sm:w-[150px] flex flex-col items-center justify-center ${commonStyles}`}
          >
            <img
              className="py-5 w-1/2"
              src="/images/tailwindcss-original.svg"
              alt="tailwindImg"
            />
            Tailwind CSS
          </div>
        </div>
      </section>
      <Fotter />
    </>
  );
};
