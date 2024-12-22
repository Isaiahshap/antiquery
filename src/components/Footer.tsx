import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-6 border-t border-antiqueBrown">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} The Antiquery. All rights reserved.
        </p>
        <p className="text-sm md:text-base mt-2 md:mt-0">
          Crafted with <span className="text-antiqueBrown">♥</span> by Antique Enthusiasts
        </p>
      </div>
    </footer>
  )
}

export default Footer
