import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, Calendar, Terminal, FolderOpen, Play, Check } from "lucide-react";
import { playSuccessSound } from "../utils/sound";

export const Experience = () => {
  const [isHackerMode, setIsHackerMode] = useState(() => {
    return document.body.classList.contains("hacker-mode");
  });

  const [selectedFile, setSelectedFile] = useState("Garnet.go");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleHackerChange = (e) => {
      setIsHackerMode(e.detail);
    };
    window.addEventListener("hacker-toggle", handleHackerChange);
    return () => window.removeEventListener("hacker-toggle", handleHackerChange);
  }, []);

  const experiences = [
    {
      title: "Backend Blockchain Developer",
      company: "Artiqulus Technologies",
      companyUrl: "https://artiqulus.com/",
      period: "Present",
      projects: [
        {
          name: "Garnet – Cyber Security & PAM Platform",
          description: "Worked on Garnet, a cybersecurity and Privileged Access Management (PAM) platform focused on secure authentication, credential management, and enterprise infrastructure security. Contributed to backend development using Go, gRPC, and PostgreSQL while designing scalable microservice architectures for authentication modules such as AppRole and UserPass. Implemented secure token management, vault initialization workflows, LDAP integration concepts, and role-based access mechanisms to improve enterprise identity and access security."
        },
        {
          name: "ZK KYC – Privacy-Preserving Tokenized KYC Platform",
          description: "Built a privacy-preserving Tokenized KYC platform for the RBI Hackathon using Zero-Knowledge Proofs to enable secure and compliant digital identity verification. The project leveraged Circom and zk-SNARKs to generate cryptographic proofs. Developed the backend and proof integration using JavaScript/Node.js, implementing secure authentication workflows, tokenized identity handling, encryption mechanisms, and proof verification pipelines."
        },
        {
          name: "Dreamz IoT – Industrial IoT Blockchain Platform",
          description: "Worked on Dreamz IoT, an industrial IoT platform integrating real-time device communication with blockchain technology for secure and tamper-proof data handling. Developed backend systems in Go using WebSockets, Redis, Kafka, and microservice architecture. Integrated Cosmos SDK–based blockchain modules to store industrial data, governance parameters, and NFT-based asset records securely."
        },
        {
          name: "Elanity – Multi-Tenant Role & Permission Management System",
          description: "Developed Elanity, a multi-tenant backend platform designed to manage organizations, users, roles, and permissions in a scalable SaaS architecture. Built REST APIs and backend services using NestJS, TypeORM, PostgreSQL, and JWT authentication while implementing tenant isolation and RBAC (Role-Based Access Control)."
        }
      ]
    }
  ];

  const projectFiles = [
    {
      name: "Garnet.go",
      lang: "go",
      desc: "Cyber Security & PAM platform microservices",
      code: `package experience

import "cybersecurity"

// Garnet represents a secure Privileged Access Management (PAM) platform.
func GetGarnetDetails() Project {
    return Project{
        Category:     "Privileged Access Management (PAM)",
        Frameworks:   []string{"Go", "gRPC", "PostgreSQL"},
        Backend:      "Scalable microservice architectures",
        Modules:      "AppRole, UserPass authentication",
        Security:     "LDAP integrations & secure token vaulting",
        Integration:  "Secure credential management for infrastructure",
    }
}`
    },
    {
      name: "ZK_KYC.js",
      lang: "javascript",
      desc: "Privacy-Preserving Tokenized digital KYC system",
      code: `import { circom, zkSNARKs } from "cryptography";

// ZK KYC: Privacy-Preserving Tokenized Identity Verification.
// Developed for the prestigious RBI Hackathon.
export function verifyUserIdentity() {
  return {
    verification: "Zero-Knowledge Proof authentication",
    cryptography: "Circom & zk-SNARKs proofs",
    backend:      "JavaScript / Node.js verification microservice",
    compliance:   "Privacy-preserving, fully compliant digital ID",
    tokens:       "Tokenized identity credential generation",
  };
}`
    },
    {
      name: "DreamzIoT.go",
      lang: "go",
      desc: "Industrial IIoT ledger tracking with Cosmos SDK",
      code: `package main

import (
    "blockchain"
    "devices/communication"
)

// Dreamz IoT: Industrial IoT blockchain ledger integration.
type IndustrialIoTPlatform struct {
    Transport:      "WebSockets real-time communication",
    Middleware:     "Redis caches & Kafka message streaming queues",
    Architecture:   "High-throughput microservices using Go",
    Blockchain:     "Cosmos SDK decentralized ledger modules",
    Immutability:   "NFT-based industrial equipment records",
}`
    },
    {
      name: "Elanity.ts",
      lang: "typescript",
      desc: "Multi-tenant user and organizational RBAC platform",
      code: `import { NestJS, TypeORM } from "@nestjs/core";

// Elanity: Multi-Tenant organization identity authorization.
@Injectable()
export class OrganizationManager {
  readonly architecture = "SaaS Multi-Tenant Isolation";
  readonly database     = "PostgreSQL with TypeORM";
  readonly apiGateway   = "REST APIs using NestJS framework";
  readonly security     = "JWT session validation";
  readonly system       = "RBAC (Role-Based Access Control)";
}`
    }
  ];

  const activeFileData = projectFiles.find(f => f.name === selectedFile) || projectFiles[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFileData.code);
    setIsCopied(true);
    playSuccessSound();
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Syntax highlighting parser
  const highlightCode = (code) => {
    return code.split('\n').map((line, index) => {
      if (line.trim().startsWith('//')) {
        return <span key={index} className="text-gray-500 italic block">{line}</span>;
      }
      
      const parts = line.split(/(\s+)/);
      const highlightedParts = parts.map((part, pIdx) => {
        const trimmed = part.trim();
        
        // Go/JS/TS keywords
        if (['package', 'import', 'func', 'return', 'type', 'struct', 'class', 'export', 'readonly', 'const', 'let', 'interface', '@Injectable()'].includes(trimmed)) {
          return <span key={pIdx} className="text-pink-400 font-semibold">{part}</span>;
        }
        // String literals
        if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith('`') && trimmed.endsWith('`'))) {
          return <span key={pIdx} className="text-green-300">{part}</span>;
        }
        // Brackets & structure
        if (['{', '}', '[', ']', '(', ')', ':'].includes(trimmed)) {
          return <span key={pIdx} className="text-yellow-400 font-bold">{part}</span>;
        }
        return <span key={pIdx}>{part}</span>;
      });

      return (
        <div key={index} className="flex leading-6 font-mono select-text">
          <span className="w-8 select-none text-gray-600 text-right pr-4 text-[10px] leading-6">{index + 1}</span>
          <span className="flex-1 text-gray-200">{highlightedParts}</span>
        </div>
      );
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight">
              Work {isHackerMode ? <span className="text-primary font-mono select-none">&lt;CodeBase&gt;</span> : <span className="text-gradient-primary">Experience</span>}
            </motion.h1>
            <motion.div variants={itemVariants} className="h-1 w-24 bg-primary rounded-full mx-auto"></motion.div>
            <motion.p variants={itemVariants} className="text-gray-400 text-sm max-w-xl mx-auto font-light">
              {isHackerMode 
                ? "Browse projects organized as native, structured code files inside a local IDE."
                : "A history of my professional highlights, SaaS developments, and blockchain projects."}
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {!isHackerMode ? (
              /* --- NORMAL TIMELINE MODE --- */
              <motion.div
                key="timeline"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-white/10 to-transparent"></div>

                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative md:pl-24">
                      {/* Timeline Dot */}
                      <div className="hidden md:flex absolute left-5 top-2 w-6 h-6 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></div>
                      </div>

                      {/* Company Header */}
                      <div className="mb-8 p-6 glass-card rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-[50px]"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                          <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                              <Briefcase className="text-primary" size={24} />
                              {exp.title}
                            </h2>
                            <a 
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg text-gray-300 hover:text-primary transition-colors flex items-center gap-2 font-medium w-fit"
                            >
                              <Building2 size={20} />
                              {exp.company}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full font-semibold shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                            <Calendar size={18} />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Projects List */}
                      <div className="space-y-6">
                        {exp.projects.map((project, pIndex) => (
                          <motion.div 
                            key={pIndex}
                            whileHover={{ x: 10 }}
                            className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-primary/20 hover:bg-white/10 transition-all duration-300 relative group shadow-lg"
                          >
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                              <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">—</span> {project.name}
                            </h3>
                            <p className="text-gray-400 leading-relaxed md:pl-7">
                              {project.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* --- DEVELOPER IDE CODE MODE --- */
              <motion.div
                key="ide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-[#050507] border border-primary/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.15)] flex flex-col md:flex-row h-[560px]"
              >
                {/* File Explorer Sidebar */}
                <div className="w-full md:w-[220px] bg-[#09090c] border-r border-white/5 flex flex-col shrink-0 select-none">
                  {/* Explorer Header */}
                  <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between text-gray-400 uppercase tracking-widest text-[9px] font-mono">
                    <span className="flex items-center gap-2"><FolderOpen size={10} /> Explorer: Workspace</span>
                  </div>

                  {/* Directory list */}
                  <div className="p-2 space-y-1 flex-1 overflow-y-auto">
                    <div className="px-2 py-1.5 text-gray-500 font-mono text-[10px] tracking-wider uppercase font-bold flex items-center gap-1.5">
                      📁 Experience / projects
                    </div>
                    <div className="pl-3 space-y-0.5">
                      {projectFiles.map((file) => (
                        <button
                          key={file.name}
                          onClick={() => setSelectedFile(file.name)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono transition-all text-left ${
                            selectedFile === file.name
                              ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,229,255,0.05)] font-semibold"
                              : "text-gray-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="text-[10px] text-gray-500 select-none">&gt;</span>
                          <span className="truncate">{file.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code Window */}
                <div className="flex-grow flex flex-col overflow-hidden bg-[#030304]">
                  {/* Tab bar header */}
                  <div className="bg-[#08080a] border-b border-white/5 flex items-center justify-between px-4 py-2 shrink-0">
                    {/* Active File Tab */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#030304] border-t-2 border-primary text-xs font-mono text-primary font-semibold select-none rounded-t-md">
                      <Terminal size={10} />
                      {activeFileData.name}
                    </div>

                    {/* Editor Control Beeps */}
                    <div className="flex gap-2">
                      <button
                        onClick={handleCopy}
                        className="px-2.5 py-1 text-[10px] font-mono border border-white/10 hover:border-primary/40 hover:text-primary transition-colors text-gray-400 rounded-md flex items-center gap-1.5"
                      >
                        {isCopied ? (
                          <>
                            <Check size={10} /> Copied!
                          </>
                        ) : (
                          <>
                            <Play size={10} /> Copy Payload
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Code Body Editor viewport */}
                  <div className="p-6 flex-1 overflow-auto custom-scrollbar select-text">
                    <pre className="font-mono text-xs text-left outline-none leading-relaxed">
                      {highlightCode(activeFileData.code)}
                    </pre>
                  </div>

                  {/* Status Bar */}
                  <div className="bg-primary/5 border-t border-white/5 px-4 py-1.5 flex justify-between items-center text-[10px] font-mono text-gray-400 select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span>UTF-8</span>
                      <span className="border-l border-white/10 pl-2 text-gray-500 uppercase">{activeFileData.lang}</span>
                    </div>
                    <div>
                      <span>Keshavardhan Appikatla</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};
