
import React from 'react';
import { MENU_DATA } from '../constants';

const BestSellers: React.FC = () => {
  // Select specific best sellers from the data
  const bestSellers = MENU_DATA.flatMap(cat => cat.items.filter(item => item.isBestSeller)).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-olive-950 text-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-olive-800/20 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-olive-400 font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4 text-xs">Guest Favorites</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">Must-Try Signatures</h3>
            <p className="mt-4 sm:mt-6 text-olive-200 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Crafted with premium ingredients and our secret house blends. These are the dishes that define the Messy Adda experience.
            </p>
          </div>
          <a href="#menu" className="group flex items-center gap-2 sm:gap-3 text-cream/80 hover:text-cream transition-all font-medium border-b border-cream/20 hover:border-cream pb-2 whitespace-nowrap text-sm sm:text-base active:scale-95">
            Explore Full Menu
            <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {bestSellers.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/6] mb-8 shadow-2xl">
                <img 
                  src={item.image || `https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600`} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/90 via-olive-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-olive-600/80 backdrop-blur-md text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full text-white font-bold inline-block">
                      {idx === 0 ? "Chef's Choice" : "Top Rated"}
                    </span>
                  </div>
                  <h4 className="text-2xl font-serif mb-1 group-hover:text-cream transition-colors">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-olive-300 font-bold">₹{item.price}</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xs">★</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
