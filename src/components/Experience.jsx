import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";

export const Experience = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient-primary">Experience</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="h-1 w-24 bg-primary rounded-full mx-auto"></motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
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
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
