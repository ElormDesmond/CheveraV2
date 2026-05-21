import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-obsidian pt-32 pb-12 px-8 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Brand & Vision */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 bg-amber rounded-amber flex items-center justify-center">
                <span className="text-obsidian font-black text-xl">C</span>
              </div>
              <span className="text-3xl font-display font-black tracking-tighter text-white uppercase">
                CHE<span className="text-amber italic">VERA</span>
              </span>
            </Link>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-[1.1]">
              WE DON'T JUST BUILD <br />
              <span className="text-amber italic underline decoration-white/20 underline-offset-8">WE COMPOSE</span> SPACES.
            </h2>
            <div className="flex gap-4">
              {/* Twitter Icon */}
              <SocialBtn label="Twitter" href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </SocialBtn>
              {/* Facebook Icon */}
              <SocialBtn label="Facebook" href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialBtn>
              {/* WhatsApp Icon */}
              <SocialBtn label="WhatsApp" href="https://wa.me/233541428690">
                <MessageCircle size={20} />
              </SocialBtn>
              {/* LinkedIn Icon */}
              <SocialBtn label="LinkedIn" href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialBtn>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-amber font-black text-xs uppercase tracking-[0.3em]">Quicklinks</h4>
            <ul className="space-y-4">
              <FooterLink to="/services" label="Our Services" />
              <FooterLink to="/logistics" label="Travel / Tour" />
              <FooterLink to="/digital" label="DigiPress Hub" />
              <FooterLink to="/services" label="Recent Exhibits" />
              <FooterLink to="/contact" label="Connect" />
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-5 space-y-12">
            <h4 className="text-amber font-black text-xs uppercase tracking-[0.3em]">HQ — Kasoa, Ghana</h4>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <p className="text-ash/40 text-xs font-black uppercase tracking-widest">Address</p>
                 <p className="text-xl font-bold text-white leading-tight">
                    American Junction, <br />Kasoa, Ghana
                 </p>
              </div>
              <div className="space-y-4">
                 <p className="text-ash/40 text-xs font-black uppercase tracking-widest">Phone</p>
                 <div className="space-y-1">
                    <a href="tel:+233244202241" className="block text-lg font-bold text-white hover:text-amber transition-colors">+233 244 202 241</a>
                    <a href="tel:+233242774645" className="block text-lg font-bold text-white hover:text-amber transition-colors">+233 242 774 645</a>
                 </div>
              </div>
              <div className="space-y-4">
                 <p className="text-ash/40 text-xs font-black uppercase tracking-widest">Email</p>
                 <a href="mailto:cheveraconsult@gmail.com" className="block text-lg font-bold text-white hover:text-amber transition-colors">
                    cheveraconsult@gmail.com
                 </a>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-amber bg-obsidian-light p-8 border border-white/5">
               <h4 className="text-white font-black text-lg mb-2 uppercase tracking-tighter">Ready to Begin?</h4>
               <p className="text-ash/40 text-sm mb-6">Let's discuss your architectural vision today.</p>
               <a href="https://wa.me/233541428690" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  Schedule Consultation <ArrowRight size={16} />
               </a>
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 blur-3xl rounded-full -mr-16 -mt-16" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-ash/20 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026 CheVera Architectural Studio. All Rights Reserved.
          </p>
          <div className="flex gap-12 text-ash/20 text-[10px] font-black uppercase tracking-[0.4em]">
             <span className="hover:text-ash/60 transition-colors cursor-pointer">Privacy Protocol</span>
             <span className="hover:text-ash/60 transition-colors cursor-pointer">Terms of Service</span>
             <span className="text-ash/40">Dev: Desmond Honu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ children, label, href }: { children: React.ReactNode, label: string, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label} 
    className="w-12 h-12 rounded-amber bg-obsidian-light border border-white/5 flex items-center justify-center text-ash/60 hover:text-amber hover:border-amber transition-all duration-500"
  >
    {children}
  </a>
);

const FooterLink = ({ to, label }: { to: string, label: string }) => (
  <li>
    <Link to={to} className="text-ash/40 hover:text-amber font-black uppercase tracking-widest text-xs transition-all flex items-center gap-0 hover:gap-3 group">
       <div className="w-0 h-px bg-amber transition-all duration-500 group-hover:w-4" />
       {label}
    </Link>
  </li>
);

export default Footer;
