import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const headerHeight = useTransform(scrollY, [0, 50], [96, 72])
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(2, 17, 27, 0)', 'rgba(2, 17, 27, 0.95)']
  )
  const headerBorderOpacity = useTransform(scrollY, [0, 50], [0, 0.2])
  const headerPadding = useTransform(scrollY, [0, 50], [24, 12])

  return (
    <motion.nav
      initial={mounted ? { y: -100 } : false}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        height: headerHeight,
        backgroundColor: headerBackground,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      className="fixed w-full z-50 transition-all"
    >
      <motion.div
        style={{
          borderColor: `rgba(207, 181, 59, ${headerBorderOpacity.get()})`,
        }}
        className="absolute bottom-0 left-0 right-0 h-[1px]"
      />
      
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <Link to="/" className="relative group">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-vintage tracking-wider text-antique-gold"
          >
            The Antiquery
          </motion.span>
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-[1px] bg-antique-gold"
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/expertise">Expertise</NavLink>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-rich-black transition-colors duration-300 font-serif"
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-antique-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-rich-black/95 backdrop-blur-sm border-t border-antique-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/collection" onClick={() => setIsMenuOpen(false)}>Collection</MobileNavLink>
              <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink to="/expertise" onClick={() => setIsMenuOpen(false)}>Expertise</MobileNavLink>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-rich-black transition-colors duration-300 font-serif"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="relative group font-serif text-cream hover:text-antique-gold transition-colors duration-300"
  >
    {children}
    <motion.span
      className="absolute -bottom-1 left-0 w-0 h-[1px] bg-antique-gold group-hover:w-full transition-all duration-300"
      whileHover={{ width: '100%' }}
    />
  </Link>
)

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; onClick: () => void }> = ({ 
  to, 
  children, 
  onClick 
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block font-serif text-cream hover:text-antique-gold transition-colors duration-300"
  >
    {children}
  </Link>
)

export default Navbar
