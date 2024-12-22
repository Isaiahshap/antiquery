import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-110 transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80')`,
          transform: 'scale(1.1)',
        }}
      />

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/50 to-rich-black/80" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30" 
           style={{ backgroundImage: 'url("/patterns/vintage-ornament.png")', backgroundSize: '200px' }} />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-cream"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-vintage tracking-wider text-center mb-6 text-antique-gold break-words px-4">
          The Antiquery
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-serif italic tracking-wide mb-8 text-cream/90 px-4">
          Where History Finds Its Home
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-burgundy text-cream border border-antique-gold font-serif text-lg tracking-wider hover:bg-burgundy-dark transition-all duration-300"
        >
          Explore Our Collection
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center justify-center text-cream/80"
      >
        <span className="font-serif mb-2">Scroll to Discover</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
