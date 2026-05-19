import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Home = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate('/about');
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 z-10">
        <motion.div 
          className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-gray-400 tracking-wide">
                Hello and Welcome!
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold font-sans">
                I'm <span className="text-gradient-primary">Keshavardhan</span>
              </h1>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-lg leading-relaxed">
              A passionate Backend & Blockchain Developer exploring the realms of web technologies, secure infrastructure, and scalable systems.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-4">
              <button 
                onClick={handle}
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              >
                Know More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 flex justify-center items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img 
                className="relative rounded-3xl w-64 md:w-80 object-cover shadow-2xl transform transition duration-500 hover:scale-[1.02]" 
                src="/images/keshav1.jpg" 
                alt="Keshavardhan Appikatla" 
              />
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
