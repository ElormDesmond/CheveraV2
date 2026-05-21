import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Tag, Info, AlertTriangle } from 'lucide-react';
import { useVault } from '../hooks/useData';

const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'roofing', name: 'Imported Roofing' },
  { id: 'paint', name: 'Premium Paints' },
  { id: 'art', name: 'Bespoke Art' },
];

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Use the high-performance data hook
  const { data: serverItems } = useVault();

  // Fallback local data derived from company assets
  const localVault = [
    { id: 1, name: 'Obsidian Zinc Roofing', price: 1250, category: 'roofing', image_url: '/images/bm.jpg', stock_level: { Int32: 45, Valid: true } },
    { id: 2, name: 'Amber Matte Finish', price: 850, category: 'paint', image_url: '/images/archi.jpg', stock_level: { Int32: 120, Valid: true } },
    { id: 3, name: 'Structural Gray Enamel', price: 720, category: 'paint', image_url: '/images/ce.jpg', stock_level: { Int32: 85, Valid: true } },
    { id: 4, name: 'The Abstract Horizon', price: 4500, category: 'art', image_url: '/images/arblog.jpg', stock_level: { Int32: 1, Valid: true } },
    { id: 5, name: 'Premium Aluminum Sheets', price: 980, category: 'roofing', image_url: '/images/bps.jpg', stock_level: { Int32: 200, Valid: true } },
    { id: 6, name: 'Ghanaian Soul Portrait', price: 3200, category: 'art', image_url: '/images/arblog1.jpg', stock_level: { Int32: 1, Valid: true } },
  ];

  const vaultItems = serverItems || localVault;

  const filteredItems = vaultItems.filter((item: any) => 
    (activeCategory === 'all' || item.category === activeCategory) &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1. HEADER */}
      <header className="pt-48 pb-24 px-8 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[12rem] text-white tracking-tighter leading-none mb-8"
          >
            THE <span className="italic text-amber underline decoration-white/5">VAULT</span>.
          </motion.h1>
          <p className="text-ash/40 uppercase font-black tracking-[0.6em] text-sm">Curation of Premium Construction Materials</p>
        </div>
        
        {/* Decorative ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 blur-[120px] rounded-full -z-10" />
      </header>

      {/* 2. CONTROLS */}
      <section className="sticky top-20 z-50 bg-obsidian/80 backdrop-blur-xl border-y border-white/5 py-8 px-8 mb-16">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-500 ${
                    activeCategory === cat.id 
                      ? 'bg-amber text-obsidian shadow-[0_0_30px_rgba(252,165,3,0.3)]' 
                      : 'bg-obsidian-light text-ash/40 hover:text-white border border-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
           </div>

           <div className="relative w-full md:w-96 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-ash/20 group-focus-within:text-amber transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search the archive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-obsidian-light border border-white/10 rounded-full py-4 pl-16 pr-6 text-white focus:outline-none focus:border-amber/50 transition-all placeholder:text-ash/10"
              />
           </div>
        </div>
      </section>

      {/* 3. MASONRY GRID */}
      <main className="max-w-[1800px] mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
           <AnimatePresence mode="popLayout">
              {filteredItems.map((item: any) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-obsidian-light/50 border border-white/5 rounded-amber overflow-hidden"
                >
                   <div className="aspect-[4/5] overflow-hidden relative">
                      <img src={item.image_url} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-6 right-6">
                         <div className="bg-obsidian/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${(item.stock_level?.Int32 || 0) > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{(item.stock_level?.Int32 || 0) > 0 ? 'In Stock' : 'Ordered'}</span>
                         </div>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                         <button className="w-14 h-14 bg-amber rounded-full flex items-center justify-center text-obsidian hover:bg-white transition-colors">
                            <ShoppingBag size={20} />
                         </button>
                         <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-obsidian transition-colors">
                            <Info size={20} />
                         </button>
                      </div>
                   </div>

                   <div className="p-8">
                      <div className="flex items-center gap-2 text-amber font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                        <Tag size={12} />
                        {item.category}
                      </div>
                      <h3 className="text-2xl text-white mb-6 group-hover:text-amber transition-colors line-clamp-1 uppercase tracking-tighter">
                        {item.name}
                      </h3>
                      <div className="flex justify-between items-end">
                         <span className="text-ash/40 text-sm font-medium">Starting from</span>
                         <span className="text-2xl font-black text-white">GHC {Number(item.price).toLocaleString()}</span>
                      </div>
                   </div>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
           <div className="text-center py-48">
              <AlertTriangle className="mx-auto text-amber mb-6 opacity-20" size={64} />
              <h3 className="text-2xl text-ash/40 font-bold uppercase tracking-widest">Archive empty for this selection.</h3>
           </div>
        )}
      </main>
    </div>
  );
};

export default Store;
