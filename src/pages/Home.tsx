import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const categories = [
  {
    title: "Victorian Era",
    description: "Elegant furnishings from the 19th century",
    image: "https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
  },
  {
    title: "Art Deco",
    description: "Bold geometric designs of the 1920s & 30s",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
  },
  {
    title: "French Provincial",
    description: "Timeless charm of 18th century France",
    image: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
  }
]

const testimonials = [
  {
    text: "The Antiquery's expertise in authentication gave me complete confidence in my purchase. Their restoration work is simply magnificent.",
    author: "Elizabeth Blackwood",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "As a collector of fine Victorian furniture, I've never encountered a more knowledgeable and passionate team. Their attention to detail is unmatched.",
    author: "James Montgomery",
    location: "Edinburgh, Scotland",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "The Antiquery helped me source a rare Art Deco chandelier I'd been searching for years. Their global network and expertise are truly remarkable.",
    author: "Marie Laurent",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "Their restoration of my family's 18th-century writing desk was nothing short of miraculous. They preserved its history while ensuring its functionality.",
    author: "Richard Pembroke",
    location: "Bath, UK",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "Every visit to The Antiquery is an education in history and craftsmanship. Their curated collection is simply breathtaking.",
    author: "Isabella Rossi",
    location: "Florence, Italy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "The team's dedication to authenticity and their deep knowledge of provenance make them the only choice for serious collectors.",
    author: "Henrik Nielsen",
    location: "Copenhagen, Denmark",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
]

const Home: React.FC = () => {
  return (
    <div className="bg-rich-black min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-vintage text-antique-gold">
              A Legacy of Elegance
            </h2>
            <div className="space-y-6 text-cream/90 font-serif text-lg leading-relaxed">
              <p>
                Step into The Antiquery, where each piece tells a story of craftsmanship, 
                history, and timeless beauty. Our carefully curated collection represents 
                the finest examples of artistry from epochs past.
              </p>
              <p>
                From rare Victorian furnishings to Art Deco masterpieces, every item in 
                our gallery has been selected for its exceptional quality, provenance, 
                and historical significance.
              </p>
            </div>
            <button className="px-6 py-3 border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-all duration-300 font-serif tracking-wider">
              View Our Collection
            </button>
          </div>
          
          {/* Right Column - Featured Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
                alt="Featured Antique"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-burgundy text-cream p-6 max-w-xs">
              <p className="font-vintage text-2xl mb-2">Featured Collection</p>
              <p className="font-serif">18th Century French Provincial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-vintage text-antique-gold text-center mb-16">
          Curated Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <h3 className="font-vintage text-2xl mb-2">{category.title}</h3>
                <p className="font-serif text-cream/80">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-rich-black/50 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-vintage text-antique-gold">
                Expert Authentication & Restoration
              </h2>
              <div className="space-y-6 text-cream/90 font-serif text-lg leading-relaxed">
                <p>
                  Our team of certified appraisers and master craftsmen ensure each piece
                  in our collection meets the highest standards of authenticity and condition.
                </p>
                <p>
                  With decades of combined experience, we offer comprehensive restoration
                  services to preserve the beauty and value of your antique treasures.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-rich-black transition-all duration-300 font-serif tracking-wider"
              >
                Learn About Our Process
              </motion.button>
            </motion.div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
                alt="Restoration Workshop"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-burgundy text-cream p-6 max-w-xs rounded-lg">
                <p className="font-vintage text-2xl mb-2">Master Craftsmanship</p>
                <p className="font-serif">50+ Years of Combined Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-vintage text-antique-gold text-center mb-16">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              whileHover={{ y: -5 }}
              className="bg-rich-black/30 p-8 rounded-lg border border-antique-gold/20 backdrop-blur-sm"
            >
              <p className="font-serif text-cream/90 italic mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-vintage text-antique-gold">{testimonial.author}</p>
                  <p className="font-serif text-cream/70 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Decorative Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'url("/patterns/vintage-ornament.png")', 
            backgroundSize: '200px' 
          }} 
        />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-rich-black/80 backdrop-blur-sm border border-antique-gold/30 p-12 md:p-20 rounded-lg text-center"
          >
            <h2 className="text-4xl md:text-5xl font-vintage text-antique-gold mb-6">
              Begin Your Collection Today
            </h2>
            <p className="text-xl md:text-2xl font-serif text-cream/90 mb-12 max-w-3xl mx-auto">
              Whether you're seeking a specific piece or beginning your journey into the world of antiques, 
              our experts are here to guide you through our carefully curated collection.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-burgundy text-cream border border-antique-gold font-serif text-lg tracking-wider hover:bg-burgundy-dark transition-all duration-300"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-rich-black transition-all duration-300 font-serif text-lg tracking-wider"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
