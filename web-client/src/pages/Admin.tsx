import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Layers, 
  MessageSquare, 
  Newspaper, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  MoreVertical,
  TrendingUp,
  Package,
  FileText
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen bg-obsidian text-white selection:bg-amber selection:text-obsidian">
      {/* 1. SIDEBAR */}
      <aside className="w-80 bg-obsidian-light/50 backdrop-blur-3xl border-r border-white/5 p-10 flex flex-col gap-12 sticky top-0 h-screen">
        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-amber rounded-amber flex items-center justify-center font-black text-obsidian text-xl shadow-[0_0_20px_rgba(252,165,3,0.2)]">C</div>
          <span className="text-xl font-display font-black tracking-tighter">STUDIO <span className="text-ash/30">ADMIN</span></span>
        </div>

        <nav className="flex-grow space-y-2">
           <SidebarBtn 
             icon={<LayoutDashboard size={20} />} 
             label="Analytics" 
             active={activeTab === 'overview'} 
             onClick={() => setActiveTab('overview')} 
           />
           <SidebarBtn 
             icon={<ShoppingBag size={20} />} 
             label="Vault Manager" 
             active={activeTab === 'vault'} 
             onClick={() => setActiveTab('vault')} 
           />
           <SidebarBtn 
             icon={<Layers size={20} />} 
             label="Exhibits" 
             active={activeTab === 'portfolio'} 
             onClick={() => setActiveTab('portfolio')} 
           />
           <SidebarBtn 
             icon={<MessageSquare size={20} />} 
             label="Inquiries" 
             active={activeTab === 'inquiries'} 
             onClick={() => setActiveTab('inquiries')} 
           />
           <SidebarBtn 
             icon={<Newspaper size={20} />} 
             label="Protocols" 
             active={activeTab === 'news'} 
             onClick={() => setActiveTab('news')} 
           />
        </nav>

        <div className="space-y-4">
           <button className="flex items-center gap-4 text-ash/40 hover:text-white transition-colors p-4 font-bold text-sm uppercase tracking-widest">
              <Settings size={20} /> Preferences
           </button>
           <button className="w-full flex items-center justify-center gap-3 bg-red-500/10 text-red-400 p-5 rounded-amber font-black uppercase tracking-widest text-[10px] hover:bg-red-500 hover:text-white transition-all">
              <LogOut size={16} /> Terminate Session
           </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT */}
      <main className="flex-grow p-16 overflow-y-auto">
         <header className="flex justify-between items-end mb-20">
            <div>
               <p className="text-amber font-black text-[10px] uppercase tracking-[0.5em] mb-2">Systems Status: Active</p>
               <h1 className="text-5xl font-display font-black uppercase tracking-tighter">Command Center</h1>
            </div>
            <div className="flex items-center gap-6">
               <div className="text-right">
                  <p className="font-bold text-lg">Studio Director</p>
                  <p className="text-ash/40 text-xs font-black uppercase tracking-widest">Verified Authorization</p>
               </div>
               <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber to-amber-dark border-4 border-obsidian shadow-2xl" />
            </div>
         </header>

         <AnimatePresence mode="wait">
            {activeTab === 'overview' && <Overview key="overview" />}
            {activeTab === 'vault' && <VaultManager key="vault" />}
         </AnimatePresence>
      </main>
    </div>
  );
};

