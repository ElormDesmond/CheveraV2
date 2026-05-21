import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Layers, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { 
    id: 1, 
    title: 'Steaman Project', 
    category: 'Residential', 
    thumbnail_url: '/images/steaman/Steaman 3d 1.jpg', 
    completion_year: '2023',
    folder: 'steaman',
    images: [
      '/images/steaman/S14 1_081249.jpg',
      '/images/steaman/S14 2_081236.jpg',
      '/images/steaman/S14 3_081314.jpg',
      '/images/steaman/Steaman 3d 1.jpg',
      '/images/steaman/Steaman 3d 2.jpg',
      '/images/steaman/Steaman 3d 3_024502.jpg'
    ]
  },
  { 
    id: 2, 
    title: 'Darkuman Project', 
    category: 'Interior', 
    thumbnail_url: '/images/darkuman/dakuman_1.jpg', 
    completion_year: '2024',
    folder: 'darkuman',
    images: [
      '/images/darkuman/dakuman_1.jpg',
      '/images/darkuman/dakuman_2.jpg',
      '/images/darkuman/dakuman_3.jpg',
      '/images/darkuman/dakuman_4.jpg',
      '/images/darkuman/dakuman_5.jpg'
    ]
  },
  { 
    id: 3, 
    title: 'Apartment Complex', 
    category: 'Residential', 
    thumbnail_url: '/images/Apartments/Image1.png', 
    completion_year: '2022',
    folder: 'Apartments',
    images: [
      '/images/Apartments/Image1.png',
      '/images/Apartments/Image2 2.png',
      '/images/Apartments/Image2.png',
      '/images/Apartments/Image6 2.png',
      '/images/Apartments/Image6.png',
      '/images/Apartments/Image7 2.png',
      '/images/Apartments/Image7.png'
    ]
  },
  { 
    id: 4, 
    title: 'Modern Office Hub', 
    category: 'Commercial', 
    thumbnail_url: '/images/office/Image1.png', 
    completion_year: '2023',
    folder: 'office',
    images: [
      '/images/office/Image1.png',
      '/images/office/Image2.png',
      '/images/office/Image3.png',
      '/images/office/Image4.png',
      '/images/office/Image5.png',
      '/images/office/Image6.png',
      '/images/office/Image7.png'
    ]
  },
  { 
    id: 5, 
    title: 'Family Worship Centre (CAC)', 
    category: 'Religious', 
    thumbnail_url: '/images/CAC/Front 1.png', 
    completion_year: '2021',
    folder: 'CAC',
    images: [
      '/images/CAC/CAC- Family Worshi Centre Bird view.png',
      '/images/CAC/CAC- Family Worshi Centre Front 1.jpg',
      '/images/CAC/CAC- Family Worshi Centre Front 2.jpg',
      '/images/CAC/Front 1.png',
      '/images/CAC/Front 2.png'
    ]
  },
  { 
    id: 6, 
    title: 'City Church Project', 
    category: 'Religious', 
    thumbnail_url: '/images/church/church 1.png', 
    completion_year: '2024',
    folder: 'church',
    images: [
      '/images/church/church 1_000.png',
      '/images/church/church 1.png',
      '/images/church/church 2.png',
      '/images/church/church 3_000.png',
      '/images/church/church 3.png',
      '/images/church/church 4.png',
      '/images/church/church 5.png'
    ]
  },
  { 
    id: 7, 
    title: 'Event Center', 
    category: 'Public', 
    thumbnail_url: '/images/eventcenter/3d impression_Event center.jpg', 
    completion_year: '2024',
    folder: 'eventcenter',
    images: [
      '/images/eventcenter/3d impression_Event center 2.jpg',
      '/images/eventcenter/3d impression_Event center 3.jpg',
      '/images/eventcenter/3d impression_Event center.jpg'
    ]
  },
];

