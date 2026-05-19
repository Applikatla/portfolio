import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export const HackerTerminal = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const script = `> initializing connection to mainnet...
> fetching profile data...
> resolving ENS domain... 
> profile loaded successfully.

{
  "name": "Keshavardhan",
  "role": "Backend Blockchain Developer",
  "location": "India",
  "skills": [
    "Go", 
    "Node.js", 
    "NestJS", 
    "Solidity",
    "Kafka"
  ],
  "focus": "Building Secure Infrastructure"
}`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(script.slice(0, index));
      index++;
      if (index > script.length) {
        clearInterval(intervalId);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.1)] border border-white/10 bg-[#0a0a0a] font-mono text-sm md:text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]">
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400 flex items-center gap-2 font-sans tracking-widest uppercase">
          <Terminal size={14} /> root@keshav:~
        </div>
      </div>
      <div className="p-6 text-green-400/90 min-h-[350px] whitespace-pre-wrap leading-relaxed">
        {text}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
      </div>
    </div>
  );
};
