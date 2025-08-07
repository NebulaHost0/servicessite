"use client";

import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  // Honeypot field for bots
  website: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    website: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setStatus({ type: 'error', message: 'First name is required' });
      return false;
    }
    if (!formData.lastName.trim()) {
      setStatus({ type: 'error', message: 'Last name is required' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: result.message || 'Your message has been sent successfully! We\'ll get back to you soon.' 
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
          website: '',
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Failed to send message. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please check your connection and try again.' 
      });
    }
  };

  const resetStatus = () => {
    setStatus({ type: 'idle', message: '' });
  };

  return (
    <div className="glass-card p-10 rounded-3xl animate-slideInRight">
      <h3 className="text-3xl font-semibold text-gray-100 mb-8">Send us a message</h3>
      
      {/* Status Messages */}
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-xl flex items-center ${
          status.type === 'success' 
            ? 'bg-green-900/30 border border-green-600/30 text-green-400' 
            : status.type === 'error'
            ? 'bg-red-900/30 border border-red-600/30 text-red-400'
            : 'bg-blue-900/30 border border-blue-600/30 text-blue-400'
        }`}>
          {status.type === 'loading' && <Loader2 className="h-5 w-5 mr-3 animate-spin" />}
          {status.type === 'success' && <CheckCircle className="h-5 w-5 mr-3" />}
          {status.type === 'error' && <AlertCircle className="h-5 w-5 mr-3" />}
          <span className="flex-1">{status.message}</span>
          {status.type !== 'loading' && (
            <button 
              onClick={resetStatus}
              className="ml-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              First Name <span className="text-red-400">*</span>
            </label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-input" 
              placeholder="Enter your first name"
              disabled={status.type === 'loading'}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-input" 
              placeholder="Enter your last name"
              disabled={status.type === 'loading'}
              required
            />
          </div>
        </div>

        {/* Honeypot field: visually hidden but accessible to bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleInputChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Email <span className="text-red-400">*</span>
          </label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input" 
            placeholder="Enter your email address"
            disabled={status.type === 'loading'}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Company</label>
          <input 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="form-input" 
            placeholder="Enter your company name (optional)"
            disabled={status.type === 'loading'}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea 
            rows={4} 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-input resize-none" 
            placeholder="Tell us about your project or inquiry..."
            disabled={status.type === 'loading'}
            required
          />
        </div>
      
        <button 
          type="submit" 
          className="w-full btn-primary pulse-on-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            'Send Message'
          )}
        </button>
        
        <p className="text-sm text-gray-400 text-center">
          <span className="text-red-400">*</span> Required fields
        </p>
      </form>
    </div>
  );
} 