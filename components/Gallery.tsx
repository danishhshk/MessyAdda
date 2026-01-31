
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { id: "https://lh3.googleusercontent.com/p/AF1QipOY3NNNI-QpuW77H27ng9ctrbAwx2xxEj7iJQP7=s1360-w1360-h1020-rw", title: 'Messy Adda', size: 'col-span-2 md:col-span-2 row-span-2' },
    { id: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", title: 'Artisanal Brews', size: 'col-span-2 md:col-span-1 row-span-1' },
    { id: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800", title: 'Dumpling Soul', size: 'col-span-2 md:col-span-1 row-span-1' },
    { id: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", title: 'Pizza Nights', size: 'col-span-2 md:col-span-1 row-span-1' },
    { id: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", title: 'Morning Calm', size: 'col-span-2 md:col-span-1 row-span-1' },
    { id: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800", title: 'Sweet Temptation', size: 'col-span-2 md:col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <h2 className="text-olive-600 font-bold tracking-[0.2em] uppercase mb-2 sm:mb-4 text-xs">Vibe Check</h2>
          <h3 className="text-4xl sm:text-5xl font-serif text-olive-900 mb-4 sm:mb-6">Inside Messy Adda</h3>
          <div className="h-1 w-16 sm:w-20 bg-olive-200"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-[2rem] shadow-lg ${img.size}`}
            >
              <img 
                src={img.id} 
                alt={img.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-olive-950/0 group-hover:bg-olive-950/60 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-serif text-2xl tracking-wide translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                  {img.title}
                </span>
                <p className="text-olive-200 text-[10px] uppercase tracking-[0.3em] mt-2 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  Messy Moments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
