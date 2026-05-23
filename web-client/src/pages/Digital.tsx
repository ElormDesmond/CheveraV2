import { motion } from 'framer-motion';
import { Printer, CreditCard, Share2, Layers, ArrowRight } from 'lucide-react';

const Digital = () => {
  const services = [
    { title: 'Logo Designing', desc: 'Bespoke brand identities that resonate and endure.', icon: <Layers /> },
    { title: 'Mass Printing', desc: 'High-volume, high-quality offset and digital print solutions.', icon: <Printer /> },
    { title: 'Business Cards', desc: 'Premium card stocks and sharp finishes for first impressions.', icon: <CreditCard /> },
    { title: 'Digital Branding', desc: 'Comprehensive visual strategy for modern corporate presence.', icon: <Share2 /> },
  ];

  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1. DIGITAL HERO */}
      <section className="relative pt-48 pb-32 px-8 overflow-hidden bg-obsidian-light/50">
        <div className="max-w-[1800px] mx-auto relative z-10">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           >
              <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-6 block">DigiPress Hub</span>
              <h1 className="text-7xl md:text-[10rem] text-white tracking-tighter leading-none font-display uppercase italic">
                 SHARP <br /><span className="text-amber not-italic">PRECISION</span>.
              </h1>
              <p className="text-ash/40 text-xl md:text-2xl max-w-2xl mt-12 leading-relaxed">
                 Uncompromising quality in every pixel and every print. We transform digital concepts into high-impact physical reality.
              </p>
           </motion.div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-amber/5 blur-[120px] rounded-full" />
      </section>

      {/* 2. SERVICES GRID */}
      <main className="py-20 px-8">
         <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-12">
            {services.map((svc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-12 rounded-[3rem] bg-obsidian-light border border-white/5 hover:border-amber/20 transition-all duration-500"
              >
                 <div className="flex justify-between items-start mb-12">
                    <div className="w-20 h-20 rounded-[2rem] bg-amber/5 border border-amber/10 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-obsidian transition-all duration-500">
                       {svc.icon}
                    </div>
                    <span className="text-6xl font-display font-black text-white/5">0{idx + 1}</span>
                 </div>
                 <h3 className="text-4xl text-white mb-6 uppercase tracking-tighter">{svc.title}</h3>
                 <p className="text-ash/40 text-lg leading-relaxed mb-12 max-w-md">{svc.desc}</p>
                 <a 
                   href="https://wa.me/233541428690" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 text-amber font-black text-xs uppercase tracking-widest group-hover:gap-6 transition-all"
                 >
                    Initiate Design Protocol <ArrowRight size={16} />
                 </a>
              </motion.div>
            ))}
         </div>

         {/* Print Quality Showcase */}
         <section className="mt-32 rounded-[4rem] overflow-hidden relative group">
            <img src="/images/ppp.jpg" className="w-full h-[600px] object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000" alt="Print Quality" />
            <div className="absolute inset-0 bg-obsidian/40" />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
               <h2 className="text-6xl md:text-9xl text-white font-display font-black tracking-tighter uppercase mb-8">HIGH OUTPUT. <br />ZERO ERROR.</h2>
               <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="btn-amber text-xl">Order Master Print</a>
            </div>
         </section>
      </main>

      {/* 3. CTA */}
      <section className="py-48 px-8 border-t border-white/5 text-center">
         <h2 className="text-5xl md:text-8xl text-white mb-12 uppercase tracking-tighter font-display leading-none">
            READY TO <span className="text-amber italic">BRAND?</span>
         </h2>
         <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="btn-amber px-16 text-lg">Connect With Us</a>
      </section>
    </div>
  );
};

export default Digital;