const Portfolio = () => {
  const targetRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <div className="bg-obsidian">
      {/* 1. PORTFOLIO INTRO */}
      <section className="pt-48 pb-20 px-8">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-4 block">Archive of Excellence</span>
            <h1 className="text-7xl md:text-9xl text-white tracking-tighter leading-none">THE <br /><span className="italic text-amber underline decoration-white/10">EXHIBITS</span>.</h1>
          </motion.div>
        </div>
      </section>

      {/* 2. HORIZONTAL SCROLL SECTION */}
      <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
            
            {/* End of Gallery Indicator */}
            <div className="w-[400px] h-[600px] flex flex-col justify-center items-center text-center p-12 border-2 border-dashed border-white/10 rounded-amber">
               <Layers size={48} className="text-ash/20 mb-6" />
               <h3 className="text-white text-2xl mb-4">More in the Pipeline</h3>
               <p className="text-ash/40 text-sm">We are constantly shaping new realities. Check back soon for our latest completions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ROADMAP SECTION */}
      <section className="py-32 px-8 border-t border-white/5 bg-obsidian-light/10">
        <div className="max-w-[1800px] mx-auto text-center">
           <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-6 block">Future Scapes</span>
           <h2 className="text-5xl md:text-[8rem] text-white tracking-tighter leading-none mb-12 font-display uppercase">
              ARCHITECTURAL <br /><span className="text-amber italic">DEVELOPMENTS</span>.
           </h2>
           
           <div className="inline-flex items-center gap-4 bg-amber/5 border border-amber/20 px-8 py-4 rounded-full">
              <div className="w-3 h-3 rounded-full bg-amber animate-pulse" />
              <p className="text-white font-black uppercase tracking-widest text-xs">Page Update in Progress — Coming Soon</p>
           </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-48 px-8 text-center border-t border-white/5">
         <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em] mb-8">Ready to Build?</h4>
         <h2 className="text-5xl md:text-8xl text-white mb-12 uppercase tracking-tighter font-display leading-none">
            LET CHEVERA HELP BRING <br />YOUR <span className="text-amber italic underline decoration-white/10 underline-offset-8">VISION</span> TO LIFE.
         </h2>
         <Link to="/contact" className="btn-amber text-xl px-16">Materialize Project</Link>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: any, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="group relative w-[450px] md:w-[700px] h-[600px] overflow-hidden rounded-amber bg-obsidian-light shadow-2xl cursor-pointer"
  >
    <img 
      src={project.thumbnail_url} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
      alt={project.title} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
    
    <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
       <div>
          <p className="text-amber font-black text-xs uppercase tracking-widest mb-2">
            {project.category} — {project.completion_year}
          </p>
          <h3 className="text-4xl text-white uppercase tracking-tighter">{project.title}</h3>
       </div>
       <button className="w-16 h-16 rounded-full bg-white text-obsidian flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-amber shadow-2xl">
          <ArrowUpRight size={24} />
       </button>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImg = (e: any) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e: any) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[1000] bg-obsidian/95 backdrop-blur-2xl flex flex-col p-8 md:p-16 overflow-y-auto"
    >
      <div className="max-w-[1800px] mx-auto w-full flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="text-amber font-black text-xs uppercase tracking-[0.5em] mb-2 block">{project.category} — {project.completion_year}</span>
            <h2 className="text-5xl md:text-7xl text-white font-display font-black uppercase tracking-tighter">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-obsidian transition-all duration-500"
          >
            <X size={32} />
          </button>
        </div>

        {/* Gallery Slider */}
        <div className="flex-grow flex items-center justify-center relative min-h-[400px]">
          <button 
            onClick={prevImg}
            className="absolute left-0 z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-obsidian transition-all"
          >
            <ChevronLeft size={32} />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              src={project.images[currentIdx]}
              className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/5"
              alt={`Slide ${currentIdx}`}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          <button 
            onClick={nextImg}
            className="absolute right-0 z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-obsidian transition-all"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Thumbnails & Counter */}
        <div className="mt-12 flex flex-col items-center gap-8">
           <div className="flex gap-4 overflow-x-auto pb-4 max-w-full no-scrollbar">
              {project.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIdx(i); }}
                  className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-500 border-2 ${currentIdx === i ? 'border-amber scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
                </button>
              ))}
           </div>
           <p className="text-ash/40 font-black uppercase tracking-[0.4em] text-xs">
              Frame {currentIdx + 1} of {project.images.length}
           </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
