import { useState, useRef } from 'react';

interface ComparisonProps {
  beforeImg: string;
  afterImg: string;
  labelBefore?: string;
  labelAfter?: string;
}

const ComparisonSlider = ({ beforeImg, afterImg, labelBefore = "Concept", labelAfter = "Reality" }: ComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-[2rem] overflow-hidden cursor-ew-resize select-none border-4 border-white/5"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Base) */}
      <img src={afterImg} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      <div className="absolute bottom-6 right-6 bg-amber text-obsidian px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">{labelAfter}</div>

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImg} className="absolute inset-0 w-full h-full object-cover grayscale" alt="Before" />
        <div className="absolute bottom-6 left-6 bg-white text-obsidian px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">{labelBefore}</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-amber shadow-[0_0_20px_rgba(252,165,3,0.5)] z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-amber rounded-full flex items-center justify-center text-obsidian shadow-2xl">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
