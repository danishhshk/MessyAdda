
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const categories = MENU_DATA.map(cat => cat.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeItems = MENU_DATA.find(cat => cat.category === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-16 sm:py-24 md:py-32 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-olive-600 font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3 text-xs sm:text-sm">Gourmet Selection</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-olive-900">The Messy Menu</h3>
          <p className="mt-4 sm:mt-6 text-olive-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed px-2">
            Curated with love and served with style. Each item is a signature creation from our master chefs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 border active:scale-95 ${
                activeCategory === cat
                  ? 'bg-olive-800 text-white shadow-xl border-olive-800'
                  : 'bg-white text-olive-700 hover:border-olive-400 border-olive-100 hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {activeItems.map((item, index) => (
            <MenuCard key={`${item.name}-${index}`} item={item} category={activeCategory} />
          ))}
        </div>

        <div className="mt-12 sm:mt-20 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white p-2 sm:p-3 sm:pl-6 rounded-full shadow-lg border border-olive-100 w-full sm:w-auto max-w-lg">
             <span className="text-olive-600 font-medium text-sm sm:text-base">Ready to feast?</span>
             <div className="flex gap-2 w-full sm:w-auto">
               <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="bg-olive-800 text-cream px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-olive-900 transition-all text-xs sm:text-sm active:scale-95 flex-1 sm:flex-none">
                 🍔 Zomato
               </a>
               <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="bg-olive-700 text-cream px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-olive-800 transition-all text-xs sm:text-sm active:scale-95 flex-1 sm:flex-none">
                 🛵 Swiggy
               </a>
               <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-green-500 transition-all text-xs sm:text-sm active:scale-95 flex-1 sm:flex-none">
                 📱 WhatsApp
               </a>
             </div>
          </div>
          <p className="text-olive-400 text-xs mt-4 sm:mt-6 tracking-widest uppercase">Prices are inclusive of all taxes</p>
        </div>
      </div>
    </section>
  );
};

interface MenuCardProps {
  item: MenuItem;
  category: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, category }) => {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-olive-50">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           {item.isBestSeller && (
            <span className="bg-amber-400 text-olive-950 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
              BESTSELLER
            </span>
           )}
        </div>
        <div className="absolute bottom-4 left-4">
           {item.isVeg && (
            <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg border border-green-500/30">
              <div className="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
              </div>
            </div>
           )}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-serif text-olive-900 group-hover:text-olive-600 transition-colors leading-tight">
            {item.name}
          </h4>
          <span className="text-xl font-bold text-olive-800 ml-4">
            ₹{item.price}
          </span>
        </div>
        
        <p className="text-olive-500 text-sm leading-relaxed font-light mb-6 flex-grow">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-olive-50">
          <span className="text-[10px] font-bold tracking-[0.2em] text-olive-400 uppercase">
            {category}
          </span>
          {item.isSpicy && (
            <span className="text-xs text-red-500 flex items-center gap-1 font-medium italic">
              Spicy 🔥
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
