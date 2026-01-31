
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import BestSellers from './components/BestSellers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 bg-olive-800 text-cream p-4 rounded-full shadow-2xl transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-olive-200 selection:text-olive-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <BestSellers />
        <Gallery />
        <section className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://lh3.googleusercontent.com/p/AF1QipOY3NNNI-QpuW77H27ng9ctrbAwx2xxEj7iJQP7=s1360-w1360-h1020-rw" 
               className="w-full h-full object-cover filter brightness-[0.3]" 
               alt="Order Background" 
             />
          </div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-6 sm:mb-8 leading-tight">Can't Make It To Sion?<br/><span className="italic font-normal text-olive-300">We'll Bring It To You.</span></h2>
             <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-cream/80 max-w-2xl mx-auto font-light">Skip the commute and order your favorites directly to your doorstep. Hot, fresh, and perfectly messy!</p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a 
                  href="https://www.zomato.com/mumbai/messy-addaa-sion-east" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-cream text-olive-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold hover:scale-105 transition-all shadow-2xl border-2 border-cream active:scale-95"
                >
                    🍔 Order via Zomato
                </a>
                <a 
                  href="https://www.swiggy.com/city/mumbai/messy-addaa-wadala-west-sion-rest133403" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent text-cream px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold hover:bg-cream/10 transition-all border-2 border-cream/30 active:scale-95"
                >
                    🛵 Order via Swiggy
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold hover:scale-105 hover:bg-green-500 transition-all shadow-2xl border-2 border-green-600 active:scale-95"
                >
                    📱 Order via WhatsApp
                </a>
             </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
