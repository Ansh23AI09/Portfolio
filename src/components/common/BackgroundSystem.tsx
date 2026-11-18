import React from 'react'
import { motion } from 'framer-motion'
import { MotionCanvas } from './MotionCanvas'

export const BackgroundSystem: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Layer 1: Ambient Red & Obsidian Gradient Blooms */}
      <div className="absolute inset-0 bg-[#101113]">
        {/* Shifting Primary Crimson Bloom */}
        <motion.div
          animate={{
            x: ['-10%', '15%', '-5%'],
            y: ['0%', '20%', '5%'],
            scale: [1, 1.25, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] rounded-full bg-[#E53945]/15 blur-[130px]"
        />

        {/* Shifting Secondary Accent Bloom */}
        <motion.div
          animate={{
            x: ['10%', '-15%', '5%'],
            y: ['20%', '-10%', '15%'],
            scale: [1.1, 0.9, 1.1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full bg-[#FF5964]/10 blur-[140px]"
        />

        {/* Bottom Subtle Depth Bloom */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute -bottom-[15%] left-[25%] w-[700px] h-[700px] rounded-full bg-[#E53945]/10 blur-[150px]"
        />
      </div>

      {/* Layer 2: Animated Technical Grid Pattern */}
      <div
        className="absolute inset-0 animated-grid-pattern opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 95%)',
        }}
      />

      {/* Layer 3: Interactive Constellation Particles Canvas */}
      <MotionCanvas />

      {/* Foreground subtle vignette overlay for crisp text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101113]/30 via-transparent to-[#101113]/80" />
    </div>
  )
}
