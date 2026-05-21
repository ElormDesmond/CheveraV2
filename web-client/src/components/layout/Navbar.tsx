import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Exhibits', path: '/portfolio' },
    { name: 'Connect', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-8 py-6',
        scrolled ? 'bg-obsidian/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-amber flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(252,165,3,0.4)]">
              <img src="/images/cheveralogo.png" className="w-10 h-10 object-contain transition-transform duration-700 group-hover:scale-110" alt="CheVera Logo" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-display font-black tracking-[-0.05em] leading-none text-white uppercase">
              CHE<span className="text-amber">VERA</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link",
                location.pathname === link.path && "text-amber after:w-full after:left-0"
              )}
            >
              <span className="mr-2 text-[10px] opacity-30 font-black">0{idx + 1}</span>
              {link.name}
            </Link>
          ))}
          
          <a href="tel:0244202241" className="btn-amber group/btn flex items-center gap-3">
            Call Us Now <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 rounded-amber bg-obsidian-light border border-white/10 flex items-center justify-center text-ash hover:border-amber transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-obsidian z-[200] flex flex-col p-8 pt-32"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-ash hover:bg-amber hover:text-obsidian transition-all duration-500"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="group"
                >
                  <span className="block text-amber text-sm font-black mb-2 opacity-50">0{idx + 1}</span>
                  <span className="text-6xl md:text-8xl font-display font-black text-white group-hover:text-amber group-hover:italic transition-all duration-500">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-white/5 pt-8 flex justify-between items-center text-ash/40 text-sm uppercase font-black tracking-widest">
               <span>Studio © 2026</span>
               <div className="flex gap-6">
                  <span className="hover:text-amber transition-colors cursor-pointer">Instagram</span>
                  <span className="hover:text-amber transition-colors cursor-pointer">LinkedIn</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
