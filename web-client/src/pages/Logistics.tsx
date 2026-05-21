import { motion } from 'framer-motion';
import { Plane, Globe, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

const Logistics = () => {
  const packages = [
    { title: 'Global Flight Booking', desc: 'Secure the best routes and rates for international and local travel.', icon: <Plane /> },
    { title: 'Visa Applications', desc: 'Expert guidance through complex visa buy and procurement processes.', icon: <Globe /> },
    { title: 'DV Lottery Support', desc: 'Professional assistance for your annual Diversity Visa applications.', icon: <ShieldCheck /> },
    { title: 'Study & Work Abroad', desc: 'Exclusive international scholarship and work placement deals.', icon: <CheckCircle2 /> },
  ];

  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1. LOGISTICS HERO */}
      <section className="relative pt-48 pb-32 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="/images/travel_tour_assets/tour.jpg" className="w-full h-full object-cover grayscale brightness-50" alt="Travel Background" />
           <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
              <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-6 block">Global Logistics & Tours</span>
              <h1 className="text-7xl md:text-[10rem] text-white tracking-tighter leading-none font-display uppercase italic">
                 EXPLORE <br /><span className="text-amber not-italic">WITHOUT LIMITS</span>.
              </h1>
              <p className="text-ash/40 text-xl md:text-2xl max-w-2xl mt-12 leading-relaxed">
                 From curated holiday packages to international work and study placements, we handle the complex logistics so you can focus on the journey.
              </p>
           </motion.div>
        </div>
      </section>

      {/* 2. CORE OFFERINGS */}
      <main className="py-20 px-8">
         <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card group"
              >
                 <div className="w-16 h-16 rounded-2xl bg-amber/5 border border-amber/10 flex items-center justify-center text-amber mb-8 group-hover:bg-amber group-hover:text-obsidian transition-all duration-500">
                    {pkg.icon}
                 </div>
                 <h3 className="text-2xl text-white mb-4 uppercase tracking-tighter">{pkg.title}</h3>
                 <p className="text-ash/40 text-sm leading-relaxed mb-8">{pkg.desc}</p>
                 <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                    Inquire Now <ArrowRight size={14} />
                 </a>
              </motion.div>
            ))}
         </div>

         {/* Travel Assets Gallery Preview */}
         <section className="mt-32">
            <div className="grid lg:grid-cols-2 gap-8">
               <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
                  <img src="/images/travel_tour_assets/vac.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Vacation" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
                  <div className="absolute bottom-12 left-12">
                     <h3 className="text-4xl text-white font-display font-black uppercase">Vacation <br />Curators</h3>
                  </div>
               </div>
               <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
                  <img src="/images/travel_tour_assets/opp.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Opportunity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
                  <div className="absolute bottom-12 left-12">
                     <h3 className="text-4xl text-white font-display font-black uppercase">International <br />Placements</h3>
                  </div>
               </div>
            </div>
         </section>
      </main>

      {/* 3. CTA */}
      <section className="py-48 px-8 bg-amber text-obsidian text-center">
         <h2 className="text-6xl md:text-[8rem] font-display font-black leading-none mb-12 uppercase tracking-tighter">START YOUR <br />ADVENTURE.</h2>
         <div className="flex justify-center gap-6">
            <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="px-16 py-6 bg-obsidian text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-transform shadow-2xl flex items-center gap-4">
               Message Logistics <MessageCircle size={20} />
            </a>
         </div>
      </section>
    </div>
  );
};

export default Logistics;
