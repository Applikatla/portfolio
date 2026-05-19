import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Home, User, Briefcase, Mail, Download, Command } from 'lucide-react';

export const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const actions = [
    { id: 'home', title: 'Home', icon: Home, action: () => { navigate('/'); setIsOpen(false); } },
    { id: 'about', title: 'About Me', icon: User, action: () => { navigate('/about'); setIsOpen(false); } },
    { id: 'projects', title: 'Projects', icon: Briefcase, action: () => { navigate('/projects'); setIsOpen(false); } },
    { id: 'experience', title: 'Experience', icon: Briefcase, action: () => { navigate('/experience'); setIsOpen(false); } },
    { id: 'contact', title: 'Contact', icon: Mail, action: () => { navigate('/contact'); setIsOpen(false); } },
    { id: 'resume', title: 'Download Resume', icon: Download, action: () => { 
        window.open('/files/Keshav.pdf', '_blank');
        setIsOpen(false); 
      } 
    },
  ];

  const filteredActions = actions.filter(action => 
    action.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/5">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex gap-1 ml-3 border border-white/10 rounded px-1.5 py-0.5 bg-white/5 text-xs text-gray-400">
                <span>esc</span>
              </div>
            </div>

            <div className="p-2 max-h-[60vh] overflow-y-auto">
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center text-gray-500">No results found.</div>
              ) : (
                filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className="w-full flex items-center px-4 py-3 text-left rounded-xl hover:bg-white/5 group transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-gray-400">
                      <action.icon size={16} />
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white">{action.title}</span>
                  </button>
                ))
              )}
            </div>
            
            <div className="px-4 py-3 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Command size={12} />
                <span>Command Menu active</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
