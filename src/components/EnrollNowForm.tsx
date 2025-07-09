import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollNowForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCardVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/enroll-now`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send enrollment email. Please try again.');
      }
    } catch (error) {
      alert('Failed to send enrollment email. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-grafanaBg py-16 px-4 relative overflow-hidden">
      {/* Faint background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 80% 80%, #38bdf8 0%, transparent 60%)'}} />
      <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-grafanaGray border border-grafanaBlue/30 rounded-lg text-grafanaBlue font-semibold hover:bg-grafanaBlue/10 transition-colors duration-200 z-10"
        style={{ alignSelf: 'center' }}
      >
        ← Back to Home
      </button>
      <div className={`bg-grafanaGray rounded-2xl p-8 max-w-md w-full shadow-2xl border border-grafanaBlue/30 relative z-10 transition-all duration-700 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-grafana focus-within:shadow-grafana hover:border-blue-400/60 focus-within:border-blue-400/60`}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">Enroll Now</h1>
        {/* Gradient divider */}
        <div className="h-1 w-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 opacity-70" />
        <p className="text-gray-300 text-center mb-8">Take the first step toward your dream tech career. Fill out the form to enroll now!</p>
        {submitted ? (
          <div className="text-center text-lg text-grafanaBlue font-semibold py-8">
            Thank you for enrolling! We will connect with you within 24 hours.<br />
            <span className="block text-base text-gray-300 font-normal mt-4">Please check your email for a confirmation message.</span>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center py-12">
            <span className="inline-block w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="user_name" type="text" placeholder="Your Name" value={form.user_name} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <input name="user_email" type="email" placeholder="Your Email" value={form.user_email} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <input name="user_phone" type="tel" placeholder="Your Phone" value={form.user_phone} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <button type="submit" className="w-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white py-3 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105 active:scale-95 active:shadow-lg mt-2">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnrollNowForm; 