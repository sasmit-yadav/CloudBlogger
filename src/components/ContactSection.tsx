import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-grafanaBg scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in
              </span>
              <br />
              <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your tech career journey? Contact us for a free consultation and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-grafanaGray rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-grafanaBlue to-grafanaGreen flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+91 90123 45374</p>
                      <p className="text-gray-400 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-grafanaGreen to-grafanaOrange flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">connect@cloudblogger.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-grafanaOrange to-grafanaBlue flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Website</h4>
                      <p className="text-gray-300">www.cloudblogger.com</p>
                      <p className="text-gray-400 text-sm">Online learning platform</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mode & Timings */}
              <div className="bg-grafanaGray rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Mode & Timings</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Learning Mode</h4>
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-grafanaGreen/20 text-grafanaGreen rounded-full text-sm font-medium">
                        Online Mode
                      </span>
                      <span className="px-4 py-2 bg-grafanaBlue/20 text-grafanaBlue rounded-full text-sm font-medium">
                        Live Sessions
                      </span>
                      <span className="px-4 py-2 bg-grafanaOrange/20 text-grafanaOrange rounded-full text-sm font-medium">
                        Recorded Sessions
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Class Timings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>Weekdays Morning (Mon-Fri)</span>
                        <span>7:00 AM - 10:00 AM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Weekdays Evening (Mon-Fri)</span>
                        <span>7:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Weekends (Sat-Sun)</span>
                        <span>6:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Flexible Sessions</span>
                        <span>Available</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Support Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>Technical Support</span>
                        <span>24/7</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Career Counseling (Mon-Sun)</span>
                        <span>8:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-grafanaGray rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Book Free Consultation</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Preferred Course</label>
                  <select className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-grafanaBlue focus:outline-none transition-colors duration-300">
                    <option value="">Select a course</option>
                    <option value="complete">Complete Program</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white py-4 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Consultation
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  We'll get back to you within 24 hours
                </p>
              </div>

              {/* Quick Contact moved here */}
              <div className="mt-10 text-center">
                <div className="bg-grafanaGray rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                  <p className="text-gray-300 mb-6">
                    Call us directly or send us a WhatsApp message for instant support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="tel:+919012345374" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </a>
                    
                    <a href="https://wa.me/917669688362" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-gray-400 text-sm">
                © 2024 Cloud Blogger. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 