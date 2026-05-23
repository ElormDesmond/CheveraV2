import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, PenTool, HardHat, Box, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ComparisonSlider from "../ui/ComparisonSlider";

const architectureServices = [
  {
    icon: <PenTool size={48} />,
    title: "Architecture & Design",
    tagline: "Concepts that defy gravity.",
    desc: "From conceptual sketches to photorealistic 3D renders, we create functional, aesthetic spaces that inspire. Our designs focus on sustainability and modern Ghanaian aesthetics.",
    features: ["Bespoke Residential", "Urban Commercial", "Interior Curations", "Landscape Design"],
    img: "/images/h1.jpg"
  },
  {
    icon: <HardHat size={48} />,
    title: "Civil Engineering",
    tagline: "Structural soul, mathematical heart.",
    desc: "Expert structural analysis and site engineering for robust construction. We ensure every project meets the highest international safety and durability standards.",
    features: ["Structural Integrity", "Project Management", "Site Inspections", "Land Surveying"],
    img: "/images/engineering image 2.jpg"
  },
  {
    icon: <Box size={48} />,
    title: "Building Materials",
    tagline: "Sourcing Excellence for Modern Structures.",
    desc: "We supply premium, imported building materials that define the longevity of your project. From weather-resistant roofing to high-pigment artisan paints, our vault is curated for quality.",
    features: ["Imported Zinc Roofing", "Aluminum Sheets", "Matte & Gloss Paints", "Structural Adhesives"],
    img: "/images/bm.jpg"
  },
  {
    icon: <Box size={48} />,
    title: "Interior & Exterior Design",
    tagline: "Atmosphere by design, logic by engineering.",
    desc: "We curate environments that resonate with your lifestyle. From photorealistic interior modeling to expansive landscape and exterior concepts, we define the soul of your space.",
    features: ["Bespoke Interior Modeling", "Landscape Architecture", "Lighting & Texture Design", "Functional Spatial Planning"],
    img: "/images/interiordesign3.jpeg"
  }
];

