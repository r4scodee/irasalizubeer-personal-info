import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const staticStars = useMemo(() => 
    Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 2 + 1,
    })), []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#010413] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {staticStars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      <div 
        className="absolute w-[200vw] h-[200vh] pointer-events-none flex items-center justify-center"
        style={{ transform: 'rotate(30deg)' }} 
      >
        <motion.div
          initial={{ x: "-220%", opacity: 0 }}
          animate={{ 
            x: "120%", 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
          }}
          onAnimationComplete={onFinish}
          className="relative w-[400px] h-[2px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-white" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_4px_#fff]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500/30 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>

      {/* 3. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
    </motion.div>
  );
};

export default SplashScreen;