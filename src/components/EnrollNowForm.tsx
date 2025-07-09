import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Add this at the top for TypeScript Razorpay support
declare global {
  interface Window {
    Razorpay?: any;
  }
}

const EnrollNowForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    preferred_course: 'Powerful Devops Course',
  });
  const [loading, setLoading] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [waitingForPayment, setWaitingForPayment] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCardVisible(true);
    // Dynamically load Razorpay script if not already present
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Set API base URL (use env variable or localhost)
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleRazorpayPayment = async (amount: number) => {
    // 1. Create order on backend
    const res = await fetch(`${API_BASE_URL}/api/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency: 'INR', receipt: form.user_email }),
    });
    const order = await res.json();

    // 2. Open Razorpay Checkout
    const options = {
      key: 'rzp_live_qz01XefIdwgmrN', // Live Key ID
      amount: order.amount,
      currency: order.currency,
      name: 'Cloud Blogger',
      description: 'Course Enrollment',
      order_id: order.id,
      handler: function (response: any) {
        // Send confirmation email after payment
        fetch(`${API_BASE_URL}/api/enroll-now-confirm`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
          }),
        })
          .then(res => res.json())
          .then(data => {
            setPaymentSuccess(true);
            setSubmitted(true);
            setWaitingForPayment(false);
          })
          .catch(err => {
            setPaymentSuccess(true);
            setSubmitted(true);
            setWaitingForPayment(false);
          });
      },
      prefill: {
        name: form.user_name,
        email: form.user_email,
        contact: form.user_phone,
      },
      theme: {
        color: '#2563eb',
      },
    };
    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Razorpay SDK failed to load. Please refresh the page and try again.');
      setWaitingForPayment(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setWaitingForPayment(true);
      await handleRazorpayPayment(19999);
    } catch (error: any) {
      console.error('Enroll Now fetch error:', error);
      alert(error.message || 'A network error occurred. Please try again.');
      setWaitingForPayment(false);
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
          waitingForPayment && !paymentSuccess ? (
            <div className="flex justify-center items-center py-12">
              <span className="inline-block w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
            </div>
          ) : paymentSuccess ? (
            <div className="text-center text-lg text-grafanaBlue font-semibold py-8">
              Payment successful! Confirmation email sent.<br />
              <span className="block text-base text-gray-300 font-normal mt-4">
                Thank you for enrolling and completing your payment. Please check your email for confirmation and next steps.
              </span>
            </div>
          ) : (
            null
          )
        ) : loading ? (
          <div className="flex justify-center items-center py-12">
            <span className="inline-block w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="user_name" type="text" placeholder="Your Name" value={form.user_name} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <input name="user_email" type="email" placeholder="Your Email" value={form.user_email} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <input name="user_phone" type="tel" placeholder="Your Phone" value={form.user_phone} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <select name="preferred_course" value={form.preferred_course} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300">
              <option value="Powerful Devops Course">Powerful Devops Course</option>
            </select>
            <button type="submit" className="w-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white py-3 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105 active:scale-95 active:shadow-lg mt-2">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnrollNowForm; 