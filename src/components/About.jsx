import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Download, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";

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
    { name: "HTML5", icon: "/images/html5-original.svg" },
    { name: "CSS3", icon: "/images/css3-original.svg" },
    { name: "Python", icon: "/images/python-original.svg" },
    { name: "Solidity", icon: "/images/solidity-original.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "React", icon: "/images/react-original.svg" },
    { name: "PostgreSQL", icon: "/images/postgresql-original.svg" },
    { name: "Node.js", icon: "/images/nodejs-original.svg" },
    { name: "Express", icon: "/images/express-original.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "Postman", icon: "/images/postman-original.svg" },
    { name: "Git", icon: "/images/git-original.svg" },
    { name: "GitHub", icon: "/images/github-original.svg" },
    { name: "Blockchain", icon: "/images/blockchain-svgrepo-com.svg", bg: "bg-white/90 p-1.5 rounded-lg" },
    { name: "Ethereum", icon: "/images/ethereum-foundation-seeklogo.svg" },
    { name: "Truffle", icon: "/images/truffle-seeklogo.svg" },
    { name: "Hardhat", icon: "/images/hardhat-seeklogo.svg" },
    { name: "Ganache", icon: "/images/ganache-seeklogo.svg" },
    { name: "Tailwind CSS", icon: "/images/tailwindcss-original.svg" },
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
                Hi, I'm <span className="text-white font-semibold">Keshavardhan</span>! I'm currently pursuing Computer Science and Engineering at Vellore Institute of Technology, Vellore.
              </p>
              <p>
                I have a strong foundation in programming languages like Python, JavaScript, and Solidity. My proficiency includes modern web technologies like HTML, CSS, JavaScript, Node.js, React.js, Express.js, PostgreSQL, and MongoDB.
              </p>
              <p>
                I am deeply passionate about decentralized technologies, with hands-on experience in Ethereum, Bitcoin Blockchain, Smart Contracts, Truffle, Hardhat, and Ganache. I also have experience with enterprise authentication platforms, RBAC, and IoT integrations.
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
      </main>

      <Footer />
    </div>
  );
};
