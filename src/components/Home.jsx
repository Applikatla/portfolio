import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "./Footer";
export const Home = () => {
  const navigate = useNavigate();
  const [Text, setText] = useState("");
  const fullText = "Hello and Welcome!!!";
  const speed = 50; //100 ms
  const handle = () => {
    navigate('/about');
  }
  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setText(fullText.substring(1, index + 1));
        index++;
        setTimeout(typeText, speed);
      }
    }
    typeText();

  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <section className="py-5">
        <div className="flex flex-col md:flex-row justify-center py-10 font-bold text-3xl">
          <div className="md:w-1/2 text-center space-y-4 py-20">
          <h1 className="">
          <span className="text-red-600 ">
                H
              </span>
            {Text}
            </h1>
            <div>This is keshavardhan</div>
            <button className="h-10 text-xl" onClick={handle}> --- know more</button>
          </div>
          <div className="py-10 md:w-1/4 sm:w-1/2 flex justify-center">
            <img className="rounded-2xl" src="/images/keshav1.jpg" alt="img" />
          </div>
        </div>
      </section>
      <div className="foot">

      <Footer/>
      </div>
    </>
  );
};
