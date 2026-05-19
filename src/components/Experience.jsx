import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Experience = () => {
  return (
    <>
      <Navbar />
      <section className="experience">
        <div className="mt-20 text-center text-3xl mb-5">Work Experience</div>
        <div className="text-center text-xl mb-10 text-gray-400">
          Company: <a href="https://artiqulus.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 hover:underline">Artiqulus Technologies</a> | Role: Backend Blockchain Developer
        </div>
        <div className="text-left px-10 mb-20">
          <div>
            <h1>-- Garnet – Cyber Security & PAM Platform:</h1>
            <br />
            <p className="px-10">
              Worked on <strong>Garnet</strong>, a cybersecurity and Privileged Access Management (PAM) platform focused on secure authentication, credential management, and enterprise infrastructure security. Contributed to backend development using Go, gRPC, and PostgreSQL while designing scalable microservice architectures for authentication modules such as AppRole and UserPass. Implemented secure token management, vault initialization workflows, LDAP integration concepts, and role-based access mechanisms to improve enterprise identity and access security. Also worked on performance optimization, concurrent processing, and secure communication between distributed services.
            </p>
          </div>
          <br />
          <div>
            <h1>-- ZK KYC – Privacy-Preserving Tokenized KYC Platform:</h1>
            <br />
            <p className="px-10">
              Built a privacy-preserving Tokenized KYC platform for the RBI Hackathon using Zero-Knowledge Proofs to enable secure and compliant digital identity verification. The project leveraged Circom and zk-SNARKs to generate cryptographic proofs that allowed users to verify KYC credentials without exposing sensitive personal information. Developed the backend and proof integration using JavaScript/Node.js, implementing secure authentication workflows, tokenized identity handling, encryption mechanisms, and proof verification pipelines. Integrated blockchain concepts to ensure transparency, tamper resistance, and decentralized trust while aligning with RBI security and compliance requirements. The platform was designed to reduce KYC data exposure risks, improve user privacy, and provide scalable secure verification for financial institutions.
            </p>
          </div>
          <br />
          <div>
            <h1>-- Dreamz IoT – Industrial IoT Blockchain Platform:</h1>
            <br />
            <p className="px-10">
              Worked on <strong>Dreamz IoT</strong>, an industrial IoT platform integrating real-time device communication with blockchain technology for secure and tamper-proof data handling. Developed backend systems in Go using WebSockets, Redis, Kafka, and microservice architecture to process high-volume IoT device data streams. Integrated Cosmos SDK–based blockchain modules to store industrial data, governance parameters, and NFT-based asset records securely. Implemented concurrent data batching, gRPC communication, and scalable middleware services to support industrial automation and decentralized data integrity solutions.
            </p>
          </div>
          <br />
          <div>
            <h1>-- Elanity – Multi-Tenant Role & Permission Management System:</h1>
            <br />
            <p className="px-10">
              Developed <strong>Elanity</strong>, a multi-tenant backend platform designed to manage organizations, users, roles, and permissions in a scalable SaaS architecture. Built REST APIs and backend services using NestJS, TypeORM, PostgreSQL, and JWT authentication while implementing tenant isolation and RBAC (Role-Based Access Control). Designed normalized database schemas for tenants, user-role mapping, and permission hierarchies to support secure enterprise-grade authorization. Focused on modular backend architecture, authentication flows, and maintainable service design for large-scale multi-tenant applications.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
