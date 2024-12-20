import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Projects = () => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-lg font-light text-white rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  return (
    <>
      <Navbar />
      <section className="projects">
        <div className="mt-20 text-center text-3xl mb-5">projects</div>
        <div className="text-left px-10">
          <div>
            <h1>-- Fake signature detection:</h1>
            <br />
            <p className="px-10">
              This work uses the capabilities of Convolutional Neural Networks
              (CNN) and the VGG16 model to provide a novel method for detecting
              counterfeit signatures. In light of the growing incidence of
              signature forging across multiple industries, our research tackles
              the requirement for a dependable and effective detection system.
              Our approach starts with preparing signature photos to improve
              their quality so that the analysis that follows is founded on
              clean, well-resolved data. Our method’s central component is a
              comparison between these modified images and real signatures
              utilizing CNN and VGG16, two different algorithms, with some
              preprocessing techniques like gaussian blur, cropping, edge
              detection etc Tech:Mechine learning, CNN, image procesing, openCV,
              computer vision.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/Applikatla/Fake-Signatures-Detection"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
          <br />
          <div>
            <h1>-- Hand Landmark Detection In Presence Of Object:</h1>
            <br />
            <p className="px-10">
              This work is capable of tracing hand land marks in presence of
              object in our hand, we used google’s mediapipe library which is a
              cross platform machine learning frame work that provides a variety
              of pre trained models for computer vision to achieve the desired
              result. Tech: Opencv, computer vision, mediapipe.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/Applikatla/ml-projects/tree/main/Hand%20landmark%20detection%20program"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
          <br />
          <div>
            <h1>-- Blockchain Computing:</h1>
            <br />
            <p className="px-10">
              Which is a blockchain Based Application where a user can send
              transactions accross the word and can verify using merkel tree,
              can create a basic DAO, can store there file in blockchain. Tech:
              Blockchain, hardhat, smart contracts, Ethereum, react, node,
              express, APIs, Matamask.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/Applikatla/Blockchain_computing"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
          <br />
          <div>
            <h1>-- Family trip tracker:</h1>
            <br />
            <p className="px-10">
              This website allows users to track the countries they have
              traveled to worldwide. It features flexibility to add multiple
              users, such as family members, to share and maintain travel
              records collaboratively. A PostgreSQL database is used to ensure
              robust and reliable data storage. Tech: HTML, CSS, JS, ejs,
              express, node, postgres.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/Applikatla/Family-tracker"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
