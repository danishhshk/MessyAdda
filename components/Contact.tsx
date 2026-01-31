
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-olive-600 font-semibold tracking-widest uppercase mb-2">Visit Us</h2>
            <h3 className="text-4xl font-serif text-olive-900 mb-8">Let's Connect</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-olive-100 p-3 rounded-lg text-olive-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-olive-900">Location</h4>
                  <p className="text-olive-700">Shop 4, Ground Floor, Central Plaza, Sion East, Mumbai - 400022</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-olive-100 p-3 rounded-lg text-olive-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-olive-900">Working Hours</h4>
                  <p className="text-olive-700">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-olive-100 p-3 rounded-lg text-olive-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-olive-900">Contact</h4>
                  <p className="text-olive-700">+91 98765 43210</p>
                  <p className="text-olive-700">hello@messyadda.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-1 bg-white rounded-2xl shadow-lg h-64 overflow-hidden border-2 border-olive-100">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9155926445644!2d72.8543476!3d19.0347746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfee3e178c67%3A0xc6a287d9d8248ae9!2sMessy%20Addaa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
               ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-olive-100">
            <h4 className="text-2xl font-serif text-olive-900 mb-6">Send us a message</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-olive-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-olive-100 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-olive-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-olive-100 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-olive-700 mb-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-olive-100 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all">
                  <option>Table Reservation</option>
                  <option>Feedback</option>
                  <option>Catering Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-olive-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-olive-100 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-olive-700 text-white py-4 rounded-xl font-bold hover:bg-olive-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
