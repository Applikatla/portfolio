import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Blocks, Server, ShieldCheck } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { ParallaxText } from "./ParallaxText";

const TITLES = [
  "Backend Developer",
  "Blockchain Engineer",
  "Problem Solver",
  "Tech Enthusiast"
];

const TechMarquee = () => {
  const techs = [
    "Go", "React", "Node.js", "Solidity", "PostgreSQL", "Kafka", "Redis", "gRPC", "Docker", "NestJS", "Hyperledger", "Cosmos SDK"
  ];

  return (
    <div className="w-full overflow-hidden py-16 relative bg-[#050505] border-y border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20">
      {/* Gradient masks for smooth fade on edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 md:gap-24 px-6 md:px-12 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...techs, ...techs, ...techs, ...techs].map((tech, idx) => (
            <span key={idx} className="text-4xl md:text-6xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] tracking-wider uppercase hover:text-white/80 transition-colors duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleProjects = () => navigate('/projects');
  const handleContact = () => navigate('/contact');

  // Floating animation variants for background blobs
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      x: [0, 50, 0, -50, 0],
      y: [0, 50, -50, 0],
      transition: { duration: 15, repeat: Infinity, ease: "linear" }
    }
  };

  const blobVariants2 = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, -90, 0],
      x: [0, -60, 0, 60, 0],
      y: [0, -40, 40, 0],
      transition: { duration: 18, repeat: Infinity, ease: "linear" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // Floating Icons data
  const floatingIcons = [
    { src: "/images/Go-Logo_Aqua.svg", alt: "Go", size: "w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10", delay: 0, position: "-top-5 -left-5" },
    { src: "/images/solidity-original.svg", alt: "Solidity", size: "w-14 h-14 bg-white/80 rounded-full p-2 border border-white/20", delay: 1, position: "top-20 -right-10" },
    { src: "/images/react-original.svg", alt: "React", size: "w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10", delay: 2, position: "bottom-10 -left-10" },
    { src: "/images/nodejs-original.svg", alt: "Node.js", size: "w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10", delay: 1.5, position: "-bottom-5 right-5" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#050505]">
      {/* Immersive Animated Background Layers */}
      <motion.div
        variants={blobVariants} animate="animate"
        className="fixed top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[120px] z-0 pointer-events-none"
      />
      <motion.div
        variants={blobVariants2} animate="animate"
        className="fixed bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full filter blur-[150px] z-0 pointer-events-none"
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-0 pointer-events-none"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 z-10 w-full">
        <motion.div
          className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Terminal size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Welcome to my universe</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 w-full">
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.1] tracking-tight text-white">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-500">
                  Keshavardhan
                </span>
              </h1>

              <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start overflow-hidden pt-2">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={titleIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400"
                  >
                    {TITLES[titleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              I build scalable backends, secure blockchain infrastructure, and immersive web experiences. Let's engineer the future together.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full justify-center lg:justify-start">
              <Magnetic>
                <button
                  onClick={handleProjects}
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-2xl"></div>
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>

              <Magnetic>
                <button
                  onClick={handleContact}
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
                >
                  Contact Me
                </button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Interactive 3D Profile Image */}
          <motion.div
            variants={itemVariants}
            className="lg:w-[45%] flex justify-center items-center relative perspective-[1000px] mt-10 lg:mt-0"
          >
            {/* Center Image Container */}
            <motion.div
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Complex Glowing Borders */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-orange-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-40 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 bg-background rounded-[2.5rem] z-10"></div>

              <div className="absolute inset-0 rounded-[2.5rem] p-[2px] bg-gradient-to-tr from-primary via-white/50 to-blue-600 z-20 overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover rounded-[2.5rem] scale-[1.02] hover:scale-110 transition-transform duration-700"
                  src="/images/keshav1.jpg"
                  alt="Keshavardhan Appikatla"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Tech Stack Orbits */}
              {floatingIcons.map((icon, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute ${icon.position} ${icon.size} z-30 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 5 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: icon.delay
                  }}
                >
                  <img src={icon.src} alt={icon.alt} className="w-4/5 h-4/5 object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Infinite Scrolling Tech Marquee */}
      <TechMarquee />

      {/* Core Capabilities Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full z-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen z-[-1]">
          <ParallaxText baseVelocity={-200}>ARCHITECTURE</ParallaxText>
        </div>

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Core <span className="text-gradient-primary">Capabilities</span>
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto pt-4 text-lg">
            Specialized in building robust backend architectures and next-generation decentralized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Blocks size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain Engineering</h3>
            <p className="text-gray-400 leading-relaxed">
              Developing smart contracts, decentralized applications (dApps), and integrating enterprise blockchain frameworks like Cosmos SDK and Hyperledger Fabric.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <Server size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Backend Architecture</h3>
            <p className="text-gray-400 leading-relaxed">
              Designing high-performance, scalable microservices using Go, Node.js, and NestJS, with robust communication layers like gRPC and Kafka.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure Infrastructure</h3>
            <p className="text-gray-400 leading-relaxed">
              Implementing Zero-Knowledge Proofs, RBAC, Privileged Access Management (PAM), and secure token handling for enterprise identity systems.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-16 w-full justify-center">
          <Magnetic>
            <button
              onClick={handleProjects}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-2xl"></div>
              <span className="relative z-10">Explore My Work</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>

          <Magnetic>
            <button
              onClick={handleContact}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </button>
          </Magnetic>
        </div>
      </section>

      <Footer />
    </div>
  );
};
