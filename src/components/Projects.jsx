import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, X } from "lucide-react";

const ProjectCard = ({ project, variants, activeProject, setActiveProject }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={variants}
      whileHover={{ y: -8 }}
      className="glass-card rounded-[2rem] p-8 flex flex-col h-full group transition-all duration-300 relative overflow-hidden border border-white/[0.05] hover:border-white/[0.1] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Spotlight Border (Laser Tracer) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] z-20"
        style={{
          padding: "1px",
          background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.4), transparent 80%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Holographic Glossy Glass Shimmer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.05), rgba(255, 255, 255, 0.03), transparent 75%)`,
        }}
      />

      {/* Background Soft Glow (Ambient) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-[50px] group-hover:bg-primary/10 transition-colors duration-500"></div>

      <div className="flex items-center gap-4 mb-4 relative z-20">
        <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/10 group-hover:border-primary/30 transition-colors">
          <Code2 size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
          {project.title}
        </h2>
      </div>

      <div className="text-gray-400 mb-6 flex-grow leading-relaxed relative z-20 text-base font-light">
        {project.description.length > 150 
          ? `${project.description.slice(0, 150)}...` 
          : project.description}
        {project.description.length > 150 && (
          <button 
            onClick={() => setActiveProject(project)}
            className="text-primary hover:text-white ml-2 font-medium transition-colors"
          >
            Read More
          </button>
        )}
      </div>

      <div className="space-y-6 relative z-20">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-mono rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <img src="/images/github-original.svg" alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100 invert" />
            <span className="font-medium text-sm">View Code</span>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white border border-white/10 hover:border-primary transition-all duration-300"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const projects = [
    {
      title: "Blockchain Computing",
      description: "Developed a Blockchain-based Payment Gateway on the Ethereum network enabling secure cryptocurrency transactions, wallet authentication, and Merkle proof verification for blockchain transaction integrity. Built the frontend using React and integrated MetaMask for seamless wallet connection and transaction execution, while leveraging ethers.js for smart contract interaction. Designed and deployed Solidity smart contracts using Hardhat and Alchemy, implementing secure ETH payment handling and on-chain Merkle root verification. The backend was developed with Node.js and Express.js to fetch blockchain transactions, construct Merkle trees, generate cryptographic proofs, and expose APIs for proof validation. The project demonstrated strong expertise in Web3 development, smart contract engineering, blockchain verification mechanisms, and decentralized application (dApp) architecture.",
      tech: ["Blockchain", "Hardhat", "Solidity", "React", "Node", "MetaMask"],
      github: "https://github.com/Applikatla/Blockchain_computing",
    },
    {
      title: "Cosmonic Grpc",
      description: "Designed and developed a modular gRPC-based backend architecture named Cosmonic, inspired by the structured design principles of the Cosmos SDK. The project focused on creating a scalable and maintainable microservice-oriented folder structure with clear separation of concerns across handlers, services, keepers, modules, protobuf definitions, and transaction/query layers. Implemented high-performance communication using gRPC and Protocol Buffers, enabling efficient inter-service interaction and extensible module development. The architecture emphasized clean code organization, dependency isolation, and production-ready backend patterns to support blockchain-style transaction processing, authentication workflows, and distributed system integration.",
      tech: ["GO", "GRPC"],
      github: "https://github.com/Applikatla/cosmonic-grpc",
    },
    {
      title: "Cosmos SDK Blockchain Connector",
      description: "Developed a Blockchain Connector service using Cosmos SDK and the custom Cosmonic gRPC architecture to enable seamless communication between backend microservices and blockchain networks. The project was designed with a modular, Cosmos SDK-inspired folder structure that separated handlers, services, keepers, protobuf definitions, transaction logic, and query layers for scalability and maintainability. Implemented gRPC-based communication for broadcasting transactions, querying blockchain state, managing accounts, and handling authentication flows efficiently across distributed services. The connector supported dynamic transaction execution, secure key management, and extensible module integration, providing a robust middleware layer for enterprise-grade blockchain applications and decentralized systems.",
      tech: ["GO", "GRPC", "Cosmos SDK", "Blockchain"],
      github: "https://github.com/Applikatla/blockchain_connector",
    },
    {
      title: "Vesting Tokens Smartcontract",
      description: "Developed a decentralized Vesting Smart Contract using Solidity to securely manage time-based release of cryptocurrency funds for beneficiaries. The contract implemented linear vesting logic, allowing tokens or ETH to be gradually unlocked over a predefined duration instead of being released all at once. Built features including beneficiary-based access control, automated vested amount calculation, secure fund release mechanisms, balance tracking, and event emission for transparency and auditability. The project focused on secure smart contract development practices, state management, and blockchain-based financial automation, demonstrating strong understanding of Ethereum, Solidity, and decentralized finance (DeFi) concepts.",
      tech: ["Blockchain", "Solidity", "Ethereum"],
      github: "https://github.com/Applikatla/vesting-appliction",
    },
    {
      title: "User Auth With Hyperledger Fabric",
      description: "Developed a decentralized User Authentication and Identity Management system using the Hyperledger Fabric blockchain framework and Fabric CA for secure user registration, enrollment, and authentication. Implemented a complete authentication workflow using Node.js, Express.js, and the Hyperledger Fabric SDK, enabling secure identity issuance, wallet-based credential management, and blockchain-backed access verification. The project included integration with Fabric CA for user enrollment, X.509 certificate generation, wallet identity storage, and smart contract interaction through secure gateway connections. Designed REST APIs for user registration and login, allowing authenticated users to interact with blockchain assets while ensuring tamper-resistant identity validation and enterprise-grade security.",
      tech: ["Blockchain", "Hyperledger Fabric", "Fabric CA", "Node", "Express"],
      github: "https://github.com/Applikatla/user_auth_by_hyperledger",
    },
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
              <ProjectCard
                key={index}
                project={project}
                variants={itemVariants}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
              />
            ))}
          </motion.div>
        </motion.div>
      </main>

      <Footer />      {/* Project Modal */}
      {createPortal(
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0a0a0c]/95 border border-white/[0.08] rounded-[2rem] p-8 md:p-10 shadow-[0_0_80px_rgba(0,0,0,0.9)] custom-scrollbar"
              >
                {/* Premium Glow Effect inside Modal */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none"></div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-primary/20 hover:text-white border border-white/10 transition-colors z-20"
                >
                  <X size={18} />
                </motion.button>

                <div className="relative z-10 space-y-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 border-b border-white/[0.08] pb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 shadow-[0_0_20px_rgba(239,68,68,0.15)] flex-shrink-0">
                      <Code2 size={28} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold font-mono">Project Case Study</span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                        {activeProject.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 max-h-[35vh] overflow-y-auto pr-2 custom-scrollbar">
                    <p className="whitespace-pre-line text-gray-300/95 font-light">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold font-mono">Engineered With</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/5 text-gray-300 text-sm font-medium rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <img src="/images/github-original.svg" alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100 invert transition-opacity" />
                      <span className="font-semibold text-base">Explore Repository</span>
                    </a>

                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-extrabold rounded-2xl hover:bg-primary/90 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300"
                    >
                      <span>Launch Project</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
};
