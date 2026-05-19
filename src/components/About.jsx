import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Download, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import { HackerTerminal } from "./HackerTerminal";

export const About = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/projects");
  };

  const handleClick = () => {
    navigate("/contact");
  };

  const skills = [
    { name: "JavaScript", icon: "/images/javascript-original.svg" },
    { name: "Go", icon: "/images/Go-Logo_Aqua.svg", bg: "bg-white/90 p-1 rounded-lg" },
    { name: "Python", icon: "/images/python-original.svg" },
    { name: "React", icon: "/images/react-original.svg" },
    { name: "Node.js", icon: "/images/nodejs-original.svg" },
    { name: "NestJS", icon: "/images/nestjs.svg" },
    { name: "Express", icon: "/images/express-original.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "PostgreSQL", icon: "/images/postgresql-original.svg" },
    { name: "Kafka", icon: "/images/kafka.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "Redis", icon: "/images/redis.svg" },
    { name: "Solidity", icon: "/images/solidity-original.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "Blockchain", icon: "/images/blockchain-svgrepo-com.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "Ethereum", icon: "/images/ethereum-foundation-seeklogo.svg" },
    { name: "Truffle", icon: "/images/truffle-seeklogo.svg" },
    { name: "Hardhat", icon: "/images/hardhat-seeklogo.svg" },
    { name: "Tailwind CSS", icon: "/images/tailwindcss-original.svg" },
    { name: "Git", icon: "/images/git-original.svg" },
    { name: "GitHub", icon: "/images/github-original.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-6 max-w-7xl mx-auto w-full z-10">
        <motion.div 
          className="flex flex-col lg:flex-row gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* About Me Text Section */}
          <motion.div variants={itemVariants} className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient-primary">Me</span>
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                Hi, I'm <span className="text-white font-semibold">Keshavardhan</span>! I completed my B.Tech in Computer Science and Engineering at Vellore Institute of Technology, Vellore (2021 - 2025).
              </p>
              <p>
                I am currently working as a <span className="text-white font-semibold">Backend Blockchain Developer</span> at Artiqulus Technologies, where I build secure authentication platforms and decentralized applications using Go, gRPC, Node.js, and various blockchain frameworks.
              </p>
              <p>
                I have a strong foundation in modern backend engineering and distributed systems. My proficiency includes Go, Node.js, NestJS, Python, PostgreSQL, Redis, and Kafka. I am deeply passionate about decentralized technologies, with hands-on experience in Ethereum, Cosmos SDK, Hyperledger Fabric, Smart Contracts, and Zero-Knowledge Proofs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex gap-2">
                <a 
                  href="/files/Keshav.pdf" 
                  download="Keshav_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Download size={18} />
                  Resume
                </a>
                <a 
                  href="https://drive.google.com/file/d/10BHUrenDbNBr8VPx3kZv3t8jMrAjE0Ps/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-white/5 text-gray-300 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300"
                  title="View Resume in Drive"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <button 
                onClick={handleClick}
                className="flex items-center gap-2 px-5 py-3 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle size={18} />
                Let's Connect
              </button>
              <button 
                onClick={handle}
                className="flex items-center gap-2 px-5 py-3 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Projects
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Technical <span className="text-gradient-primary">Skills</span>
            </h2>
            <motion.div 
              className="grid grid-cols-3 sm:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-3 group transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  <div className={`w-10 h-10 flex items-center justify-center ${skill.bg || ''}`}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hacker Terminal Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-32 w-full"
        >
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              System <span className="text-gradient-primary">Initialization</span>
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto"></div>
            <p className="text-gray-400">Booting up the decentralized backend...</p>
          </div>
          <HackerTerminal />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
