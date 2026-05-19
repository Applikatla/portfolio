import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

export const GithubGraph = () => {
  const explicitTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full mt-32 bg-[#0d1117] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(38,166,65,0.05)] hover:border-green-500/30 hover:shadow-[0_0_40px_rgba(38,166,65,0.1)] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            GitHub <span className="text-green-500">Contributions</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">Live data from github.com/Applikatla</p>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center">
        <div className="min-w-[800px] flex justify-center">
          <GitHubCalendar 
            username="Applikatla"
            theme={explicitTheme}
            colorScheme="dark"
            blockSize={13}
            blockRadius={3}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </div>
    </motion.div>
  );
};
