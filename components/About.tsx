
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-olive-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOY3NNNI-QpuW77H27ng9ctrbAwx2xxEj7iJQP7=s1360-w1360-h1020-rw" 
                alt="Cafe Interior" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" 
                alt="Latte Art" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-olive-800 text-cream p-8 rounded-2xl shadow-2xl z-20 w-[80%] hidden sm:block">
              <p className="text-xl font-serif italic leading-relaxed">"The perfect blend of cozy vibes and culinary innovation."</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-olive-400"></div>
                <p className="text-sm font-bold tracking-widest text-olive-300 uppercase">Sion's Favorite</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 lg:pl-8">
            <div>
              <h2 className="text-olive-600 font-bold tracking-widest uppercase mb-3 text-sm">Our Philosophy</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-olive-900 leading-tight">Crafting Memories In Sion Since 2021</h3>
            </div>
            <p className="text-lg text-olive-700 leading-relaxed font-light">
              Messy Adda isn't just a café; it's a vibrant community space in <span className="font-semibold text-olive-900 border-b-2 border-olive-200">Sion East</span>. We believe food should be an adventure. Our kitchen is a playground where traditional Mumbai flavors collide with global culinary techniques.
            </p>
            <div className="grid grid-cols-2 gap-10 py-4">
              <div className="group">
                <h4 className="text-4xl font-serif text-olive-800 group-hover:text-olive-600 transition-colors">60+</h4>
                <p className="text-olive-500 font-medium tracking-wide uppercase text-xs mt-1">Unique Recipes</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-serif text-olive-800 group-hover:text-olive-600 transition-colors">15k+</h4>
                <p className="text-olive-500 font-medium tracking-wide uppercase text-xs mt-1">Stories Shared</p>
              </div>
            </div>
            <p className="text-olive-700 italic border-l-2 border-olive-400 pl-6 py-2 leading-relaxed opacity-80">
              "We take the messiness of life and turn it into the beauty of our fusion platters. Every dish tells a story of local heritage and modern taste."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
