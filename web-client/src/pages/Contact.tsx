import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-obsidian min-h-screen">
      {/* 1. HEADER */}
      <header className="pt-48 pb-20 px-8">
        <div className="max-w-[1800px] mx-auto">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           >
              <h1 className="text-7xl md:text-[10rem] text-white tracking-tighter leading-none mb-12 uppercase font-display">
                 LET'S <br /><span className="italic text-amber">COLLABORATE</span>.
              </h1>
           </motion.div>
        </div>
      </header>

      {/* 2. CONTENT */}
      <main className="max-w-[1800px] mx-auto px-8 pb-32">
         <div className="grid lg:grid-cols-12 gap-24">
            {/* Info Panel */}
            <div className="lg:col-span-4 space-y-16">
               <div className="space-y-8">
                  <h4 className="text-amber font-black text-xs uppercase tracking-[0.4em]">Direct Lines</h4>
                  <div className="space-y-6">
                     <ContactItem icon={<Phone />} label="Call Us" value="+233 244 202 241" />
                     <ContactItem icon={<Phone />} label="Call Us" value="+233 242 774 645" />
                     <ContactItem icon={<Mail />} label="Secure Mail" value="cheveraconsult@gmail.com" />
                     <ContactItem icon={<MapPin />} label="HQ Location" value="American Junction, Kasoa" />
                  </div>
               </div>

               <div className="p-10 rounded-amber bg-obsidian-light border border-white/5 relative overflow-hidden group">
                  <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tighter">Active Hours</h4>
                  <div className="space-y-3 text-sm">
                     <div className="flex justify-between text-ash/40 font-bold"><span>Mon — Fri</span> <span>08:00 — 19:00</span></div>
                     <div className="flex justify-between text-ash/40 border-t border-white/5 pt-3 font-bold"><span>Saturday</span> <span>09:00 — 18:00</span></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-white/5 rotate-12 transition-transform group-hover:scale-110 duration-700">
                     <Clock size={120} />
                  </div>
               </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-8">
               <GeneralForm />
            </div>
         </div>
      </main>
    </div>
  );
};

const GeneralForm = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-obsidian-light/50 border border-white/5 rounded-[3rem] p-12 md:p-20"
  >
     <form className="space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
           <InputGroup label="Your Identity" placeholder="Full Name" />
           <InputGroup label="Secure Mail" placeholder="email@address.com" />
        </div>
        <InputGroup label="Subject" placeholder="Architectural Consultation" />
        <div className="space-y-4">
           <label className="text-amber font-black text-[10px] uppercase tracking-[0.4em]">The Vision</label>
           <textarea 
             rows={6}
             className="w-full bg-obsidian border-b border-white/10 text-white p-6 focus:outline-none focus:border-amber transition-all resize-none text-lg"
             placeholder="Tell us about your project..."
           />
        </div>
        <div className="flex flex-wrap gap-6">
          <button type="submit" className="btn-amber px-12 py-5 flex items-center justify-center gap-4 group">
             Transmit Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </button>
          <a 
            href="https://wa.me/233541428690" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 rounded-amber border border-white/10 text-white font-black hover:bg-white hover:text-obsidian transition-all duration-500 uppercase tracking-widest text-xs flex items-center gap-4"
          >
             WhatsApp Studio <MessageCircle size={18} />
          </a>
        </div>
     </form>
  </motion.div>
);

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex gap-6 items-center group cursor-pointer">
     <div className="w-12 h-12 rounded-amber bg-obsidian-light border border-white/5 flex items-center justify-center text-ash/40 group-hover:bg-amber group-hover:text-obsidian transition-all duration-500">
        {icon}
     </div>
     <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-ash/20 mb-1">{label}</p>
        <p className="text-lg font-bold text-white group-hover:text-amber transition-colors">{value}</p>
     </div>
  </div>
);

const InputGroup = ({ label, placeholder }: { label: string, placeholder: string }) => (
  <div className="space-y-4">
     <label className="text-amber font-black text-[10px] uppercase tracking-[0.4em]">{label}</label>
     <input 
       type="text" 
       className="w-full bg-obsidian border-b border-white/10 text-white py-4 focus:outline-none focus:border-amber transition-all text-xl" 
       placeholder={placeholder}
     />
  </div>
);

export default Contact;