const SidebarBtn = ({ icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-5 p-5 rounded-amber font-black uppercase tracking-widest text-[10px] transition-all duration-500 ${
      active ? 'bg-amber text-obsidian shadow-[0_0_30px_rgba(252,165,3,0.15)]' : 'text-ash/30 hover:bg-white/5 hover:text-white'
    }`}
  >
    {icon} {label}
  </button>
);

const Overview = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-12"
  >
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatTile title="Vault Inventory" value="124" trend="+12" icon={<Package />} />
        <StatTile title="Inbound Traffic" value="2.4k" trend="+18%" icon={<TrendingUp />} />
        <StatTile title="Pending Briefs" value="14" trend="-2" icon={<FileText />} />
     </div>

     <div className="bg-obsidian-light/30 border border-white/5 rounded-[3rem] p-12">
        <div className="flex justify-between items-center mb-12">
           <h3 className="text-2xl font-black uppercase tracking-tighter">Live Protocol Logs</h3>
           <button className="text-amber text-xs font-black uppercase tracking-widest border-b border-amber/30 pb-1">Historical Data</button>
        </div>
        
        <div className="space-y-6">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="flex items-center justify-between p-6 bg-obsidian/40 border border-white/5 rounded-2xl hover:border-amber/20 transition-all group">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-amber/5 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-obsidian transition-colors">
                      <MessageSquare size={18} />
                   </div>
                   <div>
                      <p className="font-bold">New architecture brief received from "Apex Estates"</p>
                      <p className="text-ash/20 text-xs font-black uppercase tracking-widest mt-1">Status: Pending Review — 14:20 UTC</p>
                   </div>
                </div>
                <button className="text-ash/20 hover:text-white transition-colors"><MoreVertical size={20} /></button>
             </div>
           ))}
        </div>
     </div>
  </motion.div>
);

const VaultManager = () => (
   <motion.div 
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -20 }}
     className="space-y-12"
   >
      <div className="flex justify-between items-center bg-obsidian-light/50 p-8 rounded-amber border border-white/5">
         <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ash/20 group-focus-within:text-amber transition-colors" size={18} />
            <input type="text" placeholder="Filter vault..." className="bg-obsidian border border-white/5 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-amber transition-all" />
         </div>
         <button className="btn-amber flex items-center gap-3">
            <Plus size={18} /> Add Entry
         </button>
      </div>

      <div className="bg-obsidian-light/30 border border-white/5 rounded-[3rem] overflow-hidden">
         <table className="w-full text-left">
            <thead className="bg-obsidian/50 text-ash/30 text-[10px] uppercase font-black tracking-widest border-b border-white/5">
               <tr>
                  <th className="px-10 py-8">Resource Name</th>
                  <th className="px-10 py-8">Classification</th>
                  <th className="px-10 py-8">Valuation (GHC)</th>
                  <th className="px-10 py-8">Availability</th>
                  <th className="px-10 py-8 text-right">Protocol</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
               {[
                 { name: 'Obsidian Zinc', cat: 'Roofing', price: '1,250', stock: 45 },
                 { name: 'Amber Matte Finish', cat: 'Paint', price: '850', stock: 120 },
                 { name: 'Abstract Horizon', cat: 'Art', price: '4,500', stock: 1 }
               ].map((item, i) => (
                 <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-10 py-8 font-bold text-lg">{item.name}</td>
                    <td className="px-10 py-8 text-amber font-black text-[10px] uppercase tracking-widest">{item.cat}</td>
                    <td className="px-10 py-8 font-black text-xl">{item.price}</td>
                    <td className="px-10 py-8">
                       <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="font-bold text-sm">{item.stock} units</span>
                       </div>
                    </td>
                    <td className="px-10 py-8 text-right space-x-4">
                       <button className="text-ash/20 hover:text-amber transition-colors uppercase font-black text-[10px] tracking-widest underline underline-offset-4 decoration-white/5">Update</button>
                       <button className="text-ash/20 hover:text-red-400 transition-colors uppercase font-black text-[10px] tracking-widest underline underline-offset-4 decoration-white/5">Remove</button>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
   </motion.div>
);

const StatTile = ({ title, value, trend, icon }: any) => (
  <div className="p-10 rounded-amber bg-obsidian-light/50 border border-white/5 group hover:border-amber/20 transition-all duration-500 relative overflow-hidden">
     <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-amber/5 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-obsidian transition-all">
           {icon}
        </div>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
           {trend}
        </span>
     </div>
     <p className="text-ash/30 font-black uppercase tracking-widest text-[10px] mb-2">{title}</p>
     <h4 className="text-4xl font-display font-black text-white uppercase tracking-tighter">{value}</h4>
     
     <div className="absolute -bottom-4 -right-4 text-white/5 group-hover:text-amber/10 transition-colors duration-700">
        {icon && <div className="scale-[3] rotate-12">{icon}</div>}
     </div>
  </div>
);

export default Admin;
