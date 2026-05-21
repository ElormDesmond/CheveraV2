import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, MoveDown, ShieldCheck, PenTool, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const [showDigiModal, setShowDigiModal] = useState(false);
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const flyers = [
    '/images/flyers/flyer1.jpeg',
    '/images/flyers/flyer2.jpeg',
    '/images/flyers/flyer3.jpeg',
    '/images/flyers/flyer4.jpeg',
    '/images/flyers/flyer5.jpeg',
    '/images/flyers/flyer6.jpeg',
    '/images/flyers/flyer7.jpeg',
    '/images/flyers/flyer8.jpeg',
  ];

  return (
    <div ref={containerRef} className="relative bg-obsidian overflow-hidden">
      {/* 1. VISIONARY HERO */}
      <section className="relative min-h-screen flex items-center px-8 pt-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian z-10" />
          <motion.img 
            style={{ y: y1 }}
            src="/images/archtecturalimage2.jpg" 
            className="w-full h-[120%] object-cover grayscale contrast-125"
            alt="Architecture Background"
          />
        </div>

        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-16 relative z-20 w-full">
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-amber font-black text-xs uppercase tracking-[0.4em] mb-8 bg-amber/5 px-4 py-2 rounded-full border border-amber/10">
                <ShieldCheck size={14} /> Established 2020 — Excellence Driven
              </span>
              <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic">
                Welcome to <br />
                <span className="text-amber not-italic relative">
                  CheVera
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute -bottom-4 left-0 h-4 bg-amber/20 blur-xl"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-ash/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed"
            >
              At CheVera, we are dedicated to providing quality and fast services that transform your vision into reality. Professional design, practical engineering, and dependable delivery.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1.2 }}
               className="flex flex-wrap gap-6"
            >
              <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="btn-amber text-lg">
                Chat With Us
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end relative">
             <motion.div 
               style={{ y: y2 }}
               className="w-full aspect-[3/4] rounded-amber overflow-hidden border-8 border-obsidian shadow-2xl relative"
             >
                <img src="/images/darkuman/dakuman_1.jpg" className="w-full h-full object-cover" alt="Featured Project" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-amber font-black text-[10px] uppercase tracking-widest mb-2">Exhibit 01</p>
                   <h3 className="text-2xl text-white uppercase tracking-tighter">The Darkuman Residence</h3>
                </div>
             </motion.div>
             <div className="mt-12 flex items-center gap-4 text-ash/20">
                <MoveDown size={48} className="animate-bounce" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 origin-left ml-4">Scroll to Explore</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES (FORMERLY HUB) */}
      <section className="py-32 px-8 bg-obsidian-light/30 border-y border-white/5 relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-20">
             <h4 className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-4">The Pillars</h4>
             <h2 className="text-5xl md:text-8xl text-white font-display font-black tracking-tighter uppercase leading-none">
                OUR <br /><span className="text-amber italic">SERVICES</span>.
             </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
             <HubCard 
               title="Architectural Studio" 
               desc="Excellence in master planning, structural soul, and 3D precision." 
               img="/images/h1.jpg" 
               path="/services"
               cat="01 — Build"
             />
             <HubCard 
               title="Travel / Tour" 
               desc="Curators of international travel, placements, and seamless journeys." 
               img="/images/travel_tour_assets/tour.jpg" 
               path="/logistics"
               cat="02 — Explore"
             />
             <HubCard 
               title="DigiPress Hub" 
               desc="Sharp digital branding and high-precision print protocols." 
               img="/images/ppp.jpg" 
               path="/digital"
               cat="03 — Identity"
             />
          </div>
        </div>
      </section>

      {/* 3. FEATURED EXHIBITS PREVIEW */}
      <section className="py-32 px-8">
         <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
               <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em] mb-4">Portfolio Highlight</h4>
               <h2 className="text-5xl md:text-7xl text-white font-display font-black uppercase tracking-tighter">RECENT <span className="text-amber italic">WORKS</span>.</h2>
            </div>
            <Link to="/services" className="btn-amber">View All Exhibits</Link>
         </div>
         
         <div className="grid md:grid-cols-2 gap-8">
            <Link to="/services" className="relative h-[600px] rounded-[3rem] overflow-hidden group cursor-pointer">
               <img src="/images/steaman/Steaman 3d 1.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Steaman" />
               <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
               <div className="absolute bottom-12 left-12">
                  <p className="text-amber font-black text-xs uppercase tracking-widest mb-2">Residential — 2023</p>
                  <h3 className="text-4xl text-white uppercase font-display font-black mb-4">Steaman Project</h3>
                  <div className="inline-flex items-center gap-2 text-amber font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Learn More <ArrowRight size={14} /></div>
               </div>
            </Link>
            <Link to="/services" className="relative h-[600px] rounded-[3rem] overflow-hidden group cursor-pointer">
               <img src="/images/darkuman/dakuman_1.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Darkuman" />
               <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
               <div className="absolute bottom-12 left-12">
                  <p className="text-amber font-black text-xs uppercase tracking-widest mb-2">Interior — 2024</p>
                  <h3 className="text-4xl text-white uppercase font-display font-black mb-4">Darkuman Residence</h3>
                  <div className="inline-flex items-center gap-2 text-amber font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Learn More <ArrowRight size={14} /></div>
               </div>
            </Link>
         </div>
      </section>

      {/* 4. NEWS & UPDATES */}
      <section className="py-32 border-t border-white/5 bg-obsidian overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="max-w-2xl">
              <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em] mb-6">Stay Informed</h4>
              <h2 className="text-5xl md:text-8xl text-white tracking-tighter leading-none font-display uppercase">NEWS & <br /><span className="text-amber italic">UPDATES</span>.</h2>
              <p className="text-ash/40 text-xl mt-8 leading-relaxed">
                 Stay updated with the latest studio developments, seasonal promotions, and detailed service orientations.
              </p>
           </div>
        </div>

        {/* Infinite Slider Wrapper */}
        <div className="flex gap-8 px-8 overflow-hidden group/slider">
           <motion.div 
             animate={{ x: [0, -1600] }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="flex gap-8 whitespace-nowrap"
             whileHover={{ animationPlayState: 'paused' }}
           >
              {[...flyers, ...flyers].map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedFlyer(img)}
                  className="w-[400px] h-[550px] rounded-[2rem] bg-obsidian-light border border-white/5 flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden flex-shrink-0 shadow-2xl"
                >
                   <img src={img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" alt={`Flyer ${idx}`} />
                   <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                   
                   <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <span className="text-white font-black uppercase tracking-widest text-[10px]">Full Orientation</span>
                      <ArrowRight className="text-amber" size={20} />
                   </div>
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* DigiPress Modal */}
      <AnimatePresence>
        {showDigiModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-obsidian/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-obsidian-light border border-white/10 p-12 rounded-[3rem] max-w-lg w-full relative overflow-hidden"
            >
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber/10 blur-[100px] rounded-full" />
               <button onClick={() => setShowDigiModal(false)} className="absolute top-6 right-6 text-ash/20 hover:text-white transition-colors z-10"><X size={24} /></button>
               <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center text-obsidian mb-8 shadow-[0_0_30px_rgba(252,165,3,0.3)]"><PenTool size={32} /></div>
               <h3 className="text-4xl text-white mb-2 uppercase font-display font-black tracking-tighter">DigiPress Hub</h3>
               <p className="text-amber font-black text-[10px] uppercase tracking-[0.4em] mb-8">Digital Design & High-Precision Prints</p>
               <ul className="space-y-4 mb-10">
                  {['Logo Designing', 'Mass Printing', 'Business Cards', 'Online Forms', 'Picture Framing'].map(service => (
                    <li key={service} className="flex items-center gap-3 text-white font-bold text-sm"><div className="w-1.5 h-1.5 rounded-full bg-amber" />{service}</li>
                  ))}
               </ul>
               <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="btn-amber w-full flex items-center justify-center gap-3">Contact Us Now <MessageCircle size={18} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flyer Modal */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFlyer(null)}
            className="fixed inset-0 z-[1001] flex items-center justify-center p-4 md:p-12 bg-obsidian/95 backdrop-blur-3xl cursor-zoom-out"
          >
             <button className="absolute top-8 right-8 text-white/20 hover:text-amber transition-colors"><X size={48} /></button>
             <motion.img 
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0.9 }}
               src={selectedFlyer} 
               className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border border-white/5" 
               alt="Flyer Full"
               onClick={(e) => e.stopPropagation()}
             />
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-amber text-obsidian px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px]">
                Full Orientation Mode
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HubCard = ({ title, desc, img, path, cat }: { title: string, desc: string, img: string, path: string, cat: string }) => (
  <Link to={path} className="group relative h-[700px] rounded-[3rem] overflow-hidden bg-obsidian-light border border-white/5">
    <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
    <div className="absolute bottom-12 left-12 right-12">
       <p className="text-amber font-black text-[10px] uppercase tracking-[0.5em] mb-4">{cat}</p>
       <h3 className="text-4xl text-white uppercase font-display font-black mb-6 leading-none tracking-tighter">{title}</h3>
       <p className="text-ash/40 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">{desc}</p>
       <div className="w-14 h-14 rounded-full bg-white text-obsidian flex items-center justify-center translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowRight size={24} />
       </div>
    </div>
  </Link>
);

export default Home;