const projects = [
  { id: 1, title: 'Steaman Project', category: 'Residential', thumbnail_url: '/images/steaman/Steaman 3d 1.jpg', completion_year: '2023', images: ['/images/steaman/S14 1_081249.jpg', '/images/steaman/S14 2_081236.jpg', '/images/steaman/S14 3_081314.jpg', '/images/steaman/Steaman 3d 1.jpg', '/images/steaman/Steaman 3d 2.jpg', '/images/steaman/Steaman 3d 3_024502.jpg'] },
  { id: 2, title: 'Darkuman Project', category: 'Interior', thumbnail_url: '/images/darkuman/dakuman_1.jpg', completion_year: '2024', images: ['/images/darkuman/dakuman_1.jpg', '/images/darkuman/dakuman_2.jpg', '/images/darkuman/dakuman_3.jpg', '/images/darkuman/dakuman_4.jpg', '/images/darkuman/dakuman_5.jpg'] },
  { id: 3, title: 'Apartment Complex', category: 'Residential', thumbnail_url: '/images/Apartments/Image1.png', completion_year: '2022', images: ['/images/Apartments/Image1.png', '/images/Apartments/Image2 2.png', '/images/Apartments/Image2.png', '/images/Apartments/Image6 2.png', '/images/Apartments/Image6.png', '/images/Apartments/Image7 2.png', '/images/Apartments/Image7.png'] },
  { id: 4, title: 'Modern Office Hub', category: 'Commercial', thumbnail_url: '/images/office/Image1.png', completion_year: '2023', images: ['/images/office/Image1.png', '/images/office/Image2.png', '/images/office/Image3.png', '/images/office/Image4.png', '/images/office/Image5.png', '/images/office/Image6.png', '/images/office/Image7.png'] },
  { id: 5, title: 'Family Worship Centre (CAC)', category: 'Religious', thumbnail_url: '/images/CAC/Front 1.png', completion_year: '2021', images: ['/images/CAC/CAC- Family Worshi Centre Bird view.png', '/images/CAC/CAC- Family Worshi Centre Front 1.jpg', '/images/CAC/CAC- Family Worshi Centre Front 2.jpg', '/images/CAC/Front 1.png', '/images/CAC/Front 2.png'] },
  { id: 6, title: 'City Church Project', category: 'Religious', thumbnail_url: '/images/church/church 1.png', completion_year: '2024', images: ['/images/church/church 1_000.png', '/images/church/church 1.png', '/images/church/church 2.png', '/images/church/church 3_000.png', '/images/church/church 3.png', '/images/church/church 4.png', '/images/church/church 5.png'] },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1. INTRO / VISION */}
      <section className="pt-48 pb-32 px-8 border-b border-white/5 bg-obsidian-light/10">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-8">
              <span className="text-amber font-black text-xs uppercase tracking-[0.5em]">Discover the perfect fusion of quality and service</span>
              <h2 className="text-5xl md:text-8xl text-white tracking-tighter leading-none uppercase font-display">WHO ARE <br /><span className="text-amber italic">WE?</span></h2>
              <p className="text-ash/40 text-xl max-w-lg leading-relaxed">
                 At CheVera, we stand out as a premier provider of personalized, high-quality solutions. Our passion drives us to deliver exceptional services tailored to your unique needs, where your satisfaction is our priority.
              </p>
           </motion.div>
           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <ComparisonSlider beforeImg="/images/3D Blueprint.jpeg" afterImg="/images/final Build.jpeg" labelBefore="Vision" labelAfter="Excellence" />
           </motion.div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURE SERVICES */}
      {architectureServices.map((service, idx) => (
        <section key={service.title} className={`py-32 px-8 border-b border-white/5 ${idx % 2 !== 0 ? 'bg-obsidian-light/20' : ''}`}>
           <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-24 items-center">
              <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                 <div className="w-16 h-16 rounded-amber bg-amber/5 border border-amber/10 flex items-center justify-center text-amber mb-12">
                    {service.icon}
                 </div>
                 <h2 className="text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter leading-none font-display">{service.title}</h2>
                 <p className="text-amber font-black text-sm uppercase tracking-widest mb-10 italic">{service.tagline}</p>
                 <p className="text-ash/40 text-xl leading-relaxed mb-12 max-w-xl">{service.desc}</p>
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
                 <motion.div whileInView={{ scale: [0.95, 1], opacity: [0, 1] }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="aspect-square lg:aspect-video rounded-[3rem] overflow-hidden relative group">
                    <img src={service.img} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={service.title} />
                    <div className="absolute inset-0 bg-amber mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-1000" />
                 </motion.div>
              </div>
           </div>
        </section>
      ))}

      {/* 3. EXHIBITS (INTEGRATED PORTFOLIO) */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1800px] mx-auto text-center">
           <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-4 block">Gallery of Works</span>
           <h2 className="text-7xl md:text-9xl text-white tracking-tighter leading-none font-display uppercase italic">RECENT <span className="text-amber not-italic">EXHIBITS</span>.</h2>
        </div>
      </section>

      <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group relative w-[450px] md:w-[700px] h-[600px] overflow-hidden rounded-amber bg-obsidian-light shadow-2xl cursor-pointer"
              >
                <img src={project.thumbnail_url} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                   <div>
                      <p className="text-amber font-black text-xs uppercase tracking-widest mb-2">{project.category} — {project.completion_year}</p>
                      <h3 className="text-4xl text-white uppercase tracking-tighter font-display">{project.title}</h3>
                   </div>
                   <div className="w-16 h-16 rounded-full bg-white text-obsidian flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-amber shadow-2xl"><ArrowUpRight size={24} /></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. UPCOMING ROADMAP */}
      <section className="py-32 px-8 border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
           <img src="/images/constructionimage3.jpg" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-25 grayscale brightness-75 contrast-125" alt="Bg" />
           <div className="absolute inset-0 bg-obsidian/40" />
        </div>
        <div className="relative z-10 max-w-[1800px] mx-auto">
           <h2 className="text-5xl md:text-[8rem] text-white tracking-tighter leading-none mb-12 font-display uppercase">ARCHITECTURAL <br /><span className="text-amber italic">DEVELOPMENTS</span>.</h2>
           <button onClick={() => setShowModal(true)} className="px-12 py-5 rounded-amber border border-white/10 text-ash/40 font-black hover:bg-white hover:text-obsidian transition-all duration-500 uppercase tracking-widest text-xs flex items-center gap-3 mx-auto">
              Upcoming Projects <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
           </button>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Roadmap Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-obsidian/90 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-obsidian-light border border-white/10 p-12 rounded-[3rem] max-w-md w-full text-center relative">
               <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-ash/20 hover:text-white"><X size={24} /></button>
               <HardHat className="text-amber mx-auto mb-8" size={64} />
               <h3 className="text-3xl text-white mb-4 uppercase font-display font-black tracking-tighter">Coming Soon</h3>
               <p className="text-ash/40 mb-8 font-medium">We are detailing new landmarks. Page update in progress.</p>
               <button onClick={() => setShowModal(false)} className="btn-amber w-full">Understood</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const nextImg = (e: any) => { e.stopPropagation(); setCurrentIdx((prev) => (prev + 1) % project.images.length); };
  const prevImg = (e: any) => { e.stopPropagation(); setCurrentIdx((prev) => (prev - 1 + project.images.length) % project.images.length); };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[1001] bg-obsidian/95 backdrop-blur-2xl flex flex-col p-8 md:p-16 overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full flex flex-col h-full">
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-2 block">{project.category} — {project.completion_year}</span>
            <h2 className="text-5xl md:text-7xl text-white font-display font-black uppercase tracking-tighter">{project.title}</h2>
          </div>
          <button onClick={onClose} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-obsidian transition-all duration-500"><X size={32} /></button>
        </div>
        <div className="flex-grow flex items-center justify-center relative min-h-[400px]">
          <button onClick={prevImg} className="absolute left-0 z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-obsidian transition-all"><ChevronLeft size={32} /></button>
          <AnimatePresence mode="wait">
            <motion.img key={currentIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} src={project.images[currentIdx]} loading="eager" decoding="async" className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/5" alt="Slide" onClick={(e) => e.stopPropagation()} />
          </AnimatePresence>
          <button onClick={nextImg} className="absolute right-0 z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-obsidian transition-all"><ChevronRight size={32} /></button>
        </div>
        <div className="mt-12 flex flex-col items-center gap-8">
           <div className="flex gap-4 overflow-x-auto pb-4 max-w-full no-scrollbar">
              {project.images.map((img: string, i: number) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentIdx(i); }} className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-500 border-2 ${currentIdx === i ? 'border-amber scale-110 shadow-xl' : 'border-transparent opacity-40'}`}><img src={img} className="w-full h-full object-cover" alt="Thumb" /></button>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
