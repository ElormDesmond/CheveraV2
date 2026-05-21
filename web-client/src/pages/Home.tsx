import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, MoveDown, ShieldCheck, PenTool, Layout, Box, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const [showDigiModal, setShowDigiModal] = useState(false);
  
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

      {/* 2. FEATURED PROJECTS */}
      <section className="py-32 px-8 bg-obsidian-light/30 border-y border-white/5 relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em] mb-6">Featured Projects</h4>
              <h2 className="text-5xl md:text-7xl text-white mb-12 uppercase font-display">SAMPLE 3D <br /><span className="text-amber italic">DESIGN PROJECTS</span>.</h2>
              <p className="text-ash/40 text-lg leading-relaxed mb-12 max-w-xl">
                Explore a curated selection of our finest architectural and engineering masterpieces. From residential villas to commercial hubs, we bring photorealistic precision to every vision.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                 <MethodCard icon={<PenTool className="text-amber" />} title="Steaman Project" desc="Bespoke architectural excellence." />
                 <MethodCard icon={<Layout className="text-amber" />} title="Darkuman" desc="Luxury interior curations." />
                 <MethodCard icon={<Box className="text-amber" />} title="Apartment Complex" desc="Premium materials and structural soul." />
                 <Link to="/portfolio" className="p-8 rounded-amber border border-dashed border-white/10 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-amber/40 transition-colors">
                    <p className="text-ash/20 font-black uppercase tracking-widest text-[10px]">Explore All</p>
                    <ArrowRight className="text-ash/20 group-hover:text-amber transition-colors mt-2" />
                 </Link>
              </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-1000 shadow-2xl">
                  <img src="/images/h4.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Process" />
               </div>
               <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber rounded-full flex items-center justify-center text-obsidian font-black text-center rotate-12 shadow-2xl">
                  <div>
                    <span className="block text-4xl leading-none italic">100%</span>
                    <span className="text-[10px] uppercase tracking-widest leading-tight block mt-1">Customer <br />Expectations</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="py-32 px-8 relative overflow-hidden">
        {/* Ambient background image for section */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <img src="/images/constructionimage1.jpg" className="w-full h-full object-cover grayscale brightness-50" alt="Construction Bg" />
        </div>

        <div className="max-w-[1800px] mx-auto text-center mb-24 relative z-10">
          <h2 className="text-6xl md:text-9xl text-white tracking-tighter uppercase font-display">OUR <span className="text-amber italic underline decoration-amber/10">SERVICES</span></h2>
          <p className="text-ash/40 mt-6 text-xl uppercase font-black tracking-widest">Precision. Integrity. Innovation. — Your vision, our mission.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
           {[
             { name: 'Architectural / Civil Engineering', cat: 'Master Planning', img: '/images/constructionimage1.jpg', path: '/services' },
             { name: 'Building Materials', cat: 'Premium Sourcing', img: '/images/bm.jpg', path: '/services' },
             { name: 'DigiPress Hub', cat: 'Branding & Prints', img: '/images/ppp.jpg', isModal: true }
           ].map((item, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -20 }}
               className="group relative h-[600px] rounded-amber overflow-hidden bg-obsidian-light border border-white/5"
             >
                <img src={item.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 text-left">
                   <p className="text-amber font-black text-xs uppercase tracking-[0.3em] mb-2">{item.cat}</p>
                   <h3 className="text-4xl text-white group-hover:italic transition-all uppercase leading-none tracking-tighter">{item.name}</h3>
                   
                   {item.isModal ? (
                      <button 
                        onClick={() => setShowDigiModal(true)}
                        className="inline-flex items-center gap-2 text-white/40 font-black text-[10px] uppercase tracking-widest mt-8 group-hover:text-amber transition-colors"
                      >
                        Learn More <ArrowRight size={14} />
                      </button>
                   ) : (
                      <Link to={item.path || '/services'} className="inline-flex items-center gap-2 text-white/40 font-black text-[10px] uppercase tracking-widest mt-8 group-hover:text-amber transition-colors">
                        Learn More <ArrowRight size={14} />
                      </Link>
                   )}
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 4. TRAVEL & TOUR */}
      <section className="py-32 px-8 bg-obsidian-light/20 border-t border-white/5">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
                 <img src="/images/travel_tour_assets/tour.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Travel and Tour" />
                 <div className="absolute inset-0 bg-amber/10 mix-blend-overlay" />
                 <div className="absolute top-8 left-8 bg-white text-obsidian px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Global Logistics</div>
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 flex items-center gap-6">
                 <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-obsidian"><Box size={24} /></div>
                 <div>
                    <p className="text-white font-black uppercase text-xs tracking-widest">New Deal</p>
                    <p className="text-ash/60 text-sm">Scholarships Available</p>
                 </div>
              </div>
           </div>

           <div className="order-1 lg:order-2 space-y-8">
              <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em]">CheVera Logistics</h4>
              <h2 className="text-5xl md:text-8xl text-white tracking-tighter leading-none font-display uppercase">TRAVEL AND TOUR <br /><span className="text-amber italic">UPDATES AND DEALS</span>.</h2>
              <p className="text-ash/40 text-xl leading-relaxed max-w-xl">
                 Stay updated with the latest travel news, exclusive deals, and curated itineraries for memorable adventures. Discover new destinations and book with confidence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   'Flight Booking', 
                   'Visa Applications', 
                   'DV Lottery Application', 
                   'International Scholarships', 
                   'International Work Deals'
                 ].map(item => (
                   <div key={item} className="flex items-center gap-3 text-ash/60 font-bold hover:text-white transition-colors cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                      {item}
                   </div>
                 ))}
              </div>

              <div className="pt-8">
                 <button className="nav-link !text-amber !text-sm">Learn More <ArrowRight size={14} className="inline ml-2" /></button>
              </div>
           </div>
        </div>
      </section>

      {/* 5. NEWS & UPDATES (CAROUSEL SECTION) */}
      <section className="py-32 border-t border-white/5 bg-obsidian overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="max-w-2xl">
              <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em] mb-6">Stay Informed</h4>
              <h2 className="text-5xl md:text-8xl text-white tracking-tighter leading-none font-display uppercase">NEWS & <br /><span className="text-amber italic">UPDATES</span>.</h2>
              <p className="text-ash/40 text-xl mt-8 leading-relaxed">
                 Stay updated with the latest studio developments, seasonal promotions, and detailed service orientations.
              </p>
           </div>
           <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ash/20">
                 <ArrowRight size={20} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-amber/50 flex items-center justify-center text-amber">
                 <ArrowRight size={20} />
              </div>
           </div>
        </div>

        {/* Infinite Slider Wrapper */}
        <div className="flex gap-8 px-8 overflow-hidden">
           <motion.div 
             animate={{ x: [0, -1600] }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="flex gap-8 whitespace-nowrap"
           >
              {[...flyers, ...flyers].map((img, idx) => (
                <div 
                  key={idx} 
                  className="w-[400px] h-[550px] rounded-[2rem] bg-obsidian-light border border-white/5 flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden flex-shrink-0 shadow-2xl"
                >
                   <img src={img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" alt={`Flyer ${idx}`} />
                   <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                   
                   <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <span className="text-white font-black uppercase tracking-widest text-xs">Full Orientation</span>
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
               {/* Modal ambient light */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber/10 blur-[100px] rounded-full" />
               
               <button 
                 onClick={() => setShowDigiModal(false)}
                 className="absolute top-6 right-6 text-ash/20 hover:text-white transition-colors z-10"
               >
                  <X size={24} />
               </button>
               
               <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center text-obsidian mb-8 shadow-[0_0_30px_rgba(252,165,3,0.3)]">
                  <PenTool size={32} />
               </div>
               
               <h3 className="text-4xl text-white mb-2 uppercase font-display font-black tracking-tighter">DigiPress Hub</h3>
               <p className="text-amber font-black text-[10px] uppercase tracking-[0.4em] mb-8">Digital Design & High-Precision Prints</p>
               
               <p className="text-ash/60 mb-8 leading-relaxed">
                  We provide a comprehensive suite of digital services designed for professional impact and uncompromising quality:
               </p>
               
               <ul className="space-y-4 mb-10">
                  {[
                    'Professional Logo Designing',
                    'High-Volume Mass Printing',
                    'Business Card Design & Print',
                    'Online Form Applications',
                    'Custom Picture Framing'
                  ].map(service => (
                    <li key={service} className="flex items-center gap-3 text-white font-bold text-sm">
                       <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                       {service}
                    </li>
                  ))}
               </ul>

               <a 
                 href="https://wa.me/233541428690" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-amber w-full flex items-center justify-center gap-3"
               >
                  Contact Us Now <MessageCircle size={18} />
               </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MethodCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-8 rounded-amber bg-obsidian-light border border-white/5 hover:border-amber/20 transition-all duration-500 group">
    <div className="w-12 h-12 bg-amber/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber group-hover:text-obsidian transition-all">
      {icon}
    </div>
    <h4 className="text-white text-xl mb-2 uppercase tracking-tighter font-display font-black">{title}</h4>
    <p className="text-ash/40 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;
