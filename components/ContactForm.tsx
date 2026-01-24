'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    territory: '',
    revenue: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'website_contact_form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          territory: '',
          revenue: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-gray-500"
            placeholder="John Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-gray-500"
            placeholder="john@yourcompany.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-gray-500"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold mb-2 text-gray-300">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-gray-500"
            placeholder="ABC Roofing"
          />
        </div>

        {/* Territory */}
        <div>
          <label htmlFor="territory" className="block text-sm font-semibold mb-2 text-gray-300">
            Interested Territory *
          </label>
          <select
            id="territory"
            required
            value={formData.territory}
            onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white"
          >
            <option value="">Select Territory</option>
            <option value="St. Lucie County - Full">St. Lucie County - Full ($6,500/mo)</option>
            <option value="Palm Beach County - Full">Palm Beach County - Full ($6,500/mo)</option>
            <option value="Broward County - Full">Broward County - Full ($6,500/mo)</option>
            <option value="Miami-Dade County - Full">Miami-Dade County - Full ($6,500/mo)</option>
            <option value="City Territory">City Territory ($2,500/mo)</option>
            <option value="ZIP Territory">ZIP Territory ($1,200/mo)</option>
            <option value="Not Sure - Need Help">Not Sure - Need Help Choosing</option>
          </select>
        </div>

        {/* Revenue */}
        <div>
          <label htmlFor="revenue" className="block text-sm font-semibold mb-2 text-gray-300">
            Annual Revenue *
          </label>
          <select
            id="revenue"
            required
            value={formData.revenue}
            onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white"
          >
            <option value="">Select Revenue</option>
            <option value="Under $500K">Under $500K</option>
            <option value="$500K - $1M">$500K - $1M</option>
            <option value="$1M - $3M">$1M - $3M</option>
            <option value="$3M - $10M">$3M - $10M</option>
            <option value="Over $10M">Over $10M</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
          Tell Us About Your Business (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-gray-500 resize-none"
          placeholder="What are your biggest challenges with lead generation? What's your current cost per lead?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Territory Analysis →'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
          ✅ Thanks! Sean will email you within 30 minutes with your free territory analysis.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
          ❌ Something went wrong. Please email skaplan@instinctrise.com directly.
        </div>
      )}

      <p className="text-sm text-gray-500 text-center">
        By submitting, you agree to receive emails from InstinctRise. Unsubscribe anytime.
      </p>
    </form>
  );
}
