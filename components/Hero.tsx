
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/p/AF1QipOY3NNNI-QpuW77H27ng9ctrbAwx2xxEj7iJQP7=s1360-w1360-h1020-rw" 
          alt="Messy Adda Ambiance" 
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl py-16 sm:py-24 md:py-32">
        <span className="text-olive-300 font-medium tracking-[0.4em] uppercase mb-3 sm:mb-4 block animate-fade-in text-xs sm:text-sm md:text-base">
          Est. 2021 • Sion, Mumbai
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          A <span className="italic text-olive-300 font-normal">Beautiful</span> Messy Adda
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream/90 mb-6 sm:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Savour the fusion of artisanal ingredients and Mumbai's street soul in every bite.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <a href="#menu" className="group relative w-full sm:w-auto overflow-hidden bg-olive-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all shadow-xl hover:shadow-olive-900/40 active:scale-95">
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-olive-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-transparent border-2 border-cream/50 text-cream px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-cream hover:text-olive-900 transition-all backdrop-blur-sm active:scale-95">
            Find Us
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
