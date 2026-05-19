import React, { useState } from 'react';
import Navbar from './Navbar';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './Footer';
import { motion } from "framer-motion";
import { Send, Mail, Phone, User } from "lucide-react";

const Input = ({ placeholder, name, type, value, handleChange, icon: Icon }) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon size={18} className="text-gray-400 group-focus-within:text-primary transition-colors" />
    </div>
    <input
      placeholder={placeholder}
      type={type}
      value={value || ''}
      onChange={(e) => handleChange(e, name)}
      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-500"
    />
  </div>
);

export const Contact = () => {
  const [Form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const EMAIL_JS_SERVICE_ID = 'service_m42stp8';
  const EMAIL_JS_TEMPLATE_ID = 'template_ep8xadx';
  const EMAIL_JS_PUBLIC_KEY = 'Bw4c52qwjEJBjQNWY';

  const handleChange = (e, name) => {
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!Form.name || !Form.email) {
      setLoading(false);
      toast.error('Please fill the required fields.', { position: 'top-right', theme: 'dark' });
      return;
    }

    const message = Form.message || `Connection request from ${Form.name}`;

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: Form.name,
          from_mail: Form.email,
          to_name: 'Keshavardhan Appikatla',
          to_email: 'keshavardhan525@gmail.com',
          message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent successfully!', { position: 'top-right', theme: 'dark' });
          setForm({}); 
        },
        (error) => {
          setLoading(false);
          toast.error('Failed to send message. Please try again.', { position: 'top-right', theme: 'dark' });
          console.error('EmailJS Error:', error);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-6xl mx-auto w-full z-10 flex items-center">
        <motion.div 
          className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's <span className="text-gradient-primary">Connect</span>
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <p className="text-gray-400 text-lg leading-relaxed pt-4">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <a href="mailto:keshavardhan525@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email Me</p>
                  <p className="text-white font-medium">keshavardhan525@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Call Me</p>
                  <p className="text-white font-medium">+91 9381852917</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-4">
              <a 
                href="https://github.com/Applikatla" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <img src="/images/github-original.svg" alt="GitHub" className="w-6 h-6 opacity-70 hover:opacity-100 invert" />
              </a>
              <a 
                href="https://www.linkedin.com/in/keshavardhan-appikatla-39063322a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] transition-all duration-300 hover:-translate-y-1"
              >
                <img src="/images/LinkedIn_icon.svg" alt="LinkedIn" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12">
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-[60px]"></div>
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Your Name *</label>
                    <Input
                      placeholder="John Doe"
                      name="name"
                      type="text"
                      value={Form.name}
                      handleChange={handleChange}
                      icon={User}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Your Email *</label>
                    <Input
                      placeholder="john@example.com"
                      name="email"
                      type="email"
                      value={Form.email}
                      handleChange={handleChange}
                      icon={Mail}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                  <textarea
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-500 resize-none min-h-[150px]"
                    onChange={(e) => handleChange(e, 'message')}
                    name="message"
                    placeholder="Hello Keshavardhan, I would like to talk about..."
                    value={Form.message || ''}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transform hover:-translate-y-1 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
      <ToastContainer toastStyle={{ backgroundColor: '#1f2937', color: '#fff', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }} />
    </div>
  );
};
