import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Fake Signature Detection",
      description: "Uses Convolutional Neural Networks (CNN) and the VGG16 model to provide a novel method for detecting counterfeit signatures. Involves image preprocessing techniques like gaussian blur, cropping, and edge detection to compare images and real signatures.",
      tech: ["Machine Learning", "CNN", "Image Processing", "OpenCV"],
      github: "https://github.com/Applikatla/Fake-Signatures-Detection",
    },
    {
      title: "Hand Landmark Detection",
      description: "Capable of tracing hand landmarks in the presence of an object in the hand using Google’s Mediapipe library, a cross-platform machine learning framework providing pre-trained computer vision models.",
      tech: ["OpenCV", "Computer Vision", "Mediapipe"],
      github: "https://github.com/Applikatla/ml-projects/tree/main/Hand%20landmark%20detection%20program",
    },
    {
      title: "Blockchain Computing",
      description: "A blockchain-based application where users can send transactions across the world, verify them using Merkle trees, create a basic DAO, and store files on the blockchain.",
      tech: ["Blockchain", "Hardhat", "Solidity", "React", "Node", "MetaMask"],
      github: "https://github.com/Applikatla/Blockchain_computing",
    },
    {
      title: "Family Trip Tracker",
      description: "Allows users to track countries they have traveled to worldwide. Features flexibility to add multiple users to share and maintain travel records collaboratively using a robust PostgreSQL database.",
      tech: ["HTML", "CSS", "EJS", "Express", "Node", "PostgreSQL"],
      github: "https://github.com/Applikatla/Family-tracker",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient-primary">Projects</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="h-1 w-24 bg-primary rounded-full mx-auto"></motion.div>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto pt-4 text-lg">
              A collection of my work across machine learning, computer vision, blockchain, and full-stack web development.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass-card rounded-3xl p-8 flex flex-col h-full group transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(239,68,68,0.15)] relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-[50px] group-hover:bg-primary/20 transition-colors duration-500"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/5 rounded-xl text-primary">
                    <Code2 size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <img src="/images/github-original.svg" alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                      <span className="font-medium">View Code</span>
                    </a>
                    
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
