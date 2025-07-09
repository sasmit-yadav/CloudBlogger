import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-grafanaGray scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unbeatable
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get world-class DevOps training for ALL 8 technologies at just ₹20,000 instead of ₹100,000. Save ₹80,000 while mastering the complete DevOps stack that companies are hiring for right now.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-grafanaBg rounded-2xl p-8 md:p-12 border border-grafanaOrange/30 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-grafanaBlue/10 to-blue-200/10"></div>
            
            {/* Discount badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-grafanaBlue to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
              80% OFF
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">Complete DevOps Program</h3>
                <p className="text-gray-300 text-lg">Everything you need to launch your tech career</p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-white">₹20,000</span>
                  <span className="text-2xl text-gray-400 ml-2">For the Powerful Course</span>
                </div>
                <div className="flex items-center justify-center text-gray-400">
                  <span className="text-xl line-through mr-4">₹100,000</span>
                  <span className="text-grafanaBlue font-semibold">Save ₹80,000</span>
                </div>
              </div>

              {/* EMI Options */}
              <div className="bg-grafanaGray rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">Flexible Payment Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-grafanaBg rounded-lg">
                    <div className="text-2xl font-bold text-grafanaGreen">₹6,667</div>
                    <div className="text-gray-400 text-sm">3 months EMI</div>
                  </div>
                  <div className="text-center p-4 bg-grafanaBg rounded-lg">
                    <div className="text-2xl font-bold text-grafanaBlue">₹3,333</div>
                    <div className="text-gray-400 text-sm">6 months EMI</div>
                  </div>
                  <div className="text-center p-4 bg-grafanaBg rounded-lg">
                    <div className="text-2xl font-bold text-grafanaOrange">₹1,667</div>
                    <div className="text-gray-400 text-sm">12 months EMI</div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">What's Included</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      8 Core Technology Courses
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      All Career Add-ons
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Job Placement Support
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lifetime Access
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Real-world Projects
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      1-on-1 Mentoring
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Certificate of Completion
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 Support
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center">
                <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-grafanaOrange hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>

              {/* Guarantee */}
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">
                  <span className="text-grafanaGreen font-semibold">Safe Transaction Guarantee</span> • Get started today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 