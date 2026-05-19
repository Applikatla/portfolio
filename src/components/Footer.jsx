import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-white/5 bg-background/50 backdrop-blur-sm mt-auto relative z-10">
      <div className="flex justify-center items-center">
        <p className="text-gray-500 text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Keshavardhan Appikatla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
