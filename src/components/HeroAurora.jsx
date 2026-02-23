import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const HeroAurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Group Container */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Primary Glow (Teal/Emerald) */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px]"
        />

        {/* Secondary Glow (Soft Mint/Accent) */}
        <motion.div
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[1000px] h-[1000px] bg-accent/15 rounded-full blur-[160px]"
        />

        {/* Heartbeat Icon with Realistic Rhythm (Double Pulse) */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1, 1.25, 1],
            opacity: [0.08, 0.18, 0.13, 0.25, 0.08],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.4, 0.6]
          }}
          className="relative z-10"
        >
          <Activity 
            size={450} 
            strokeWidth={0.75} 
            className="text-primary/30 drop-shadow-[0_0_30px_rgba(var(--color-primary),0.2)]" 
          />
          
          {/* Internal Glow for the Icon center */}
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
        </motion.div>

        {/* Dynamic Glass Flares */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-full h-full opacity-20"
        >
          <div className="absolute top-1/4 right-1/4 w-px h-64 bg-linear-to-b from-transparent via-primary/40 to-transparent blur-[1px]" />
          <div className="absolute bottom-1/4 left-1/4 w-px h-64 bg-linear-to-b from-transparent via-accent/40 to-transparent blur-[1px]" />
        </motion.div>
      </motion.div>

      {/* Screen tint/overlay to soften edges */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white pointer-events-none" />
    </div>
  );
};

export default HeroAurora;
