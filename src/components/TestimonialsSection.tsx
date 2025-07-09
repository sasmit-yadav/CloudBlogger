import React, { useState, useEffect } from 'react';
import universityLogo from '../assets/logo_addons/university.svg';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'DevOps Engineer',
      company: 'TCS',
      image: '👩‍💼',
      quote: 'Cloud Blogger transformed my career! From a fresher to a DevOps Engineer at TCS in just 6 months. The hands-on projects and placement support were incredible.',
      salary: '₹15 LPA'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      role: 'Cloud Engineer',
      company: 'Infosys',
      image: '👨‍💻',
      quote: 'The course structure is perfect for beginners. I learned Docker, Kubernetes, and Azure from scratch. Now I\'m working at Infosys with a great package.',
      salary: '₹16.2 LPA'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      role: 'Site Reliability Engineer',
      company: 'Wipro',
      image: '👩‍🔧',
      quote: 'The 1-on-1 mentoring sessions helped me understand complex concepts easily. The resume prep and interview guidance were game-changers for my career.',
      salary: '₹12.5 LPA'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Platform Engineer',
      company: 'HCL',
      image: '👨‍🏭',
      quote: 'Real-world projects gave me the confidence to handle production environments. The Terraform and GitLab CI/CD modules were particularly excellent.',
      salary: '₹22.3 LPA'
    }
  ];

  const colleges = [
    { name: 'IIT Delhi', logo: 'iit-delhi' },
    { name: 'IIT Bombay', logo: 'iit-bombay' },
    { name: 'NIT Trichy', logo: 'nit-trichy' },
    { name: 'NIT Warangal', logo: 'nit-warangal' },
    { name: 'BITS Pilani', logo: 'bits-pilani' },
    { name: 'VIT Vellore', logo: 'vit-vellore' },
    { name: 'SRM University', logo: 'srm-university' },
    { name: 'IIIT Hyderabad', logo: 'iiit-hyderabad' }
  ];

  // Carousel state for colleges
  const [currentCollegeIndex, setCurrentCollegeIndex] = useState(0);
  const collegesPerView = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCollegeIndex((prev) => (prev + collegesPerView) % colleges.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [colleges.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-grafanaBg scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Success Stories
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
              & Placements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our students have transformed their careers and landed dream jobs at top companies.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
                }`}
              >
                <div className="bg-grafanaGray rounded-2xl p-8 md:p-12 border border-gray-700">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-grafanaBlue to-grafanaGreen flex items-center justify-center text-3xl flex-shrink-0">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 text-grafanaGreen mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role} at {testimonial.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-grafanaGreen">{testimonial.salary}</div>
                          <div className="text-gray-400 text-sm">Package</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-grafanaGreen' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Colleges Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Students From Top Colleges</h3>
          {/* Mobile: horizontal scroll, Desktop: carousel */}
          <div className="relative max-w-4xl mx-auto px-2 md:px-8">
            {/* Mobile: scrollable row */}
            <div className="flex gap-8 overflow-x-auto no-scrollbar py-2 px-1 md:hidden">
              {colleges.map((college, index) => (
                <div
                  key={college.name}
                  className="bg-grafanaGray min-w-[180px] rounded-xl p-6 border border-gray-700 hover:border-grafanaGreen/50 transition-all duration-300 text-center group flex-shrink-0"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img src={universityLogo} alt={college.name + ' logo'} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="text-white font-semibold text-sm">{college.name}</div>
                </div>
              ))}
            </div>
            {/* Desktop: carousel */}
            <div className="hidden md:block">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700"
                  style={{ transform: `translateX(-${(currentCollegeIndex / collegesPerView) * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(colleges.length / collegesPerView) }).map((_, groupIdx) => (
                    <div key={groupIdx} className="flex gap-8 min-w-full justify-center">
                      {colleges.slice(groupIdx * collegesPerView, (groupIdx + 1) * collegesPerView).map((college, index) => (
                        <div
                          key={college.name}
                          className="bg-grafanaGray min-w-[180px] rounded-xl p-6 border border-gray-700 hover:border-grafanaGreen/50 transition-all duration-300 text-center group flex-shrink-0"
                        >
                          <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <img src={universityLogo} alt={college.name + ' logo'} className="w-12 h-12 object-contain" />
                          </div>
                          <div className="text-white font-semibold text-sm">{college.name}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {Array.from({ length: Math.ceil(colleges.length / collegesPerView) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCollegeIndex(idx * collegesPerView)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCollegeIndex / collegesPerView === idx ? 'bg-grafanaGreen' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-grafanaGray rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-grafanaGreen mb-2">1000+</div>
              <div className="text-gray-400">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-grafanaBlue mb-2">₹15 LPA</div>
              <div className="text-gray-400">Average Package</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-grafanaOrange mb-2">90%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 