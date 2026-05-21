import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PenTool, HardHat, Box, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComparisonSlider from '../ui/ComparisonSlider';

const services = [
  {
    id: '01',
    icon: <PenTool size={48} />,
    title: "Architecture & Design",
    tagline: "Concepts that defy gravity.",
    desc: "From conceptual sketches to photorealistic 3D renders, we create functional, aesthetic spaces that inspire. Our designs focus on sustainability and modern Ghanaian aesthetics.",
    features: ["Bespoke Residential", "Urban Commercial", "Interior Curations", "Landscape Design"],
    img: "/images/h1.jpg"
  },
  {
    id: '02',
    icon: <HardHat size={48} />,
    title: "Civil Engineering",
    tagline: "Structural soul, mathematical heart.",
    desc: "Expert structural analysis and site engineering for robust construction. We ensure every project meets the highest international safety and durability standards.",
    features: ["Structural Integrity", "Project Management", "Site Inspections", "Land Surveying"],
    img: "/images/engineering image 2.jpg"
  },
  {
    id: '03',
    icon: <Box size={48} />,
    title: "Building Materials",
    tagline: "Sourcing Excellence for Modern Structures.",
    desc: "We supply premium, imported building materials that define the longevity of your project. From weather-resistant roofing to high-pigment artisan paints, our vault is curated for quality.",
    features: ["Imported Zinc Roofing", "Aluminum Sheets", "Matte & Gloss Paints", "Structural Adhesives"],
    img: "/images/bm.jpg"
  },
  {
    id: '04',
    icon: <Box size={48} />,
    title: "Interior & Exterior Design",
    tagline: "Atmosphere by design, logic by engineering.",
    desc: "We curate environments that resonate with your lifestyle. From photorealistic interior modeling to expansive landscape and exterior concepts, we define the soul of your space.",
    features: ["Bespoke Interior Modeling", "Landscape Architecture", "Lighting & Texture Design", "Functional Spatial Planning"],
    img: "/images/interiordesign3.jpeg"
  },
  {
    id: '05',
    icon: <PenTool size={48} />,
    title: "DigiPress Hub",
    tagline: "Branding and high-precision prints.",
    desc: "A creative epicenter for professional branding, large format prints, and architectural drawing reproductions. We merge speed with uncompromising quality.",
    features: ["Architectural Plan Printing", "Corporate Branding", "Large Format Prints", "Graphic Design Services"],
    img: "/images/ppp.jpg"
  }
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1. INTERACTIVE HEADER */}
      <main>
         {/* Transformation Feature */}
         <section className="pt-48 pb-32 px-8 border-b border-white/5 bg-obsidian-light/10">
            <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="space-y-8"
               >
                  <span className="text-amber font-black text-xs uppercase tracking-[0.5em]">Discover the perfect fusion of quality and service</span>
                  <h2 className="text-5xl md:text-8xl text-white tracking-tighter leading-none uppercase font-display">WHO ARE <br /><span className="text-amber italic">WE?</span></h2>
                  <p className="text-ash/40 text-xl max-w-lg leading-relaxed">
                     At CheVera, we stand out as a premier provider of personalized, high-quality solutions. Our passion drives us to deliver exceptional services tailored to your unique needs, where your satisfaction is our absolute priority.
                  </p>
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.2 }}
               >
                  <ComparisonSlider 
                    beforeImg="/images/3D Blueprint.jpeg" 
                    afterImg="/images/final Build.jpeg" 
                    labelBefore="Vision" 
                    labelAfter="Excellence" 
                  />
               </motion.div>
            </div>
         </section>

         {services.map((service, idx) => (
           <section 
             key={service.id} 
             className={`py-32 px-8 border-b border-white/5 last:border-0 ${idx % 2 !== 0 ? 'bg-obsidian-light/20' : ''}`}
           >
              <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-24 items-center">
                 <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-6 mb-12">
                       <span className="text-6xl font-display font-black text-white/5">{service.id}</span>
                       <div className="w-16 h-16 rounded-amber bg-amber/5 border border-amber/10 flex items-center justify-center text-amber">
                          {service.icon}
                       </div>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter leading-none font-display">
                       {service.title}
                    </h2>
                    <p className="text-amber font-black text-sm uppercase tracking-widest mb-10 italic">
                       {service.tagline}
                    </p>
                    
                    <p className="text-ash/40 text-xl leading-relaxed mb-12 max-w-xl">
                       {service.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-16">
                       {service.features.map(f => (
                         <div key={f} className="flex items-center gap-3 text-white font-bold group cursor-default">
                            <div className="w-5 h-5 rounded-full border border-amber/30 flex items-center justify-center group-hover:bg-amber transition-colors duration-500">
                               <CheckCircle2 size={12} className="text-amber group-hover:text-obsidian" />
                            </div>
                            {f}
                         </div>
                       ))}
                    </div>

                    <Link to="/contact" className="btn-amber">Contact Us Now</Link>
                 </div>

                 <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <motion.div 
                      whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="aspect-square lg:aspect-video rounded-[3rem] overflow-hidden relative group"
                    >
                       <img 
                         src={service.img} 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                         alt={service.title} 
                       />
                       <div className="absolute inset-0 bg-amber mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-1000" />
                    </motion.div>
                 </div>
              </div>
           </section>
         ))}

         {/* 3. COMPLETED & UPCOMING PROJECTS */}
         <section className="py-32 px-8 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Construction Background - Increased Visibility */}
            <div className="absolute inset-0 z-0">
               <img 
                 src="/images/constructionimage3.jpg" 
                 className="w-full h-full object-cover opacity-25 grayscale brightness-75 contrast-125"
                 alt="Construction Background"
               />
               <div className="absolute inset-0 bg-obsidian/40" />
            </div>

            <div className="max-w-[1800px] mx-auto text-center relative z-10">
               <h2 className="text-5xl md:text-[8rem] text-white tracking-tighter leading-none mb-12 font-display uppercase">
                  COMPLETED <br /><span className="text-amber italic">BUILDING PROJECTS</span>.
               </h2>
               
               <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
                  <Link to="/portfolio" className="btn-amber px-16">Explore Completed Works</Link>
                  <div className="group relative">
                     <button 
                        onClick={() => setShowModal(true)}
                        className="px-12 py-5 rounded-amber border border-white/10 text-ash/40 font-black hover:bg-white hover:text-obsidian transition-all duration-500 uppercase tracking-widest text-xs flex items-center gap-3"
                     >
                        Upcoming Projects <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </main>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showModal && (
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
              className="bg-obsidian-light border border-white/10 p-12 rounded-[3rem] max-w-md w-full text-center relative"
            >
               <button 
                 onClick={() => setShowModal(false)}
                 className="absolute top-6 right-6 text-ash/20 hover:text-white transition-colors"
               >
                  <X size={24} />
               </button>
               <div className="w-20 h-20 bg-amber/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber/10">
                  <HardHat className="text-amber" size={32} />
               </div>
               <h3 className="text-3xl text-white mb-4 uppercase font-display font-black tracking-tighter">Coming Soon</h3>
               <p className="text-ash/40 mb-8 font-medium">We are currently detailing three new landmark projects in Accra and Kasoa. Check back soon for the grand reveals.</p>
               <button 
                 onClick={() => setShowModal(false)}
                 className="btn-amber w-full"
               >
                  Understood
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
